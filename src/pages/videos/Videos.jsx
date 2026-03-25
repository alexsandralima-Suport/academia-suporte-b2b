export default function Videos() {
  const pageStyles = {
    container: {
      maxWidth: "100%",
      margin: "0 auto"
    },
    section: {
      marginBottom: "40px"
    },
    materialCard: {
      border: "1px solid #e0e0e0",
      borderRadius: "8px",
      padding: "24px",
      marginBottom: "24px",
      backgroundColor: "#ffffff"
    },
    materialTitle: {
      fontSize: "20px",
      fontWeight: 400,
      color: "#004033",
      marginBottom: "12px"
    },
    materialLink: {
      display: "inline-block",
      color: "#004033",
      textDecoration: "none",
      fontSize: "16px",
      padding: "8px 16px",
      border: "1px solid #004033",
      borderRadius: "4px",
      transition: "all 0.2s ease"
    }
  };

  return (
    <div style={pageStyles.container}>
      <h1>Materiais de Treinamento</h1>

      <div style={pageStyles.section}>
        <div style={pageStyles.materialCard}>
          <h3 style={pageStyles.materialTitle}>
            1. Introdução de Suporte
          </h3>
          <p>
            Material de apoio para introdução ao suporte.
          </p>
          <a
            href="https://docs.google.com/presentation/d/1OKGQCk4r7j0e9DIUhaZh6qKoQtIQMhVok7aaOWSufos/present?slide=id.g354a27029d1_0_7"
            target="_blank"
            rel="noopener noreferrer"
            style={pageStyles.materialLink}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#004033";
              e.currentTarget.style.color = "#ffffff";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.color = "#004033";
            }}
          >
            Acessar Material →
          </a>
        </div>

        <div style={pageStyles.materialCard}>
          <h3 style={pageStyles.materialTitle}>
            2. Relatórios - Material de apoio
          </h3>
          <p>
            Material de apoio sobre relatórios.
          </p>
          <a
            href="https://docs.google.com/presentation/d/1hth9q8RQvp-fORJN5pJnCOlNbfdg8H4XqgXfUg96lk8/present?slide=id.g354a27029d1_0_7"
            target="_blank"
            rel="noopener noreferrer"
            style={pageStyles.materialLink}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#004033";
              e.currentTarget.style.color = "#ffffff";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.color = "#004033";
            }}
          >
            Acessar Material →
          </a>
        </div>

        <div style={pageStyles.materialCard}>
          <h3 style={pageStyles.materialTitle}>
            3. Monitoramento de andamentos
          </h3>
          <p>
            Material de apoio sobre monitoramento de andamentos.
          </p>
          <a
            href="https://docs.google.com/presentation/d/1elsZWk_x2VPTbpEeqr9wKi7D9Ps-iZGaJr1SPWzJPFw/present?slide=id.g354a27029d1_0_7"
            target="_blank"
            rel="noopener noreferrer"
            style={pageStyles.materialLink}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#004033";
              e.currentTarget.style.color = "#ffffff";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.color = "#004033";
            }}
          >
            Acessar Material →
          </a>
        </div>


        <div style={pageStyles.materialCard}>
          <h3 style={pageStyles.materialTitle}>
            4. Treinamentos de Suporte - Debug
          </h3>
          <p>
            Material de apoio sobre treinamentos de suporte - debug.
          </p>
          <a
            href="https://docs.google.com/presentation/d/1elsZWk_x2VPTbpEeqr9wKi7D9Ps-iZGaJr1SPWzJPFw/present?slide=id.g354a27029d1_0_7"
            target="_blank"
            rel="noopener noreferrer"
            style={pageStyles.materialLink}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#004033";
              e.currentTarget.style.color = "#ffffff";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.color = "#004033";
            }}
          >
            Acessar Material →
          </a>
        </div>

        <div style={pageStyles.materialCard}>
          <h3 style={pageStyles.materialTitle}>
            5. Diários Oficiais
          </h3>
          <p>
            Material de apoio sobre diários oficiais.
          </p>
          <a
            href="https://docs.google.com/presentation/d/1Ej2sSubKqwhZyONMx6piG_FJSv8w994PNnz0CkPMtO0/present?slide=id.g354a27029d1_0_7"
            target="_blank"
            rel="noopener noreferrer"
            style={pageStyles.materialLink}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#004033";
              e.currentTarget.style.color = "#ffffff";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.color = "#004033";
            }}
          >
            Acessar Material →
          </a>
        </div>

        <div style={pageStyles.materialCard}>
          <h3 style={pageStyles.materialTitle}>
            6. Recortes por termo
          </h3>
          <p>
            Material de apoio sobre recortes por termo.
          </p>
          <a
            href="https://docs.google.com/presentation/d/1vhk7LX_pb80avMpYV5gsV59loulJnl9EZ1wKO5Xtz6I/present?slide=id.g354a27029d1_0_7"
            target="_blank"
            rel="noopener noreferrer"
            style={pageStyles.materialLink}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#004033";
              e.currentTarget.style.color = "#ffffff";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.color = "#004033";
            }}
          >
            Acessar Material →
          </a>
        </div>

        <div style={pageStyles.materialCard}>
          <h3 style={pageStyles.materialTitle}>
            7. Segredo de justiça
          </h3>
          <p>
            Material de apoio sobre segredo de justiça.
          </p>
          <a
            href="https://docs.google.com/presentation/d/1GecCFHpYb3X1cPQT10rmA4YCUTnOrTGaNBmNzkiBAWY/present?slide=id.g354a27029d1_0_7"
            target="_blank"
            rel="noopener noreferrer"
            style={pageStyles.materialLink}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#004033";
              e.currentTarget.style.color = "#ffffff";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.color = "#004033";
            }}
          >
            Acessar Material →
          </a>
        </div>

        <div style={pageStyles.materialCard}>
          <h3 style={pageStyles.materialTitle}>
            8. Procon
          </h3>
          <p>
            Material de apoio sobre procon.
          </p>
          <a
            href="https://docs.google.com/presentation/d/1544X0pZwG8MwLOLBzlmwXJPnmGN1osBqlX1yQfYJFVw/present?slide=id.g354a27029d1_0_7"
            target="_blank"
            rel="noopener noreferrer"
            style={pageStyles.materialLink}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#004033";
              e.currentTarget.style.color = "#ffffff";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.color = "#004033";
            }}
          >
            Acessar Material →
          </a>
        </div>


        <div style={pageStyles.materialCard}>
          <h3 style={pageStyles.materialTitle}>
            9. CPRO
          </h3>
          <p>
            Material de apoio sobre CPRO.
          </p>
          <a
            href="https://docs.google.com/presentation/d/1t_5C_er8q33MbS7sWzh4m_L5uyCgejLOSPipCe3JAGA/present?slide=id.g354a27029d1_0_7"
            target="_blank"
            rel="noopener noreferrer"
            style={pageStyles.materialLink}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#004033";
              e.currentTarget.style.color = "#ffffff";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.color = "#004033";
            }}
          >
            Acessar Material →
          </a>
        </div>

        <div style={pageStyles.materialCard}>
          <h3 style={pageStyles.materialTitle}>
            10. Pocesso criminal maio-2025
          </h3>
          <p>
            Material de apoio sobre processo criminal.
          </p>
          <a
            href="https://docs.google.com/presentation/d/1XQZsYa9EHebekLO4FE-XtVR_W_dJao-1OHtvwCKckX0/present?slide=id.p"
            target="_blank"
            rel="noopener noreferrer"
            style={pageStyles.materialLink}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#004033";
              e.currentTarget.style.color = "#ffffff";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.color = "#004033";
            }}
          >
            Acessar Material →
          </a>
        </div>

        <div style={pageStyles.materialCard}>
          <h3 style={pageStyles.materialTitle}>
            11. Estrutura do OP + Relatórios
          </h3>
          <p>
            Material de apoio sobre estrutura do OP e relatórios.
          </p>
          <a
            href="https://docs.google.com/presentation/d/1AyaC37RM8AGm-E-EMOSzIBsa8_BZvpSvCYvElBceHL4/present?slide=id.g354a27029d1_0_7"
            target="_blank"
            rel="noopener noreferrer"
            style={pageStyles.materialLink}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#004033";
              e.currentTarget.style.color = "#ffffff";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.color = "#004033";
            }}
          >
            Acessar Material →
          </a>
        </div>

        <div style={pageStyles.materialCard}>
          <h3 style={pageStyles.materialTitle}>
            12. Base de dados
          </h3>
          <p>
            Material de apoio sobre estrutura do OP e relatórios.
          </p>
          <a
            href="https://docs.google.com/presentation/d/1U81SOZe-P8s0640_FvjdFBEeJouNEhmH4_NaIMlnTFc/present?slide=id.g354a27029d1_0_7"
            target="_blank"
            rel="noopener noreferrer"
            style={pageStyles.materialLink}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#004033";
              e.currentTarget.style.color = "#ffffff";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.color = "#004033";
            }}
          >
            Acessar Material →
          </a>
        </div>

        <div style={pageStyles.materialCard}>
          <h3 style={pageStyles.materialTitle}>
            13. 4biz - Troca do usuário admin 
          </h3>
          <p>
            Material de apoio sobre a troca do usuário admin.
          </p>
          <a
            href="https://docs.google.com/document/d/1Ga0_223Wu1czUY3N5zxjLRt6_yHvLc4Sw-GweCI8e5A/edit?tab=t.0#heading=h.e4pxgrmni4z8"
            target="_blank"
            rel="noopener noreferrer"
            style={pageStyles.materialLink}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#004033";
              e.currentTarget.style.color = "#ffffff";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.color = "#004033";
            }}
          >
            Acessar Material →
          </a>
        </div>


      </div>
    </div>
  );
}
