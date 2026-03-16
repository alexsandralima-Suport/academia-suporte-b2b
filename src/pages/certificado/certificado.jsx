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

    /* ===============================
       LOGO DA EMPRESA
    =============================== */

    try {
      const logo = await loadImageAsDataURL("/img/logo.jpg");

      const logoWidth = 110;
      const logoHeight = 28;

      const logoX = 40;
      const logoY = 34;

      doc.addImage(logo, "PNG", logoX, logoY, logoWidth, logoHeight);
    } catch (e) {
      console.warn("Logo não carregou:", e);
    }

    /* ===============================
       TÍTULO
    =============================== */

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
    doc.text("é Apoiador(a) do Suporte B2B", W / 2, yAfterName, {
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

    /* ===============================
       SELO
    =============================== */

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