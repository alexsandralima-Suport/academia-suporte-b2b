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
    } else {
      setError(true);
    }
  }

  if (authorized) {
    return children;
  }

  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "#f5f5f5"
    }}>
      <form
        onSubmit={handleSubmit}
        style={{
          background: "#fff",
          padding: "32px",
          borderRadius: "8px",
          width: "320px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)"
        }}
      >
        <h2 style={{ marginBottom: "16px" }}>Acesso restrito</h2>

        <input
          type="password"
          placeholder="Digite a senha"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "12px"
          }}
        />

        {error && (
          <p style={{ color: "red", marginBottom: "12px" }}>
            Senha incorreta
          </p>
        )}

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "10px",
            background: "#000",
            color: "#fff",
            border: "none",
            cursor: "pointer"
          }}
        >
          Entrar
        </button>
      </form>
    </div>
  );
}
