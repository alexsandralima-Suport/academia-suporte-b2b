import { useState, useRef, useEffect } from "react";

const API_URL = "http://localhost:8000/chat";

const AVATAR = "🤖";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: "bot", text: "Olá! Sou o SheldonAI. Como posso te ajudar?" }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef(null);

  useEffect(() => {
    if (open) bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, open]);

  async function sendMessage() {
    const text = input.trim();
    if (!text || loading) return;
    setInput("");
    setMessages(prev => [...prev, { from: "user", text }]);
    setLoading(true);
    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text }),
      });
      const data = await res.json();
      setMessages(prev => [...prev, { from: "bot", text: data.response }]);
    } catch {
      setMessages(prev => [...prev, { from: "bot", text: "Erro ao conectar com o SheldonAI. Verifique se a API está rodando." }]);
    } finally {
      setLoading(false);
    }
  }

  function handleKey(e) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  }

  return (
    <div style={{ position: "fixed", bottom: 24, right: 24, zIndex: 998, display: "flex", flexDirection: "column", alignItems: "flex-end" }}>

      {/* Janela de chat */}
      {open && (
        <div style={{
          width: 360,
          height: 500,
          backgroundColor: "#fff",
          borderRadius: 16,
          boxShadow: "0 8px 32px rgba(0,0,0,0.18)",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          marginBottom: 12,
          border: "1px solid #e5e7eb"
        }}>
          {/* Header */}
          <div style={{
            backgroundColor: "#004033",
            padding: "14px 18px",
            display: "flex",
            alignItems: "center",
            gap: 10,
          }}>
            <span style={{ fontSize: 22 }}>🤖</span>
            <div>
              <div style={{ color: "#fff", fontWeight: 700, fontSize: 15, fontFamily: "Lato, sans-serif" }}>SheldonAI</div>
              <div style={{ color: "#22c55e", fontSize: 12, fontFamily: "Lato, sans-serif" }}>Base de conhecimento B2B</div>
            </div>
            <button
              onClick={() => setOpen(false)}
              style={{ marginLeft: "auto", background: "none", border: "none", color: "#fff", fontSize: 20, cursor: "pointer", lineHeight: 1 }}
            >×</button>
          </div>

          {/* Mensagens */}
          <div style={{ flex: 1, overflowY: "auto", padding: "16px 14px", display: "flex", flexDirection: "column", gap: 10, backgroundColor: "#f9fafb" }}>
            {messages.map((msg, i) => (
              <div key={i} style={{ display: "flex", justifyContent: msg.from === "user" ? "flex-end" : "flex-start", alignItems: "flex-end", gap: 6 }}>
                {msg.from === "bot" && <span style={{ fontSize: 18, flexShrink: 0 }}>{AVATAR}</span>}
                <div style={{
                  maxWidth: "78%",
                  padding: "10px 13px",
                  borderRadius: msg.from === "user" ? "16px 16px 4px 16px" : "16px 16px 16px 4px",
                  backgroundColor: msg.from === "user" ? "#004033" : "#fff",
                  color: msg.from === "user" ? "#fff" : "#1a1a1a",
                  fontSize: 13.5,
                  lineHeight: 1.55,
                  fontFamily: "Lato, sans-serif",
                  boxShadow: "0 1px 3px rgba(0,0,0,0.08)",
                  whiteSpace: "pre-wrap",
                  wordBreak: "break-word",
                }}>
                  {msg.text}
                </div>
              </div>
            ))}
            {loading && (
              <div style={{ display: "flex", alignItems: "flex-end", gap: 6 }}>
                <span style={{ fontSize: 18 }}>{AVATAR}</span>
                <div style={{ padding: "10px 14px", borderRadius: "16px 16px 16px 4px", backgroundColor: "#fff", boxShadow: "0 1px 3px rgba(0,0,0,0.08)" }}>
                  <span style={{ display: "inline-flex", gap: 4 }}>
                    {[0, 1, 2].map(i => (
                      <span key={i} style={{
                        width: 7, height: 7, borderRadius: "50%", backgroundColor: "#004033",
                        animation: "bounce 1.2s infinite",
                        animationDelay: `${i * 0.2}s`,
                        display: "inline-block"
                      }} />
                    ))}
                  </span>
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div style={{ padding: "10px 12px", borderTop: "1px solid #e5e7eb", display: "flex", gap: 8, backgroundColor: "#fff" }}>
            <textarea
              value={input}
              onChange={e => setInput(e.target.value)}
              onKeyDown={handleKey}
              placeholder="Digite sua dúvida..."
              rows={1}
              style={{
                flex: 1, border: "1px solid #d1d5db", borderRadius: 10, padding: "8px 12px",
                fontSize: 13.5, fontFamily: "Lato, sans-serif", resize: "none", outline: "none",
                lineHeight: 1.4,
              }}
            />
            <button
              onClick={sendMessage}
              disabled={loading || !input.trim()}
              style={{
                backgroundColor: loading || !input.trim() ? "#9ca3af" : "#004033",
                color: "#fff", border: "none", borderRadius: 10,
                padding: "0 14px", cursor: loading || !input.trim() ? "default" : "pointer",
                fontSize: 18, display: "flex", alignItems: "center", justifyContent: "center",
                transition: "background 0.2s",
              }}
            >➤</button>
          </div>
        </div>
      )}

      {/* Botão flutuante */}
      <button
        onClick={() => setOpen(o => !o)}
        title="Perguntar ao SheldonAI"
        style={{
          width: 56, height: 56, borderRadius: "50%",
          backgroundColor: "#004033",
          border: "none", cursor: "pointer",
          boxShadow: "0 4px 16px rgba(0,64,51,0.35)",
          fontSize: 26, display: "flex", alignItems: "center", justifyContent: "center",
          transition: "transform 0.2s, box-shadow 0.2s",
        }}
        onMouseEnter={e => e.currentTarget.style.transform = "scale(1.08)"}
        onMouseLeave={e => e.currentTarget.style.transform = "scale(1)"}
      >
        {open ? "✕" : "🤖"}
      </button>

      <style>{`
        @keyframes bounce {
          0%, 60%, 100% { transform: translateY(0); }
          30% { transform: translateY(-5px); }
        }
      `}</style>
    </div>
  );
}
