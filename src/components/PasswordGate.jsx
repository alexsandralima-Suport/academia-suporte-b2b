import { useState } from "react";

const PASSWORD = import.meta.env.VITE_SITE_PASSWORD || "1234";

export default function PasswordGate({ children }) {
  const [input, setInput] = useState("");
  const [authorized, setAuthorized] = useState(false);
  const [error, setError] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    if (input === PASSWORD) {
      setAuthorized(true);
      setError(false);
    } else {
      setError(true);
    }
  }

  if (authorized) {
    return children;
  }

  const styles = {
    page: {
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "24px",
      background:
        "radial-gradient(circle at top, rgba(16,185,129,0.12), transparent 30%), linear-gradient(180deg, #f8fafc 0%, #eef2ff 100%)",
      fontFamily: "Inter, system-ui, sans-serif",
    },
    card: {
      width: "100%",
      maxWidth: "420px",
      background: "rgba(255,255,255,0.92)",
      backdropFilter: "blur(10px)",
      border: "1px solid rgba(226,232,240,0.9)",
      borderRadius: "24px",
      padding: "32px",
      boxShadow: "0 20px 50px rgba(15,23,42,0.12)",
    },
    badge: {
      display: "inline-block",
      padding: "6px 12px",
      borderRadius: "999px",
      background: "rgba(15,118,110,0.08)",
      color: "#0f766e",
      fontSize: "12px",
      fontWeight: 700,
      letterSpacing: "0.04em",
      marginBottom: "18px",
    },
    title: {
      margin: 0,
      fontSize: "28px",
      lineHeight: 1.2,
      color: "#0f172a",
    },
    text: {
      marginTop: "12px",
      marginBottom: "24px",
      color: "#475569",
      lineHeight: 1.7,
      fontSize: "15px",
    },
    label: {
      display: "block",
      marginBottom: "8px",
      fontSize: "14px",
      fontWeight: 600,
      color: "#334155",
    },
    input: {
      width: "100%",
      padding: "14px 16px",
      borderRadius: "14px",
      border: error ? "1px solid #ef4444" : "1px solid #cbd5e1",
      outline: "none",
      fontSize: "15px",
      background: "#fff",
      color: "#0f172a",
      boxSizing: "border-box",
      marginBottom: "12px",
    },
    error: {
      margin: "0 0 16px",
      padding: "12px 14px",
      borderRadius: "12px",
      background: "#fef2f2",
      border: "1px solid #fecaca",
      color: "#b91c1c",
      fontSize: "14px",
    },
    button: {
      width: "100%",
      padding: "14px 16px",
      borderRadius: "14px",
      border: "none",
      background: "linear-gradient(135deg, #065f46 0%, #0f766e 55%, #0ea5e9 100%)",
      color: "#fff",
      fontSize: "15px",
      fontWeight: 700,
      cursor: "pointer",
      boxShadow: "0 10px 24px rgba(15,118,110,0.22)",
    },
    footer: {
      marginTop: "18px",
      textAlign: "center",
      fontSize: "12px",
      color: "#94a3b8",
    },
  };

  return (
    <div style={styles.page}>
      <form onSubmit={handleSubmit} style={styles.card}>
        <div style={styles.badge}>ÁREA RESTRITA</div>

        <h2 style={styles.title}>Acesso protegido</h2>

        <p style={styles.text}>
          Digite a senha para acessar o conteúdo interno da plataforma.
        </p>

        <label htmlFor="password" style={styles.label}>
          Senha
        </label>

        <input
          id="password"
          type="password"
          placeholder="Digite sua senha"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={styles.input}
        />

        {error && <p style={styles.error}>Senha incorreta. Contate o suporte</p>}

        <button type="submit" style={styles.button}>
          Entrar
        </button>

        <div style={styles.footer}>Jusbrasil • Ambiente interno</div>
      </form>
    </div>
  );
}