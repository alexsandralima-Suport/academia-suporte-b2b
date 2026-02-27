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
      <h1>Vídeos de Treinamento</h1>

      <div style={pageStyles.section}>
        <div style={pageStyles.materialCard}>
          <h3 style={pageStyles.materialTitle}>
            1. Introdução de Suporte
          </h3>
          <p>
            Treinamento sobre introdução ao suporte.
          </p>
          <a
            href="https://drive.google.com/file/d/1qmN7LVGNZ7j-89PQPdMytFiQ2zoIbOFu/view"
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
            Acessar Treinamento →
          </a>
        </div>

        <div style={pageStyles.materialCard}>
          <h3 style={pageStyles.materialTitle}>
            2. Monitoramento de andamentos
          </h3>
          <p>
            Treinamento monitoramento de andamentos.
          </p>
          <a
            href="https://drive.google.com/file/d/1-9t2lKyjrk4p-sQ-knuotTVH07Vqgvqh/view"
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
            Acessar Treinamento →
          </a>
        </div>

        <div style={pageStyles.materialCard}>
          <h3 style={pageStyles.materialTitle}>
            3. Debug de uma distribuição
          </h3>
          <p>
            Treinamento sobre debug de uma distribuição.
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
            Acessar Treinamento →
          </a>
        </div>


        <div style={pageStyles.materialCard}>
          <h3 style={pageStyles.materialTitle}>
            4. . Diários oficiais
          </h3>
          <p>
            Treinamento sobre diários oficiais.
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
            Acessar Treinamento →
          </a>
        </div>

        <div style={pageStyles.materialCard}>
          <h3 style={pageStyles.materialTitle}>
            5. Recortes por termos
          </h3>
          <p>
            Treinamento sobre recortes por termos.
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
            Acessar Treinamento →
          </a>
        </div>

        <div style={pageStyles.materialCard}>
          <h3 style={pageStyles.materialTitle}>
            6. Processos em segredos de justiça
          </h3>
          <p>
            Treinamento sobre processos em segredos de justiça.
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
            Acessar Treinamento →
          </a>
        </div>

        <div style={pageStyles.materialCard}>
          <h3 style={pageStyles.materialTitle}>
            7. Procon
          </h3>
          <p>
            Treinamento sobre procon.
          </p>
          <a
            href="https://drive.google.com/file/d/178pZ944IuYyGupNHkTgliFoRF7pWt8lH/view"
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
            Acessar Treinamento →
          </a>
        </div>

        <div style={pageStyles.materialCard}>
          <h3 style={pageStyles.materialTitle}>
            8. CPRO - API&Interface
          </h3>
          <p>
            Treinamento sobre procon.
          </p>
          <a
            href="https://drive.google.com/file/d/1uQD5GjuYZKVFuq-EtmqURe0bpQAGs_WG/view"
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
            Acessar Treinamento →
          </a>
        </div>

        <div style={pageStyles.materialCard}>
          <h3 style={pageStyles.materialTitle}>
            9. Contexto processos criminais
          </h3>
          <p>
            Treinamento sobre contexto processos criminais.
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
            Acessar Treinamento →
          </a>
        </div>

        <div style={pageStyles.materialCard}>
          <h3 style={pageStyles.materialTitle}>
            10. Treinamento - Lançamento Hub de Soluções
          </h3>
          <p>
            Treinamento sobre Lançamento Hub de Soluções.
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
            Acessar Treinamento →
          </a>
        </div>


        <div style={pageStyles.materialCard}>
          <h3 style={pageStyles.materialTitle}>
            11. SQL básico + redash
          </h3>
          <p>
            Treinamento sobre SQL básico + redash.
          </p>
          <a
            href="https://drive.google.com/file/d/1BQLrhu7-90Eke9mQbDopr_Glb5gOiOZt/view"
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
            Acessar Treinamento →
          </a>
        </div>

        <div style={pageStyles.materialCard}>
          <h3 style={pageStyles.materialTitle}>
            12.  SQL básico + redash parte 2
          </h3>
          <p>
            Treinamento sobre SQL básico + redash parte 2.
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
            Acessar Treinamento →
          </a>
        </div>

        <div style={pageStyles.materialCard}>
          <h3 style={pageStyles.materialTitle}>
            13.  Estrutura do banco OP + relatórios
          </h3>
          <p>
            Treinamento sobre Estrutura do banco OP + relatórios.
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
            Acessar Treinamento →
          </a>
        </div>

        <div style={pageStyles.materialCard}>
          <h3 style={pageStyles.materialTitle}>
            14. Treinamento - Relatórios Avançados parte 1
          </h3>
          <p>
            Treinamento sobre Relatórios Avançados parte 1.
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
            Acessar Treinamento →
          </a>
        </div>

        <div style={pageStyles.materialCard}>
          <h3 style={pageStyles.materialTitle}>
            15.  Treinamento - Relatórios Avançados parte 2
          </h3>
          <p>
            Treinamento sobre Relatórios Avançados parte 2.
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
            Acessar Treinamento →
          </a>
        </div>

        <div style={pageStyles.materialCard}>
          <h3 style={pageStyles.materialTitle}>
            16. Treinamento - Relatórios Avançados parte 3
          </h3>
          <p>
            Treinamento sobre relatórios avançados parte 3.
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
            Acessar Treinamento →
          </a>
        </div>

        <div style={pageStyles.materialCard}>
          <h3 style={pageStyles.materialTitle}>
            17. Treinamento - Relatórios Avançados parte 4
          </h3>
          <p>
            Treinamento sobre relatórios avançados parte 4.
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
            Acessar Treinamento →
          </a>
        </div>

        <div style={pageStyles.materialCard}>
          <h3 style={pageStyles.materialTitle}>
            18. Itaú - Desmistificando o atendimento
          </h3>
          <p>
            Treinamento sobre Itaú - Desmistificando o atendimento.
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
            Acessar Treinamento →
          </a>
        </div>

        <div style={pageStyles.materialCard}>
          <h3 style={pageStyles.materialTitle}>
            19. ConsultaPRO - Casos Reais
          </h3>
          <p>
            Treinamento sobre ConsultaPRO - Casos Reais.
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
            Acessar Treinamento →
          </a>
        </div>

        <div style={pageStyles.materialCard}>
          <h3 style={pageStyles.materialTitle}>
            20. Treinamento - 4Biz
          </h3>
          <p>
            Treinamento sobre 4Biz.
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
            Acessar Treinamento →
          </a>
        </div>

        <div style={pageStyles.materialCard}>
          <h3 style={pageStyles.materialTitle}>
            21. Análise Planilha Procon
          </h3>
          <p>
            Treinamento sobre Análise Planilha Procon.
          </p>
          <a
            href="https://drive.google.com/file/d/1f1FFwTgFv3uCG31PEOYpC4wexAyjCAoG/view?usp=sharing"
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
            Acessar Treinamento →
          </a>
        </div>

        <div style={pageStyles.materialCard}>
          <h3 style={pageStyles.materialTitle}>
            22. Exportação de credenciais - Procon
          </h3>
          <p>
            Treinamento sobre Exportação de credenciais - Procon.
          </p>
          <a
            href="https://drive.google.com/file/d/126ZqMmupPNQsys2Jvenn-tdMk6PAeDu2/view"
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
            Acessar Treinamento →
          </a>
        </div>

        <div style={pageStyles.materialCard}>
          <h3 style={pageStyles.materialTitle}>
            23.
            Treinamento | API JusSoluções
          </h3>
          <p>
            Treinamento sobre API JusSoluções.
          </p>
          <a
            href="https://drive.google.com/file/d/1VBMyTmn-s9YsBcSOI-fFggkAxMBjzsiy/view?usp=sharing"
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
            Acessar Treinamento →
          </a>
        </div>









      </div>
    </div>
  );
}
