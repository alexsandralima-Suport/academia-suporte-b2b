import { useEffect, useMemo, useState } from "react";
import { jsPDF } from "jspdf";
import { questions } from "../../data/questions";
import { studyContent } from "../../data/studyContent";

/* ===============================
   Helper para carregar imagem (PNG/JPG) como DataURL
================================= */
function loadImageAsDataURL(src) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = "anonymous";

    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;

      const ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0);

      resolve(canvas.toDataURL("image/png"));
    };

    img.onerror = () => reject(new Error(`Falha ao carregar imagem: ${src}`));
    img.src = src;
  });
}

function registrarCertificado(nome, aproveitamento) {
  fetch("/api/registro", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ nome, aproveitamento }),
  }).catch(() => {}); // falha silenciosa — não bloqueia o download do PDF
}

export default function Quiz() {
  const total = questions.length;
  const totalStudyItems = studyContent.length;

  // Lê o progresso salvo no localStorage ao iniciar
  const saved = useMemo(() => {
    try {
      return JSON.parse(localStorage.getItem("academia-b2b-progress") || "{}");
    } catch {
      return {};
    }
  }, []);

  const [step, setStep] = useState(saved.step || "study"); // "study" | "quiz" | "result" | "certificate"
  const [current, setCurrent] = useState(saved.current ?? 0);
  const [answers, setAnswers] = useState(saved.answers || Array(total).fill(null));
  const [name, setName] = useState("");
  const [showFeedback, setShowFeedback] = useState(false);

  // controle da trilha
  const [currentStudyIndex, setCurrentStudyIndex] = useState(saved.currentStudyIndex ?? 0);
  const [completedContentIds, setCompletedContentIds] = useState(saved.completedContentIds || []);

  const correctCount = useMemo(() => {
    return answers.reduce((acc, chosen, idx) => {
      if (chosen === null) return acc;
      return acc + (chosen === questions[idx].answerIndex ? 1 : 0);
    }, 0);
  }, [answers]);

  const percentage = useMemo(() => {
    if (total === 0) return 0;
    return Math.round((correctCount / total) * 100);
  }, [correctCount, total]);

  const passed = percentage >= 70;
  const allStudyCompleted = completedContentIds.length === totalStudyItems;
  const currentStudyItem = studyContent[currentStudyIndex];

  // Salva o progresso no localStorage sempre que o estado relevante mudar
  useEffect(() => {
    localStorage.setItem(
      "academia-b2b-progress",
      JSON.stringify({ step, current, answers, currentStudyIndex, completedContentIds })
    );
  }, [step, current, answers, currentStudyIndex, completedContentIds]);

  function selectOption(optionIndex) {
    const copy = [...answers];
    copy[current] = optionIndex;
    setAnswers(copy);
  }

  function next() {
    if (!showFeedback) {
      setShowFeedback(true);
      return;
    }

    setShowFeedback(false);

    if (current < total - 1) setCurrent((c) => c + 1);
    else setStep("result");
  }

  function back() {
    if (current > 0) {
      setShowFeedback(false);
      setCurrent((c) => c - 1);
    }
  }

  function completeCurrentContent() {
    if (!currentStudyItem) return;

    const alreadyCompleted = completedContentIds.includes(currentStudyItem.id);

    if (!alreadyCompleted) {
      setCompletedContentIds((prev) => [...prev, currentStudyItem.id]);
    }

    if (currentStudyIndex < totalStudyItems - 1) {
      setCurrentStudyIndex((prev) => prev + 1);
    }
  }

  function goToPreviousStudyItem() {
    if (currentStudyIndex > 0) {
      setCurrentStudyIndex((prev) => prev - 1);
    }
  }

  function reset() {
    localStorage.removeItem("academia-b2b-progress");
    setStep("study");
    setCurrent(0);
    setAnswers(Array(total).fill(null));
    setName("");
    setShowFeedback(false);
    setCurrentStudyIndex(0);
    setCompletedContentIds([]);
  }

  async function generateCertificatePDF() {
    try {
      const safeName = name.trim();

      if (!safeName) {
        alert("Digite seu nome para emitir o certificado.");
        return;
      }
      if (!passed) {
        alert("Você precisa de no mínimo 70% para emitir o certificado.");
        return;
      }

      const JUS_GREEN = [0, 64, 51];
      const JUS_LIGHT = [240, 243, 247];

      const doc = new jsPDF({
        orientation: "landscape",
        unit: "pt",
        format: "a4",
      });

      const W = doc.internal.pageSize.getWidth();
      const H = doc.internal.pageSize.getHeight();

      doc.setFillColor(...JUS_LIGHT);
      doc.rect(0, 0, W, H, "F");

      doc.setFillColor(255, 255, 255);
      doc.circle(150, 190, 85, "F");
      doc.circle(240, 360, 65, "F");
      doc.circle(W - 150, 180, 78, "F");
      doc.circle(W - 210, 380, 60, "F");

      doc.setFillColor(...JUS_GREEN);
      doc.rect(0, 0, W, 96, "F");

      doc.setTextColor(255, 255, 255);
      doc.setFont("helvetica", "bold");
      doc.setFontSize(28);
      doc.text("CERTIFICADO", W / 2, 60, { align: "center" });

      doc.setFont("helvetica", "normal");
      doc.setFontSize(12);
      doc.text("Apoiador (a) do Suporte B2B", W / 2, 82, { align: "center" });

      doc.setDrawColor(...JUS_GREEN);
      doc.setLineWidth(2.5);
      doc.rect(34, 34, W - 68, H - 68);

      doc.setTextColor(...JUS_GREEN);

      doc.setFont("helvetica", "normal");
      doc.setFontSize(18);
      doc.text("Certificamos que", W / 2, 210, { align: "center" });

      doc.setFont("helvetica", "bold");
      doc.setFontSize(40);
      const maxTextWidth = W * 0.75;
      const nameLines = doc.splitTextToSize(safeName, maxTextWidth);
      doc.text(nameLines, W / 2, 275, { align: "center" });

      const nameLineHeight = 42;
      const nameBlockHeight = (nameLines.length - 1) * nameLineHeight;
      const yAfterName = 275 + nameBlockHeight + 40;

      doc.setFont("helvetica", "bold");
      doc.setFontSize(22);
      doc.text("é Apoiador (a) do Suporte B2B", W / 2, yAfterName, {
        align: "center",
      });

      doc.setFont("helvetica", "normal");
      doc.setFontSize(14);
      doc.text(
        `Concluiu o quiz com aproveitamento de ${percentage}%.`,
        W / 2,
        yAfterName + 34,
        { align: "center" }
      );

      const dateStr = new Date().toLocaleDateString("pt-BR");
      doc.setFontSize(12);
      doc.text(`Emitido em: ${dateStr}`, W / 2, yAfterName + 62, {
        align: "center",
      });

      doc.setDrawColor(...JUS_GREEN);
      doc.setLineWidth(1);
      doc.line(W / 2 - 180, H - 150, W / 2 + 180, H - 150);

      doc.setFont("helvetica", "bold");
      doc.setFontSize(12);
      doc.text("Suporte B2B Jusbrasil Soluções", W / 2, H - 130, {
        align: "center",
      });

      doc.setFont("helvetica", "normal");
      doc.setFontSize(10);
      doc.setTextColor(80, 80, 80);
      doc.text("Certificado gerado automaticamente.", W / 2, H - 112, {
        align: "center",
      });

      try {
        const selo = await loadImageAsDataURL("/img/selo_novo2.15");

        const img = new Image();
        img.src = selo;
        await new Promise((resolve, reject) => {
          img.onload = resolve;
          img.onerror = reject;
        });

        const originalW = img.naturalWidth || img.width;
        const originalH = img.naturalHeight || img.height;

        const desiredW = 130;
        const desiredH = (originalH * desiredW) / originalW;

        const marginLeft = 48;
        const marginBottom = 58;

        const imgX = marginLeft;
        const imgY = H - desiredH - marginBottom;

        doc.addImage(selo, "PNG", imgX, imgY, desiredW, desiredH);
      } catch (e) {
        console.warn("Selo não carregou:", e);
      }

      doc.save(`certificado-${safeName.replace(/\s+/g, "-").toLowerCase()}.pdf`);
      registrarCertificado(safeName, percentage);
    } catch (err) {
      console.error("Erro ao gerar certificado:", err);
      alert("Erro ao gerar certificado. Veja o console (F12).");
    }
  }

  // ===============================
  // RENDER
  // ===============================

  if (step === "study") {
    const completedCount = completedContentIds.length;
    const progressPct = Math.round((completedCount / totalStudyItems) * 100);
    const isLastStudyItem = currentStudyIndex === totalStudyItems - 1;

    return (
      <div style={{ maxWidth: 900, margin: "40px auto", fontFamily: "Arial" }}>

        {/* Cabeçalho */}
        <h2 style={{ margin: "0 0 4px 0", color: "#004033" }}>📚 Trilha de Aprendizado</h2>
        <p style={{ color: "#666", marginTop: 4, marginBottom: 20 }}>
          Leia cada módulo e conclua para avançar. O quiz é liberado ao terminar toda a trilha.
        </p>

        {/* Barra de progresso geral */}
        <div style={{ marginBottom: 28 }}>
          <div style={{ display: "flex", justifyContent: "space-between", fontSize: 12, color: "#777", marginBottom: 6 }}>
            <span>Progresso geral</span>
            <span>{completedCount} de {totalStudyItems} módulos concluídos</span>
          </div>
          <div style={{ height: 8, background: "#e6eaef", borderRadius: 999, overflow: "hidden" }}>
            <div style={{ height: "100%", width: `${progressPct}%`, background: "#004033", borderRadius: 999, transition: "width 300ms ease" }} />
          </div>
        </div>

        {/* Layout em duas colunas: navegador + conteúdo */}
        <div style={{ display: "flex", gap: 24, alignItems: "flex-start" }}>

          {/* Coluna esquerda: navegador de módulos */}
          <div style={{
            minWidth: 220,
            maxWidth: 240,
            background: "#f6f8fa",
            border: "1px solid #e0e6ed",
            borderRadius: 14,
            padding: "16px 12px",
            flexShrink: 0,
          }}>
            <p style={{ margin: "0 0 12px 4px", fontSize: 11, fontWeight: "bold", color: "#888", textTransform: "uppercase", letterSpacing: 1 }}>
              Módulos
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
              {studyContent.map((item, idx) => {
                const isCompleted = completedContentIds.includes(item.id);
                const isCurrent = currentStudyIndex === idx && !allStudyCompleted;
                const isAccessible = isCompleted || idx <= currentStudyIndex;

                return (
                  <div
                    key={item.id}
                    onClick={() => isAccessible && setCurrentStudyIndex(idx)}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 10,
                      padding: "8px 10px",
                      borderRadius: 8,
                      cursor: isAccessible ? "pointer" : "default",
                      background: isCurrent ? "#004033" : "transparent",
                      transition: "background 150ms",
                    }}
                  >
                    <span style={{ fontSize: 14, minWidth: 18, textAlign: "center" }}>
                      {isCompleted ? "✅" : isCurrent ? "▶" : "○"}
                    </span>
                    <span style={{
                      fontSize: 13,
                      color: isCurrent ? "#ffffff" : isCompleted ? "#004033" : "#aaa",
                      fontWeight: isCurrent || isCompleted ? "600" : "normal",
                      lineHeight: 1.3,
                    }}>
                      {item.title}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Coluna direita: conteúdo atual ou tela de conclusão */}
          <div style={{ flex: 1, minWidth: 0 }}>

            {!allStudyCompleted && currentStudyItem && (
              <div style={{ background: "#fff", border: "1px solid #ddd", borderRadius: 14, overflow: "hidden" }}>

                {/* Cabeçalho verde com título */}
                <div style={{
                  background: "linear-gradient(135deg, #004033 0%, #006b52 100%)",
                  padding: "20px 28px 22px",
                }}>
                  <span style={{
                    display: "inline-block",
                    fontSize: 10,
                    fontWeight: "bold",
                    color: "#a8d8c8",
                    background: "rgba(255,255,255,0.12)",
                    borderRadius: 20,
                    padding: "2px 10px",
                    marginBottom: 10,
                    textTransform: "uppercase",
                    letterSpacing: 1,
                  }}>
                    Módulo {currentStudyIndex + 1} de {totalStudyItems}
                  </span>
                  <h3 style={{ margin: 0, color: "#ffffff", fontSize: 21, fontWeight: "700", lineHeight: 1.3 }}>
                    {currentStudyItem.title}
                  </h3>
                </div>

                {/* Corpo em texto corrido */}
                <div style={{ padding: "28px 28px 8px" }}>

                  {/* Parágrafo de abertura — destaque */}
                  <p style={{
                    fontSize: 15,
                    lineHeight: 1.85,
                    color: "#1a1a1a",
                    fontWeight: "500",
                    borderLeft: "3px solid #004033",
                    paddingLeft: 16,
                    margin: "0 0 20px 0",
                  }}>
                    {currentStudyItem.bullets[0]}
                  </p>

                  {/* Demais parágrafos separados por ornamento */}
                  {currentStudyItem.bullets.slice(1).map((b, i) => (
                    <div key={i}>
                      <div style={{ textAlign: "center", color: "#c5d4cc", fontSize: 16, margin: "6px 0 14px", letterSpacing: 6 }}>
                        · · ·
                      </div>
                      <p style={{
                        fontSize: 14,
                        lineHeight: 1.9,
                        color: "#3a3a3a",
                        margin: "0 0 6px 0",
                      }}>
                        {b}
                      </p>
                    </div>
                  ))}

                </div>

                {/* Mensagem de confirmação */}
                <div style={{ margin: "20px 28px 0", padding: "12px 16px", background: "#f0f3f7", borderRadius: 10, color: "#555", fontSize: 13, borderLeft: "4px solid #004033" }}>
                  {currentStudyItem.validator?.message}
                </div>

                {/* Botões */}
                <div style={{ margin: "20px 28px 24px", display: "flex", gap: 10, flexWrap: "wrap" }}>
                  <button
                    onClick={goToPreviousStudyItem}
                    disabled={currentStudyIndex === 0}
                    style={{ padding: "9px 16px", borderRadius: 8, border: "1px solid #ccc", background: "#fff", cursor: currentStudyIndex === 0 ? "default" : "pointer", opacity: currentStudyIndex === 0 ? 0.4 : 1 }}
                  >
                    ← Anterior
                  </button>
                  <button
                    onClick={completeCurrentContent}
                    style={{ background: "#004033", color: "white", border: "none", padding: "9px 20px", borderRadius: 8, cursor: "pointer", fontWeight: "bold" }}
                  >
                    {currentStudyItem.validator?.buttonLabel || (isLastStudyItem ? "Concluir trilha ✓" : "Concluir e avançar →")}
                  </button>
                  <button onClick={reset} style={{ padding: "9px 14px", borderRadius: 8, border: "1px solid #ccc", background: "#fff", cursor: "pointer", opacity: 0.6 }}>
                    Reiniciar
                  </button>
                </div>
              </div>
            )}

            {allStudyCompleted && (
              <div style={{ background: "#eef8f3", border: "1px solid #b3d9cc", borderRadius: 14, padding: "36px 28px", textAlign: "center" }}>
                <div style={{ fontSize: 48, marginBottom: 12 }}>🎉</div>
                <h3 style={{ margin: "0 0 8px 0", color: "#004033", fontSize: 22 }}>Trilha concluída!</h3>
                <p style={{ color: "#446655", marginBottom: 24, fontSize: 15 }}>
                  Você completou os {totalStudyItems} módulos. O quiz está liberado.
                </p>
                <div style={{ display: "flex", gap: 12, justifyContent: "center" }}>
                  <button
                    onClick={() => { setCurrent(0); setStep("quiz"); }}
                    style={{ background: "#004033", color: "white", border: "none", padding: "12px 28px", borderRadius: 10, cursor: "pointer", fontWeight: "bold", fontSize: 15 }}
                  >
                    Iniciar Quiz →
                  </button>
                  <button onClick={reset} style={{ padding: "12px 20px", borderRadius: 10, border: "1px solid #ccc", background: "#fff", cursor: "pointer", opacity: 0.7 }}>
                    Reiniciar trilha
                  </button>
                </div>
              </div>
            )}

          </div>
        </div>
      </div>
    );
  }

  if (step === "quiz") {
    const progressPct = Math.round(((current + 1) / total) * 100);
    const q = questions[current];
    const chosen = answers[current];

    return (
      <div style={{ maxWidth: 720, margin: "40px auto", fontFamily: "Arial" }}>
        <h2>Quiz</h2>
        <p>
          Pergunta {current + 1} de {total}
        </p>

        <div style={{ margin: "10px 0 16px 0" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              fontSize: 12,
              color: "#555",
            }}
          >
            <span>Progresso</span>
            <span>{progressPct}%</span>
          </div>

          <div
            style={{
              height: 10,
              background: "#e6eaef",
              borderRadius: 999,
              overflow: "hidden",
              marginTop: 6,
            }}
          >
            <div
              style={{
                height: "100%",
                width: `${progressPct}%`,
                background: "#004033",
                borderRadius: 999,
                transition: "width 250ms ease",
              }}
            />
          </div>
        </div>

        <div
          style={{
            padding: 16,
            border: "1px solid #ddd",
            borderRadius: 12,
          }}
        >
          <h3 style={{ marginTop: 0 }}>{q.question}</h3>

          <div style={{ display: "grid", gap: 10 }}>
            {q.options.map((opt, idx) => {
              const isCorrect = idx === q.answerIndex;
              const isSelected = chosen === idx;

              let background = "white";
              let border = "1px solid #ccc";
              let cursor = "pointer";

              if (showFeedback) {
                cursor = "default";
                if (isCorrect) {
                  background = "#d4edda";
                  border = "2px solid green";
                } else if (isSelected && !isCorrect) {
                  background = "#f8d7da";
                  border = "2px solid crimson";
                }
              } else {
                if (isSelected) background = "#e6f0ff";
              }

              return (
                <button
                  key={idx}
                  onClick={() => !showFeedback && selectOption(idx)}
                  style={{
                    padding: 12,
                    borderRadius: 10,
                    border,
                    cursor,
                    background,
                    textAlign: "left",
                  }}
                >
                  {opt}
                </button>
              );
            })}
          </div>

          {showFeedback && (
            <div style={{ marginTop: 12 }}>
              {chosen === q.answerIndex ? (
                <p style={{ color: "green", fontWeight: "bold", margin: 0 }}>
                  ✅ Resposta correta!
                </p>
              ) : (
                <p style={{ color: "crimson", fontWeight: "bold", margin: 0 }}>
                  ❌ Resposta incorreta. A resposta correta é:{" "}
                  <strong>{q.options[q.answerIndex]}</strong>
                </p>
              )}
            </div>
          )}

          <div style={{ display: "flex", gap: 10, marginTop: 16 }}>
            <button onClick={back} disabled={current === 0}>
              Voltar
            </button>

            <button onClick={next} disabled={chosen === null}>
              {!showFeedback
                ? "Ver resposta"
                : current === total - 1
                ? "Finalizar"
                : "Próxima"}
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (step === "result") {
    return (
      <div style={{ maxWidth: 720, margin: "40px auto", fontFamily: "Arial" }}>
        <h2>Resultado</h2>
        <p>
          Você acertou <b>{correctCount}</b> de <b>{total}</b> ({percentage}%)
        </p>

        {passed ? (
          <>
            <p style={{ color: "green" }}>
              Você atingiu 70% ou mais 🎉 Pode emitir seu certificado.
            </p>
            <button onClick={() => setStep("certificate")}>
              Emitir certificado
            </button>
          </>
        ) : (
          <>
            <p style={{ color: "crimson" }}>
              Você não atingiu 70%. Tente novamente.
            </p>
            <button
              onClick={() => {
                setCurrent(0);
                setAnswers(Array(total).fill(null));
                setShowFeedback(false);
                setStep("quiz");
              }}
            >
              Refazer quiz
            </button>
          </>
        )}
      </div>
    );
  }

  return (
    <div style={{ maxWidth: 720, margin: "40px auto", fontFamily: "Arial" }}>
      <h2>Emitir certificado</h2>
      <p>Digite seu nome como deve aparecer no certificado:</p>

      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Seu nome completo"
        style={{
          padding: 12,
          width: "100%",
          borderRadius: 10,
          border: "1px solid #ccc",
        }}
      />

      <div style={{ display: "flex", gap: 10, marginTop: 16 }}>
        <button onClick={() => setStep("result")}>Voltar</button>
        <button onClick={generateCertificatePDF}>Gerar PDF</button>
      </div>

      <div style={{ marginTop: 16 }}>
        <button onClick={reset} style={{ opacity: 0.8 }}>
          Refazer tudo
        </button>
      </div>
    </div>
  );
}