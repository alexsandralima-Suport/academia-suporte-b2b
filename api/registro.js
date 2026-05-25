export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "POST") return res.status(405).json({ error: "Método não permitido" });

  const { GITHUB_TOKEN, GITHUB_OWNER, GITHUB_REPO } = process.env;
  if (!GITHUB_TOKEN || !GITHUB_OWNER || !GITHUB_REPO) {
    return res.status(500).json({ error: "GitHub não configurado" });
  }

  const { nome, aproveitamento } = req.body;
  if (!nome) return res.status(400).json({ error: "Nome obrigatório" });

  const FILE_PATH = "public/data/certificados.csv";
  const API_URL   = `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/${FILE_PATH}`;
  const ghHeaders = {
    Authorization: `Bearer ${GITHUB_TOKEN}`,
    Accept: "application/vnd.github+json",
    "Content-Type": "application/json",
  };

  try {
    // 1. Busca o arquivo atual para obter o SHA (obrigatório para atualizar)
    const getRes  = await fetch(API_URL, { headers: ghHeaders });
    const current = await getRes.json();
    const sha     = current.sha;
    const existingContent = Buffer.from(current.content, "base64").toString("utf-8");

    // 2. Monta a nova linha (usa | como separador para evitar conflito com vírgulas em nomes)
    const now  = new Date().toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" });
    const [date, time] = now.split(", ");
    const newRow = `${nome}|${aproveitamento}|${date}|${time}\n`;

    // 3. Commita o arquivo atualizado
    const newContent = existingContent + newRow;
    const updateRes  = await fetch(API_URL, {
      method: "PUT",
      headers: ghHeaders,
      body: JSON.stringify({
        message: `cert: ${nome} (${aproveitamento}%)`,
        content: Buffer.from(newContent).toString("base64"),
        sha,
      }),
    });

    if (!updateRes.ok) {
      const err = await updateRes.json();
      throw new Error(err.message || "Falha ao salvar");
    }

    res.status(200).json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
