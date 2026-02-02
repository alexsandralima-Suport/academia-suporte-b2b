import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function Home() {
  return (
    <div style={styles.container}>
      {/* HERO */}
      <section style={styles.hero}>
        <h1 style={styles.heroTitle}>
          Bem-vindo(a) à Academia de Treinamento – Suporte B2B
        </h1>

        <p style={styles.heroSubtitle}>
          Seu portal oficial de conteúdos, guias, vídeos e playbooks internos.
        </p>

        <NavLink to="/videos" style={styles.heroButton}>
          Ver treinamentos →
        </NavLink>
      </section>

      {/* PRODUTOS */}
      <section>
        <h2 style={styles.sectionTitle}>Nossos produtos:</h2>

        <div style={styles.grid}>
          <Card
            img="./img/icon_api.png"
            title="API JUSBRASIL SOLUÇÕES"
            text="Formas de envio do token de acesso, comportamento dos dados (tempo real ou base histórica), funcionamento do monitoramento de processos, tratamento de anexos e autos processuais, além das causas mais comuns de erros, respostas vazias e timeouts e como tratá-los corretamente."
            link="/faqs/apijs"
          />

          <Card
            img="/img/icon_ip.png"
            title="IP"
            text="Respostas rápidas sobre edição de termos monitorados, acesso a faturas e boletos, navegadores suportados e acompanhamento de processos no Digesto IP."
            link="/faqs/ip"
          />

          <Card
            img="/img/icon_op.png"
            title="OP"
            text="Orientações sobre cadastro de usuários e permissões, monitoramento de partes e processos, geração de relatórios, acompanhamento em diários oficiais e solução de problemas comuns no OP."
            link="/faqs/op"
          />

          <Card
            img="/img/icon_4biz.png"
            title="4BIZ"
            text="Orientações para resolver o não recebimento do link de acesso."
            link="/faqs/4biz"
          />

          <Card
            img="/img/icon_cpro.png"
            title="CPRO"
            text="Esclarece dúvidas sobre associação nome-CPF, limites de processos, critérios de cobrança, atualização de documentos, status dos processos e regras de consulta no ConsultaPRO."
            link="/faqs/cpro"
          />

          <Card
            img="/img/icon_hs.png"
            title="HUB SOLUÇÕES"
            text="Apresenta as funcionalidades do Hub como Pesquisa Jurídica, Jus IA, Gestão de Processos e Relatórios Avançados e esclarece o uso seguro dos dados no Jus IA."
            link="/faqs/hs"
          />

          <Card
            img="/img/icon_ra.png"
            title="RELATÓRIOS AVANÇADOS"
            text="Esclarece regras de cobrança, atualização e prazos dos relatórios, estrutura das abas, critérios de repetição de processos, campos entregues e funcionamento dos classificadores."
            link="/faqs/ra"
          />

          <Card
            img="/img/icon_procon.png"
            title="PROCON"
            text="Orientações sobre a API Procon, incluindo monitoramento de CIPs e reclamações, cadastro de empresas, gestão de credenciais, fontes de Procons integradas e funcionamento da autenticação e coleta automatizada de dados."
            link="/faqs/procon"
          />

          <Card
            img="/img/icon_intimacoes.png"
            title="INTIMAÇÕES"
            text="Orientações sobre a API de Intimações, incluindo coleta automatizada de intimações, citações e audiências, autenticação em tribunais, gestão de contas e perfis, integração via API e uso de webhooks para notificações."
            link="/faqs/intimacoes"
          />
        </div>
      </section>

      {/* FOOTER PREMIUM */}
      <footer style={styles.footer}>
        <div style={styles.footerContainer}>
          <div style={styles.footerHeader}>
            <h4 style={styles.footerTitle}>Academia Suporte B2B</h4>
            <p style={styles.footerSubtitle}>
              Para atualizações/ correções:
            </p>
          </div>

          <div style={styles.footerGrid}>
            <div>
              <h5 style={styles.footerColumnTitle}>Equipe Suporte</h5>
              <ul style={styles.footerList}>
                <li>adalberto.reis@jusbrasil.com.br</li>
                <li>diego.oliveira@jusbrasil.com.br</li>
                <li>roberto.junior@jusbrasil.com.br</li>
                <li>alexsandra.lima@jusbrasil.com.br</li>
              </ul>
            </div>

            <div>
              <ul style={styles.footerList}>
                <br />
                <li>william.sparremberger@jusbrasil.com.br</li>
                <li>mariana.celico@jusbrasil.com.br</li>
                <li>victor.chaves@jusbrasil.com.br</li>
              </ul>
            </div>
          </div>

          <div style={styles.footerBottom}>
            © {new Date().getFullYear()} Jusbrasil · Uso interno
          </div>
        </div>
      </footer>
    </div>
  );
}

/* CARD COM BOTAO + HOVER LATERAL */
function Card({ img, title, text, link }) {
  const [hover, setHover] = useState(false);

  return (
    <div
      style={{
        ...styles.card,
        ...(hover ? styles.cardHover : {})
      }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <img src={img} alt={title} style={styles.cardImg} />
      <h3 style={styles.cardTitle}>{title}</h3>
      <p style={styles.cardText}>{text}</p>

      <NavLink to={link} style={styles.cardButton}>
        Ver FAQ →
      </NavLink>
    </div>
  );
}

/* STYLES */
const styles = {
  container: {
    width: "100%"
  },

  hero: {
    textAlign: "center",
    padding: "80px 20px",
    borderBottom: "1px solid #e5e7eb"
  },
  heroTitle: {
    fontSize: 42,
    color: "#004033",
    marginBottom: 16
  },
  heroSubtitle: {
    fontSize: 16,
    color: "#374151",
    marginBottom: 32
  },
  heroButton: {
    display: "inline-block",
    padding: "12px 36px",
    backgroundColor: "#004033",
    color: "#ffffff",
    borderRadius: 6,
    textDecoration: "none",
    fontWeight: 600
  },

  sectionTitle: {
    fontSize: 28,
    color: "#004033",
    margin: "60px 0 32px"
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))",
    gap: 32
  },

  card: {
    backgroundColor: "#f3f4f6",
    padding: 24,
    borderRadius: 14,
    textAlign: "center",
    transition: "all 0.25s ease",
    borderLeft: "6px solid transparent"
  },
  cardHover: {
    borderLeft: "6px solid #004033",
    boxShadow: "0 8px 20px rgba(0, 0, 0, 0.12)",
    backgroundColor: "#ffffff"
  },
  cardImg: {
    width: 96,
    height: 96,
    objectFit: "contain",
    marginBottom: 16
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: 700,
    color: "#004033",
    marginBottom: 8
  },
  cardText: {
    fontSize: 13,
    color: "#374151",
    lineHeight: 1.5,
    marginBottom: 16
  },
  cardButton: {
    display: "inline-block",
    padding: "8px 18px",
    borderRadius: 6,
    backgroundColor: "#004033",
    color: "#ffffff",
    fontSize: 13,
    fontWeight: 600,
    textDecoration: "none"
  },

  footer: {
    marginTop: 80,
    background: "linear-gradient(135deg, #00362b, #004033)",
    color: "#ffffff",
    padding: "20px 24px 20px"
  },

  footerContainer: {
    maxWidth: 1100,
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    gap: 48
  },

  footerHeader: {
    maxWidth: 600
  },

  footerTitle: {
    fontSize: 20,
    fontWeight: 700,
    marginBottom: 8,
    color: "#ffffff"
  },

  footerSubtitle: {
    fontSize: 14,
    color: "#d1fae5",
    lineHeight: 1.6
  },

  footerGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: 48
  },

  footerColumnTitle: {
    fontSize: 13,
    fontWeight: 700,
    marginBottom: 16,
    color: "#a7f3d0",
    textTransform: "uppercase",
    letterSpacing: "0.05em"
  },

  footerList: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    fontSize: 14,
    lineHeight: 2,
    color: "#ecfeff"
  },

  footerBottom: {
    borderTop: "1px solid rgba(255,255,255,0.15)",
    paddingTop: 20,
    fontSize: 12,
    color: "#c7f9e9",
    textAlign: "center"
  }
};
