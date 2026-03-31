export default function LinksUteisDashboard() {
  const styles = {
    container: {
      maxWidth: "1200px",
      margin: "0 auto",
    },
    section: {
      marginBottom: "56px",
    },
    subtitle: {
      color: "#666",
      marginTop: "-8px",
      marginBottom: "24px",
    },
    sectionTitle: {
      marginBottom: "18px",
    },
    grid: {
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
      gap: "16px",
    },
    card: {
      display: "block",
      textDecoration: "none",
      color: "inherit",
      border: "1px solid #ddd",
      borderRadius: "14px",
      padding: "18px",
      backgroundColor: "#fff",
      boxShadow: "0 2px 10px rgba(0,0,0,0.04)",
      transition: "transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease",
    },
    cardTitle: {
      margin: "0 0 8px 0",
      color: "#004033",
      fontSize: "18px",
    },
    cardText: {
      margin: 0,
      color: "#444",
      lineHeight: 1.5,
      fontSize: "14px",
    },
    badge: {
      display: "inline-block",
      marginBottom: "10px",
      padding: "4px 10px",
      borderRadius: "999px",
      backgroundColor: "#f2f7f5",
      color: "#004033",
      fontSize: "12px",
      fontWeight: "600",
    },
    emptyCard: {
      border: "1px dashed #ccc",
      borderRadius: "14px",
      padding: "18px",
      backgroundColor: "#fafafa",
    },
    footer: {
      marginTop: "60px",
      fontSize: "12px",
      color: "#666",
    },
  };

  const portal = [
    {
      title: "Portal de Automações",
      description: "Hub com automações e recursos úteis para o time.",
      href: "https://b2bhub.vercel.app/",
      tag: "Geral",
    },
  ];

  const opTools = [
    {
      title: "Acompanhamento de Manutenções",
      description:
        "Histórico de manutenções nos tribunais onde são realizadas capturas.",
      href: "https://docs.google.com/spreadsheets/d/1BsWX8ETJq3T4Wsdcd9DYIs_DhauERgK2WHBIv2JIJ3M/edit?gid=0#gid=0",
      tag: "OP",
    },
    {
      title: "Metabase",
      description: "Ferramenta para consultas e análises na base de dados.",
      href: "https://metabase.apps.jusbr.com/auth/login?redirect=%2F",
      tag: "OP",
    },
    {
      title: "Redash",
      description: "Alternativa para execução de consultas na base de dados.",
      href: "https://redash-int.digesto.com.br/",
      tag: "OP",
    },
    {
      title: "Pythex",
      description: "Validação de expressões regulares (regex).",
      href: "https://pythex.org/",
      tag: "OP",
    },
  ];

  const cproTools = [
    {
      title: "Tuxedo",
      description:
        "Ajuda a entender como foi feita a associação de um documento ao processo.",
      href: "https://tuxedo-admin.apps.jusbr.com/",
      tag: "CPRO",
    },
    {
      title: "WHOIS",
      description:
        "Consulta de dados como CPF, data de nascimento e nome da mãe a partir do nome.",
      href: "https://whois.apps.jusbr.com/api/persons",
      tag: "CPRO",
    },
    {
      title: "Tela",
      description:
        "Ferramenta com IA para validar se o processo pertence ao CPF/CNPJ analisado.",
      href: "https://app.tela.com/login",
      tag: "CPRO",
    },
    {
      title: "CPRO Admin",
      description:
        "Consulta módulos liberados, usuários, permissões e uso mensal da plataforma.",
      href: "https://www.jusbrasil.com.br/cpro-admin",
      tag: "CPRO",
    },
  ];

  const renderCards = (items) =>
    items.map((item) => (
      <a
        key={item.title}
        href={item.href}
        target="_blank"
        rel="noopener noreferrer"
        style={styles.card}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-2px)";
          e.currentTarget.style.boxShadow = "0 10px 24px rgba(0,0,0,0.08)";
          e.currentTarget.style.borderColor = "#b7d6cb";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0)";
          e.currentTarget.style.boxShadow = "0 2px 10px rgba(0,0,0,0.04)";
          e.currentTarget.style.borderColor = "#ddd";
        }}
      >
        <span style={styles.badge}>{item.tag}</span>
        <h3 style={styles.cardTitle}>{item.title}</h3>
        <p style={styles.cardText}>{item.description}</p>
      </a>
    ));

  return (
    <div style={styles.container}>
      <h1>Links Úteis e Ferramentas</h1>
      <p style={styles.subtitle}>
        Acessos rápidos para investigações, consultas e apoio operacional.
      </p>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Portal</h2>
        <div style={styles.grid}>{renderCards(portal)}</div>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Ferramentas OP</h2>
        <div style={styles.grid}>
          {renderCards(opTools)}
        </div>
      </section>

      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Ferramentas CPRO</h2>
        <div style={styles.grid}>
          {renderCards(cproTools)}

        </div>
      </section>

      <footer style={styles.footer}>
        Documento interno – Links úteis e ferramentas
      </footer>
    </div>
  );
}