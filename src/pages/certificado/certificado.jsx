import { useMemo, useState } from "react";
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

export default function Quiz() {
  const total = questions.length;
  const totalStudyItems = studyContent.length;

  const [step, setStep] = useState("study"); // "study" | "quiz" | "result" | "certificate"
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState(Array(total).fill(null));
  const [name, setName] = useState("");
  const [showFeedback, setShowFeedback] = useState(false);

  // controle da trilha
  const [currentStudyIndex, setCurrentStudyIndex] = useState(0);
  const [completedContentIds, setCompletedContentIds] = useState([]);

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
      doc.text("é Apioador (a) do Suporte B2B", W / 2, yAfterName, {
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
        const selo = await loadImageAsDataURL("/img/selo_novo.19");

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
      <div style={{ maxWidth: 820, margin: "40px auto", fontFamily: "Arial" }}>
        <h2>📚 Material de leitura</h2>
        <p style={{ color: "#555" }}>
          Leia cada conteúdo e valide a conclusão. O quiz será liberado
          após a conclusão de toda a trilha.
        </p>

        <div style={{ margin: "10px 0 20px 0" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              fontSize: 12,
              color: "#555",
            }}
          >
            <span>Progresso da trilha</span>
            <span>
              {completedCount}/{totalStudyItems} concluídos
            </span>
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

        {!allStudyCompleted && currentStudyItem && (
          <div
            style={{
              background: "#fff",
              border: "1px solid #ddd",
              borderRadius: 12,
              padding: 16,
            }}
          >
            <p style={{ marginTop: 0, color: "#777", fontSize: 14 }}>
              Conteúdo {currentStudyIndex + 1} de {totalStudyItems}
            </p>

            <h3 style={{ margin: "0 0 8px 0", color: "#004033" }}>
              {currentStudyItem.title}
            </h3>

            <ul style={{ margin: 0, paddingLeft: 18 }}>
              {currentStudyItem.bullets.map((b, i) => (
                <li key={i} style={{ marginBottom: 8 }}>
                  {b}
                </li>
              ))}
            </ul>

            <div
              style={{
                marginTop: 16,
                padding: 12,
                background: "#f6f8fa",
                borderRadius: 10,
                color: "#555",
                fontSize: 14,
              }}
            >
              {currentStudyItem.validator?.message}
            </div>

            <div style={{ marginTop: 20, display: "flex", gap: 10, flexWrap: "wrap" }}>
              <button
                onClick={goToPreviousStudyItem}
                disabled={currentStudyIndex === 0}
              >
                Voltar conteúdo
              </button>

              <button
                onClick={completeCurrentContent}
                style={{
                  background: "#004033",
                  color: "white",
                  border: "none",
                  padding: "10px 14px",
                  borderRadius: 10,
                  cursor: "pointer",
                }}
              >
                {currentStudyItem.validator?.buttonLabel ||
                  (isLastStudyItem ? "Concluir trilha" : "Concluir conteúdo")}
              </button>

              <button onClick={reset} style={{ opacity: 0.85 }}>
                Reiniciar
              </button>
            </div>
          </div>
        )}

        {allStudyCompleted && (
          <div
            style={{
              background: "#eef8f3",
              border: "1px solid #c7e8d5",
              borderRadius: 12,
              padding: 18,
            }}
          >
            <h3 style={{ marginTop: 0, color: "#004033" }}>
              ✅ Trilha concluída
            </h3>
            <p style={{ color: "#355", marginBottom: 16 }}>
              Todos os materiais foram concluídos com sucesso. O quiz foi
              liberado.
            </p>

            <div style={{ display: "flex", gap: 10 }}>
              <button
                onClick={() => {
                  setCurrent(0);
                  setStep("quiz");
                }}
                style={{
                  background: "#004033",
                  color: "white",
                  border: "none",
                  padding: "10px 14px",
                  borderRadius: 10,
                  cursor: "pointer",
                }}
              >
                Começar quiz
              </button>

              <button onClick={reset} style={{ opacity: 0.85 }}>
                Reiniciar
              </button>
            </div>
          </div>
        )}
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