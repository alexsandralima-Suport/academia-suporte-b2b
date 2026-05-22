import { useEffect, useState } from "react";

const SHEET_ID   = import.meta.env.VITE_SHEET_ID || "";
const SHEET_NAME = "Certificados";
const MEDALS     = ["🥇", "🥈", "🥉"];

function buildGvizUrl(sheetId, sheetName) {
  return `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:json&sheet=${encodeURIComponent(sheetName)}`;
}

function parseGviz(text) {
  // A resposta vem no formato: /*O_o*/\ngoogle.visualization.Query.setResponse({...});
  const match = text.match(/google\.visualization\.Query\.setResponse\(([\s\S]+)\)/);
  if (!match) return [];
  const parsed = JSON.parse(match[1]);
  if (!parsed?.table?.rows?.length) return [];

  const cols = parsed.table.cols.map(c => c.label);
  return parsed.table.rows.map(row => {
    const obj = {};
    row.c?.forEach((cell, i) => { obj[cols[i]] = cell?.v ?? ""; });
    return obj;
  });
}

export default function Ranking() {
  const [ranking, setRanking] = useState([]);
  const [loading, setLoading] = useState(true);
  const [erro,    setErro]    = useState(false);

  useEffect(() => {
    if (!SHEET_ID) { setLoading(false); return; }

    fetch(buildGvizUrl(SHEET_ID, SHEET_NAME))
      .then(r => r.text())
      .then(text => {
        const rows = parseGviz(text);
        const sorted = rows.sort(
          (a, b) => Number(b["Aproveitamento (%)"]) - Number(a["Aproveitamento (%)"])
        );
        setRanking(sorted);
        setLoading(false);
      })
      .catch(() => { setErro(true); setLoading(false); });
  }, []);

  /* ── estados de carregamento ── */
  if (loading) return (
    <div style={{ padding: 60, textAlign: "center", fontFamily: "Arial", color: "#888" }}>
      <div style={{ fontSize: 36, marginBottom: 12 }}>⏳</div>
      Carregando ranking...
    </div>
  );

  if (erro) return (
    <div style={{ padding: 60, textAlign: "center", fontFamily: "Arial", color: "crimson" }}>
      <div style={{ fontSize: 36, marginBottom: 12 }}>⚠️</div>
      Não foi possível carregar o ranking.
    </div>
  );

  if (!SHEET_ID) return (
    <div style={{ padding: 60, textAlign: "center", fontFamily: "Arial", color: "#aaa" }}>
      <div style={{ fontSize: 36, marginBottom: 12 }}>🔧</div>
      Ranking não configurado.
    </div>
  );

  /* ── pódio: exibe na ordem visual 2º | 1º | 3º ── */
  const top3        = ranking.slice(0, 3);
  const podiumOrder = [top3[1], top3[0], top3[2]];
  const podiumMedal = ["🥈", "🥇", "🥉"];
  const podiumH     = [90, 120, 70];
  const podiumBg    = ["#C0C0C0", "#FFD700", "#CD7F32"];

  return (
    <div style={{ maxWidth: 820, margin: "40px auto", fontFamily: "Arial" }}>

      {/* Cabeçalho */}
      <div style={{ textAlign: "center", marginBottom: 40 }}>
        <h2 style={{ margin: "0 0 6px", color: "#004033", fontSize: 26 }}>🏆 Ranking de Certificados</h2>
        <p style={{ margin: 0, color: "#888", fontSize: 14 }}>
          {ranking.length === 0
            ? "Nenhum certificado emitido ainda."
            : `${ranking.length} ${ranking.length === 1 ? "pessoa certificada" : "pessoas certificadas"}`}
        </p>
      </div>

      {/* Pódio */}
      {top3.length > 0 && (
        <div style={{
          display: "flex", justifyContent: "center",
          alignItems: "flex-end", gap: 12, marginBottom: 48, padding: "0 16px",
        }}>
          {podiumOrder.map((person, vi) => {
            if (!person) return <div key={vi} style={{ width: 150 }} />;
            return (
              <div key={vi} style={{ display: "flex", flexDirection: "column", alignItems: "center", width: 150 }}>
                <div style={{ fontSize: 32, marginBottom: 6 }}>{podiumMedal[vi]}</div>
                <div style={{
                  fontWeight: "700", fontSize: 13, color: "#222", textAlign: "center",
                  maxWidth: 140, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", marginBottom: 4,
                }}>
                  {person["Nome"]}
                </div>
                <div style={{ fontSize: 13, color: "#555", marginBottom: 10 }}>
                  {person["Aproveitamento (%)"]}%
                </div>
                <div style={{
                  width: "100%", height: podiumH[vi], background: podiumBg[vi],
                  borderRadius: "10px 10px 0 0",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 28, fontWeight: "800", color: "rgba(0,0,0,0.18)",
                  boxShadow: "0 -2px 8px rgba(0,0,0,0.08)",
                }}>
                  {vi === 1 ? "1" : vi === 0 ? "2" : "3"}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Tabela completa */}
      {ranking.length > 0 && (
        <div style={{ border: "1px solid #e0e6ed", borderRadius: 12, overflow: "hidden" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 14 }}>
            <thead>
              <tr style={{ background: "#004033", color: "white" }}>
                <th style={{ padding: "12px 16px", textAlign: "center", width: 48 }}>#</th>
                <th style={{ padding: "12px 16px", textAlign: "left" }}>Nome</th>
                <th style={{ padding: "12px 16px", textAlign: "center" }}>Aproveitamento</th>
                <th style={{ padding: "12px 16px", textAlign: "center" }}>Data</th>
                <th style={{ padding: "12px 16px", textAlign: "center" }}>Hora</th>
              </tr>
            </thead>
            <tbody>
              {ranking.map((p, i) => (
                <tr key={i} style={{ borderBottom: "1px solid #f0f3f7", background: i % 2 === 0 ? "#fff" : "#f9fbfc" }}>
                  <td style={{ padding: "12px 16px", textAlign: "center", fontSize: 16 }}>
                    {i < 3 ? MEDALS[i] : <span style={{ color: "#aaa" }}>{i + 1}º</span>}
                  </td>
                  <td style={{ padding: "12px 16px", fontWeight: i < 3 ? "600" : "normal", color: "#222" }}>
                    {p["Nome"]}
                  </td>
                  <td style={{ padding: "12px 16px", textAlign: "center" }}>
                    <span style={{
                      background: Number(p["Aproveitamento (%)"]) >= 90 ? "#e8f5f0" : "#f0f3f7",
                      color:      Number(p["Aproveitamento (%)"]) >= 90 ? "#004033" : "#555",
                      fontWeight: "bold", padding: "3px 12px", borderRadius: 20, fontSize: 13,
                    }}>
                      {p["Aproveitamento (%)"]}%
                    </span>
                  </td>
                  <td style={{ padding: "12px 16px", textAlign: "center", color: "#888" }}>{p["Data"]}</td>
                  <td style={{ padding: "12px 16px", textAlign: "center", color: "#aaa" }}>{p["Hora"]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {ranking.length === 0 && (
        <div style={{ textAlign: "center", padding: 60, color: "#bbb" }}>
          <div style={{ fontSize: 52, marginBottom: 12 }}>🎓</div>
          <p style={{ fontSize: 15 }}>Nenhum certificado emitido ainda. Seja a primeira!</p>
        </div>
      )}
    </div>
  );
}
