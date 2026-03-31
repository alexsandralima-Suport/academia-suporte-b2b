export default function OnboardingDataCollection() {
  const styles = {
    container: { maxWidth: "100%", margin: "0 auto" },
    section: { marginBottom: "50px" },
    callout: {
      border: "1px solid #ddd",
      borderLeft: "6px solid #004033",
      borderRadius: "6px",
      padding: "14px",
      margin: "14px 0",
      backgroundColor: "#fafafa",
      lineHeight: 1.6,
    },
    divider: {
      margin: "50px 0",
      borderTop: "2px dashed #ccc",
    },
    code: {
      backgroundColor: "#f5f5f5",
      padding: "3px 8px",
      borderRadius: "3px",
      fontFamily: "monospace",
      fontSize: "14px",
      color: "#004033",
    },
  };

  return (
    <div style={styles.container}>
      <h1>Onboarding | Data Collection</h1>

      {/* BOAS-VINDAS */}
      <section style={styles.section}>
        <h2>Boas-vindas</h2>
        <p>
          Bem-vindo ao time de <strong>Data Collection</strong>. Somos responsáveis
          por coletar todos os processos judiciais e artefatos relacionados do Brasil.
        </p>

        <div style={styles.callout}>
          Este material reúne o contexto da área, missão, times e principais pontos
          de contato para acelerar seu onboarding.
        </div>
      </section>

      {/* MISSÃO */}
      <section style={styles.section}>
        <h2>Missão</h2>
        <p>
          Coletar todos os processos judiciais e artefatos relacionados do Brasil,
          mantendo o ativo digital da Jusbrasil atualizado e útil para ajudar pessoas
          a resolverem conflitos com mais rapidez por meio da informação.
        </p>

        <h3>Por que isso importa?</h3>
        <ul>
          <li>
            <strong>Entender o conflito:</strong> apenas a capa do processo não explica o caso.
          </li>
          <li>
            <strong>Capturar contexto jurídico:</strong> documentos trazem fundamentos e decisões.
          </li>
          <li>
            <strong>Apoiar decisões:</strong> dados estruturados ajudam na resolução de conflitos.
          </li>
        </ul>
      </section>

      {/* O QUE COLETAMOS */}
      <section style={styles.section}>
        <h2>O que coletamos?</h2>
        <p>
          Além dos dados básicos do processo, coletamos documentos e artefatos jurídicos relevantes.
        </p>

        <ul>
          <li>Capas processuais e dados básicos</li>
          <li>Petição inicial e documentos</li>
          <li>Decisões e movimentações</li>
          <li>Jurisprudência, legislação e doutrina</li>
        </ul>
      </section>

      {/* TIMES */}
      <section style={styles.section}>
        <h2>Times</h2>

        <h3>Cobertura Processos</h3>
        <p>
          Responsável pela revocação e cobertura dos processos monitorados,
          garantindo qualidade do dado e manutenção dos crawlers.
        </p>
        <p>
          Canal: <span style={styles.code}>#team-data-collection-cobertura-processos</span>
        </p>

        <h3>Motor</h3>
        <p>
          Responsável pela execução das consultas com eficiência, respeitando
          prioridade, freshness e agendamento.
        </p>
        <p>
          Canal: <span style={styles.code}>#team-coleta_processos-motor</span>
        </p>

        <h3>Evolução</h3>
        <p>
          Responsável pela evolução da arquitetura, integração com CNJ e modernização da coleta.
        </p>
        <p>
          Canal: <span style={styles.code}>#team-data-collection-evolucao</span>
        </p>

        <h3>Data-access</h3>
        <p>
          Atua na superação de barreiras de acesso aos dados (captchas, bloqueios, autenticação).
        </p>
        <p>
          Canal: <span style={styles.code}>#team-data-access</span>
        </p>

        <h3>Digital Asset</h3>
        <p>
          Responsável por sinais, distribuição de dados e definição de novas coletas.
        </p>
        <p>
          Canal: <span style={styles.code}>#team-data-collection-digital-asset</span>
        </p>
      </section>

      {/* LEITURAS */}
      <section style={styles.section}>
        <h2>Leituras Essenciais</h2>

        <h3>Estratégia</h3>
        <ul>
          <li>Visão de Produto Data Collection - 2025</li>
          <li>OKRs Atuais</li>
          <li>Visão de Engenharia</li>
        </ul>

        <h3>Técnico</h3>
        <ul>
          <li>Glossário de Coletas</li>
          <li>Arquitetura Medalhão</li>
          <li>Chapter Engineering</li>
        </ul>
      </section>


      {/* INTEGRAÇÕES */}
      <section style={styles.section}>
        <h2>Integrações e Referências</h2>
        <ul>
          <li>Cobertura: problemas de crawlers</li>
          <li>Motor: gargalos e execução</li>
          <li>Evolução: parâmetros e observabilidade</li>
          <li>Data-access: Keymaker e credenciais</li>
          <li>Digital Asset: sinais e comunicação</li>
        </ul>
      </section>

      {/* COMUNICAÇÃO */}
      <section style={styles.section}>
        <h2>Comunicação</h2>

        <h3>Canal principal</h3>
        <div style={styles.callout}>
          <strong>#team-data-collection</strong>
        </div>

        <h3>Canais por time</h3>
        <ul>
          <li>#team-data-collection-cobertura-processos</li>
          <li>#team-coleta_processos-motor</li>
          <li>#team-data-collection-evolucao</li>
          <li>#team-data-access</li>
          <li>#team-data-collection-digital-asset</li>
        </ul>
      </section>

      <footer style={{ marginTop: "60px", fontSize: "12px", color: "#666" }}>
        Documento interno – Onboarding Data Collection
      </footer>
    </div>
  );
}