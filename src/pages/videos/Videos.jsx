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
      <h1>Vídeos e Materiais de Treinamento</h1>

      <div style={pageStyles.section}>
        <div style={pageStyles.materialCard}>
          <h3 style={pageStyles.materialTitle}>
            1. Introdução de Suporte - Material de apoio
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
            3. Monitoramento de andamentos vídeo
          </h3>
          <p>
            Vídeo sobre monitoramento de andamentos.
          </p>
          <a
            href="http://drive.google.com/file/d/1-9t2lKyjrk4p-sQ-knuotTVH07Vqgvqh/view"
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
            4. Monitoramento de andamentos
          </h3>
          <p>
            Material sobre monitoramento de andamentos.
          </p>
          <a
            href="https://drive.google.com/file/d/1AKSnCIARntgnNoNZRg8Oh-87nUXJaY4n/view"
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
          5. Debug de uma distribuição
          </h3>
          <p>
            Vídeo sobre debug.
          </p>
          <a
            href="https://drive.google.com/file/d/1mvciCwO_IZVjGwWMWEoGCZKlDHtnxUSS/view"
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
          6. Diários oficiais 
          </h3>
          <p>
            Vídeo sobre os diários oficiais.
          </p>
          <a
            href="https://drive.google.com/file/d/1q8zreV19SX7rjLMQE3zDy344CFr_8FIz/view"
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
          7. Recortes por termos
          </h3>
          <p>
            Vídeo sobre recortes por termos.
          </p>
          <a
            href="https://drive.google.com/file/d/1an860qrTIbDrDECuicRWV3vUqUh_8BxK/view"
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
          8. Processos em segredos de justiça
          </h3>
          <p>
            Vídeo sobre processos em segredos de justiça.
          </p>
          <a
            href="https://drive.google.com/file/d/1XPL46_UEEvgDjHrkwkl8ah4H7Bbz439r/view"
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
          9. Procon
          </h3>
          <p>
            Vídeo sobre Procon.
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
          10.  CPRO - API&Interface
          </h3>
          <p>
            Vídeo sobre CPRO - API&Interface.
          </p>
          <a
            href="https://drive.google.com/drive/u/0/folders/17Jb9gKKAZzjmu3KPe9ytL4p-RLo4cnFR"
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
          11. Contexto processos criminais
          </h3>
          <p>
            Vídeo sobre contexto processos criminais.
          </p>
          <a
            href="https://drive.google.com/file/d/1JjN8n5kpebNsJDyo19jdDrPPzXcOKiRS/view"
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
          12. Treinamento - Lançamento Hub de Soluções
          </h3>
          <p>
            Vídeo sobre o lançamento do Hub de Soluções.
          </p>
          <a
            href="https://drive.google.com/file/d/1mi--LXLUCyUisTo-M6ybry6tza6FQCai/view"
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
          13.  SQL básico + redash - SQL parte 2
          </h3>
          <p>
            Vídeo sobre SQL básico + redash - SQL parte 2.
          </p>
          <a
            href="https://drive.google.com/file/d/1iF-41A3VTUFup8BDfpYEdPtm6qPqYVyg/view"
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
          14.  Estrutura do banco OP + relatórios
          </h3>
          <p>
            Vídeo sobre Estrutura do banco OP + relatórios.
          </p>
          <a
            href="https://drive.google.com/file/d/1sBa86elCj7557SBvyUE1gpMmfOuTthtI/view"
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
          15.  Treinamento - Relatórios Avançados parte 1
          </h3>
          <p>
            Vídeo sobre Treinamento - Relatórios Avançados parte 1.
          </p>
          <a
            href="https://drive.google.com/file/d/1Q98EyzFkIHGzmafSdBTN1On2Vt9aigFl/view"
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
          16.  Treinamento - Relatórios Avançados parte 2
          </h3>
          <p>
            Vídeo sobre Treinamento - Relatórios Avançados parte 2.
          </p>
          <a
            href="https://drive.google.com/file/d/1mLrO3FTWn4ac4ZMd_GVyo5Y_Zra9Ju9T/view"
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
          17.  Treinamento - Relatórios Avançados parte 3
          </h3>
          <p>
            Vídeo sobre Treinamento - Relatórios Avançados parte 3.
          </p>
          <a
            href="https://drive.google.com/file/d/1rkzHzMKdTcJWRRSJBWKf6vPfIaMeQrao/view"
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
          18.  Treinamento - Relatórios Avançados parte 4
          </h3>
          <p>
            Vídeo sobre Treinamento - Relatórios Avançados parte 4.
          </p>
          <a
            href="https://drive.google.com/file/d/1zADSublxumm4dtdevdPVLThJ2ioyB3zy/view"
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
          19.  Itaú - Desmistificando o atendimento 
          </h3>
          <p>
            Vídeo sobre Itaú - Desmistificando o atendimento.
          </p>
          <a
            href="https://drive.google.com/file/d/1yf9-jM9Imtabrof0B0Oj8qPPLbdUphOt/view"
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
          20. ConsultaPRO - Casos Reais 
          </h3>
          <p>
            Vídeo sobre ConsultaPRO - Casos Reais.
          </p>
          <a
            href="https://drive.google.com/file/d/1nf5G0P8lz3DVbmrbflq06U0ts8fAy2x2/view"
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
          21. Treinamento - 4Biz
          </h3>
          <p>
            Vídeo sobre Treinamento - 4Biz.
          </p>
          <a
            href="https://drive.google.com/file/d/1GHtApA5k4rKLaYC6Wk5KHcchWbGtIXgK/view"
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
