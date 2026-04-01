export default function OnboardingSuporteB2B() {
  const styles = {
    container: {
      maxWidth: "1180px",
      margin: "0 auto",
      padding: "32px 20px 72px",
      fontFamily: "Inter, system-ui, sans-serif",
      color: "#0f172a",
      background:
        "radial-gradient(circle at top, rgba(16,185,129,0.08), transparent 30%), #f8fafc",
    },
    hero: {

      color: "#fff",
      borderRadius: "28px",
      padding: "36px 32px",
      marginBottom: "32px",
    },
    section: {
      marginBottom: "28px",
      background: "#ffffff",
      border: "1px solid #e2e8f0",
      borderRadius: "24px",
      padding: "28px",
    },
    sectionTitle: { fontSize: "26px", marginBottom: "16px" },
    grid2: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
      gap: "16px",
    },
    card: {
      border: "1px solid #e2e8f0",
      borderRadius: "16px",
      padding: "16px",
      background: "#fff",
    },
    callout: {
      borderLeft: "6px solid #10b981",
      background: "#f0fdf4",
      padding: "14px",
      borderRadius: "12px",
      marginTop: "16px",
    },
    warning: {
      borderLeft: "6px solid #ef4444",
      background: "#fef2f2",
      padding: "14px",
      borderRadius: "12px",
      marginTop: "16px",
    },
    list: { paddingLeft: "20px", lineHeight: 1.8 },
  };

  return (
    <div style={styles.container}>
      {/* HERO */}
      <section style={styles.hero}>
        <h1>Onboarding Suporte B2B | Jusbrasil</h1>
        <p>
          Este material tem como objetivo te ajudar a entender como
          funciona o suporte B2B, quais são suas responsabilidades e como atuar
          com segurança e eficiência nos atendimentos.
        </p>

        <p>
          Aqui você vai encontrar desde conceitos básicos até orientações práticas
          que fazem diferença no dia a dia do atendimento.
        </p>
      </section>

      {/* SOBRE */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>1) Sobre o Suporte B2B</h2>

        <p>
          O time de Suporte B2B é responsável por atender clientes corporativos
          que utilizam soluções da Jusbrasil, como escritórios, empresas e
          departamentos jurídicos.
        </p>

        <p>
          Diferente do suporte tradicional, o atendimento B2B exige maior nível
          de precisão técnica, velocidade e entendimento do impacto do problema no negócio
          do cliente.
        </p>

        <ul style={styles.list}>
          <li>Atendimento via CRM (Sales Force), Slack e WhatsApp</li>
          <li>Investigação de problemas técnicos e operacionais</li>
          <li>Apoio no uso das plataformas</li>
          <li>Escalonamento estruturado de problemas</li>
        </ul>

        <div style={styles.callout}>
          Nosso papel não é apenas responder. É garantir que o cliente consiga
          operar normalmente.
        </div>
      </section>

      {/* PERFIL */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>2) Perfil do Cliente</h2>

        <p>
          Clientes B2B possuem características específicas que influenciam
          diretamente a forma como devemos atendê-los.
        </p>

        <ul style={styles.list}>
          <li>Alto volume de uso da plataforma</li>
          <li>Dependência operacional do produto</li>
          <li>Expectativa alta de SLA e qualidade</li>
          <li>Impacto direto em receita e operação</li>
        </ul>

        <div style={styles.warning}>
          Um erro ou atraso pode impactar diretamente o negócio do cliente.
        </div>
      </section>

      {/* PRINCÍPIOS */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>3) Princípios de Atendimento</h2>

        <div style={styles.grid2}>
          <div style={styles.card}>
            <strong>Empatia</strong>
            <p>Entenda o problema antes de responder.</p>
          </div>

          <div style={styles.card}>
            <strong>Clareza</strong>
            <p>Evite termos técnicos desnecessários.</p>
          </div>

          <div style={styles.card}>
            <strong>Agilidade</strong>
            <p>Mantanha o cliente atualizado, caso a análise demore.</p>
          </div>

          <div style={styles.card}>
            <strong>Responsabilidade</strong>
            <p>Acompanhe o caso até a resolução.</p>
          </div>
        </div>

        <div style={styles.callout}>
          Atendimento excelente + problema resolvido = cliente seguro.
        </div>
      </section>

      {/* FLUXO */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>4) Fluxo de Atendimento</h2>

        <p>
          O fluxo abaixo deve ser seguido na maioria dos atendimentos para garantir
          organização e qualidade.
        </p>

        <ol style={styles.list}>
          <li>Receber o chamado</li>
          <li>Entender o problema e o impacto</li>
          <li>Primeira resposta</li>
          <li>Investigar (logs, ferramentas, histórico)</li>
          <li>Atualizar o cliente da analise realizada</li>
          <li>Escalonar se necessário</li>
          <li>Confirmar a resolução com o cliente</li>
        </ol>

        <div style={styles.callout}>
          Lembre-se da classificação do ticket
        </div>

      </section>



      {/* SLA */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>5) SLA de Atendimento</h2>

        <p>
          O SLA (Service Level Agreement) define os tempos esperados de resposta e resolução
          dos atendimentos. Seguir esses tempos é essencial para garantir a experiência do cliente.
        </p>

        <div style={styles.grid2}>
          <div style={styles.card}>
            <h3 style={styles.cardTitle}>⏱ Primeira Resposta</h3>
            <p>
              O primeiro contato com o cliente deve acontecer em até:
            </p>
            <div style={styles.callout}>
              30 minutos
            </div>
            <p style={styles.cardText}>
              Mesmo que a solução ainda não esteja pronta, é importante sinalizar que o caso está em análise.
            </p>
          </div>

          <div style={styles.card}>
            <h3 style={styles.cardTitle}> Classificação N1</h3>
            <p>
              Casos simples ou de rápida resolução.
            </p>
            <div style={styles.callout}>
              Até 1 hora útil
            </div>
          </div>

          <div style={styles.card}>
            <h3 style={styles.cardTitle}> Classificação N2</h3>
            <p>
              Casos que exigem investigação ou interação com outras áreas.
            </p>
            <div style={styles.callout}>
              Até 24 horas úteis
            </div>
          </div>

          <div style={styles.card}>
            <h3 style={styles.cardTitle}> Classificação N3</h3>
            <p>
              Casos complexos, bugs ou dependentes de times técnicos.
            </p>
            <div style={styles.callout}>
              Até 7 dias corridos
            </div>
          </div>
        </div>

        <div style={styles.warning}>
          Não deixe o cliente sem atualização. Em casos longos (N2/N3), mantenha comunicação ativa durante o processo.
        </div>
      </section>

      {/* CANAIS */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>6) Canais de Comunicação</h2>

        <p>
          Os canais abaixo são utilizados para comunicação interna e
          escalonamentos.
        </p>

        <div style={styles.grid2}>
          <div style={styles.card}>
            <strong>Canal Principal</strong>
            <div style={styles.callout}>#ops-suporte-reminders</div>
            <p>Comunicação diária do time.</p>
          </div>

          <div style={styles.card}>
            <strong>Escalonamentos</strong>
            <ul style={styles.list}>
              <div style={styles.callout}> #monetization-conversion-requests</div>
              <div style={styles.callout}> #ops-suporte-jus-ia</div>
              <div style={styles.callout}> #ajuda-coleta_processos</div>
            </ul>
          </div>

          <div style={styles.card}>
            <strong>Bugs</strong>
            <div style={styles.callout}>#team-search-bug-reports</div>
          </div>

          <div style={styles.card}>
            <strong>Áreas Parceiras</strong>
            <ul style={styles.list}>
              <div style={styles.callout}> CS: #team-solucoes-cs</div>
              <div style={styles.callout}> Financeiro: #ops-fin-b2b</div>
            </ul>
          </div>
        </div>

        <div style={styles.warning}>
          Sempre inclua: problema + impacto + evidências ao escalar.
        </div>
      </section>

      {/* DEMANDAS */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>7) Demandas Comuns</h2>

        <div style={styles.grid2}>
          <div style={styles.card}>Problemas de acesso</div>
          <div style={styles.card}>Dúvidas de uso</div>
          <div style={styles.card}>Cobrança</div>
          <div style={styles.card}>Bugs</div>
          <div style={styles.card}>Dúvidas de distribuição </div>
        </div>
      </section>

      {/* DICAS */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>8) Dicas Finais</h2>

        <ul style={styles.list}>
          <li>Não deixe o cliente sem resposta</li>
          <li>Evite respostas genéricas</li>
          <li>Revise antes de enviar</li>
          <li>Documente tudo (comentário interno no ticket)</li>
        </ul>

        {/* TREINAMENTOS */}
<section style={styles.section}>
  <h2 style={styles.sectionTitle}>9) Treinamentos</h2>

  <p>
    Para aprofundar seus conhecimentos e evoluir no atendimento, disponibilizamos
    uma trilha de treinamentos com conteúdos práticos sobre ferramentas,
    produtos e cenários reais do suporte B2B.
  </p>

  <p>
    Os treinamentos são essenciais para ganhar autonomia, melhorar a qualidade
    das análises e reduzir a necessidade de escalonamentos.
  </p>

  <div style={styles.grid2}>
    <div style={styles.card}>
      <h3 style={styles.cardTitle}>📚 O que você vai encontrar</h3>
      <ul style={styles.list}>
        <li>Treinamentos de produtos</li>
        <li>Entendimento sobre as regras de negócio</li>
        <li>Boas práticas de investigação</li>
        <li>Fluxos operacionais do time</li>
      </ul>
    </div>

    <div style={styles.card}>
      <h3 style={styles.cardTitle}>🚀 Acesse a trilha de treinamentos</h3>

      <p>
        Clique abaixo para acessar todos os conteúdos disponíveis:
      </p>

      <a
        href="https://academia-suporte-b2b.vercel.app/treinamentos"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "inline-block",
          marginTop: "10px",
          fontWeight: "600",
          color: "#004033",
          textDecoration: "underline"
        }}
      >
        Acessar treinamentos
      </a>
    </div>
  </div>

</section>

        <div style={styles.callout}>
          Séneca - Enquanto vivemos, devemos continuar aprendendo.
        </div>
      </section>
    </div>

  );
}

 