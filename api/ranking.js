export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");

  const { GITHUB_TOKEN, GITHUB_OWNER, GITHUB_REPO } = process.env;
  if (!GITHUB_TOKEN || !GITHUB_OWNER || !GITHUB_REPO) {
    return res.status(500).json({ error: "GitHub não configurado" });
  }

  const FILE_PATH = "public/data/certificados.csv";
  const API_URL   = `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/${FILE_PATH}`;

  try {
    const getRes = await fetch(API_URL, {
      headers: {
        Authorization: `Bearer ${GITHUB_TOKEN}`,
        Accept: "application/vnd.github+json",
      },
    });

    if (!getRes.ok) throw new Error("Arquivo não encontrado");

    const fileData = await getRes.json();
    const content  = Buffer.from(fileData.content, "base64").toString("utf-8");

    const lines = content.trim().split("\n").filter(Boolean);
    if (lines.length <= 1) return res.status(200).json([]);

    const headers = lines[0].split("|").map(h => h.trim());
    const rows = lines.slice(1).map(line => {
      const values = line.split("|");
      const obj = {};
      headers.forEach((h, i) => { obj[h] = values[i]?.trim() ?? ""; });
      return obj;
    });

    res.status(200).json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
