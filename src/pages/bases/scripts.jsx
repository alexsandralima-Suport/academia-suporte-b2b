import React, { useMemo, useState } from "react";

const supportEmail = "suportesolucoes@jusbrasil.com.br";

const scriptsData = [
  {
    titulo: "Expressão negativa em lote",
    categoria: "Partes monitoradas",
    link: "https://colab.research.google.com/drive/1ga1EDZp9jvQOuEN2g9KrM4zWodoOliem",
    descricao: "Este script foi criado para realizar o cadastro de expressões negativas em lotes, ou seja, quando iremos cadastrar muitas partes e precisamos cadastrar um expressão para essas partes.",
  },
  {
    titulo: "Habilitar muitas variações",
    categoria: "Partes monitoradas",
    link: "https://colab.research.google.com/drive/1L246j4qi9VLNqLr_p7kpN-lzWH3R7LkG",
    descricao: " Este script foi criado para habilitar em massa as partes que foram inativadas por terem um nome muito genérico. ",
  },
  {
    titulo: "Cadastrar contraparte em massa",
    categoria: "Partes monitoradas",
    link: "https://colab.research.google.com/drive/1IyKT0tn1E0YO1t8AgikApaT34WjEJS3X",
    descricao: "Este script foi criado para realizar o cadastro em massa de contrapartes para partes cadastradas.",
  },
  {
    titulo: "Excluir e Desmonitorar partes monitoradas - API",
    categoria: "API",
    link: "https://colab.research.google.com/drive/1KD3LzNOKzj7nd4BYE-vgwY9vNnH3ZTSp",
    descricao: "Este script foi criado para excluir e desmonitorar partes na API. Caso seja necessário apenas desmonitorar, ao executá-lo o sistema irá perguntar qual opção deseja escolher.",
  },
  {
    titulo: "Excluir e Desmonitorar Processos - API",
    categoria: "API",
    link: "https://colab.research.google.com/drive/1TRD12QYv5PaPbtf-8hSq3y26nSApY6iy?authuser=0",
    descricao: " Este script foi criado para excluir e desmonitorar processos na API. Caso seja necessário apenas desmonitorar, ao executá-lo o sistema irá perguntar qual opção deseja escolher.",
  },
  {
    titulo: "Alterar o polo da parte - API",
    categoria: "API",
    link: "https://colab.research.google.com/drive/16OEY_6LhwqMyxlN2johcb0aGAyynf-Gb?authuser=0#scrollTo=E9joWYJYPRL6&uniqifier=1",
    descricao: "Esse script foi criado com a finalidade de alterar o polo das partes em massa, se necessário.",
  },
  {
    titulo: "Alterar instâncias superiores - API",
    categoria: "API",
    link: "https://colab.research.google.com/drive/1471V_-yuvyTXJuy84kMHCxrmCQB4gvMr#scrollTo=PO71twbbbQBb",
    descricao: "Esse script tem a finalidade de alterar as instâncias das partes cadastradas, como exemplo considerar as o envio de processos para terceira instância.",
  },
  {
    titulo: "Alterar o limite de termos monitorados - API",
    categoria: "API",
    link: "https://colab.research.google.com/drive/1X9-Mdno9jYJjPZPwM4QWe96kZWSofF3M#scrollTo=LnMRaaAeBcGk",
    descricao: "Esse script foi criado para um chamado em especifico no qual foi necessário alterar o limite de termos monitorados via API.",
  },
  {
    titulo: "Ativar monitoramento dos processos API",
    categoria: "API",
    link: "https://colab.research.google.com/drive/1oBA99lshQZbXT97Cbr7LGIgo-q6tSq-z",
    descricao: "A finalidade desse script é ativar o monitoramento dos processos inativos.",
  },
  {
    titulo: "Inclusão do CNPJ em partes monitoradas",
    categoria: "Partes monitoradas",
    link: "https://colab.research.google.com/drive/1VBtEC_VqRlINNCOL01gnTH3wfxmBMTrj#scrollTo=YVLbXV1HDjE4",
    descricao: "Esse script foi criado para cadastrar os CNPJs nas partes monitoradas para o cliente Sem Processo.",
  },
  {
    titulo: "Cadastrar processos em massa - API",
    categoria: "API",
    link: "https://colab.research.google.com/drive/1FXiDjoHaSwaOjmadfaS-Mvw8G8OMAxHJ",
    descricao: "Existe uma limitação máxima de até 100 números no OP, quando os clientes precisam cadastrar uma quantidade significativa de processos, utilizamos esse script.",
  },
  {
    titulo: "Variações das partes monitoradas",
    categoria: "Partes monitoradas",
    link: "https://colab.research.google.com/drive/1FEuz4xcOdpIhuUrjCZf3sCxjaeBuHoZE#scrollTo=O2hN7r4bUW2S",
    descricao: "Esse script tem o objetivo de extrair as variações das partes monitoradas.",
  },
  {
    titulo: "Extrair dados dos usuários | Alteração do e-mail em massa ",
    categoria: "Relatórios",
    link: "https://colab.research.google.com/drive/1WottbuP3MLXJp0ebYjZVZQhB-iFUr177",
    descricao: "Esse script foi criado para um chamado em específico com a funcionalidade de exportar todos os usuários cadastrados para determinadas empresas.",
  },
  {
    titulo: "Cadastro de processos em massa",
    categoria: "IP",
    link: "https://colab.research.google.com/drive/1Ree5w6uc2d-GmSrOrJhAV1-3EOIdecAh",
    descricao: " Esse script (se não me engano) realizamos o cadastro em massa no IP também. A url utilizada é a mesma que usávamos para cadastrar ITAU, onde se o processo enviado já constava cadastrado e inativo, iríamos somente ativar e não cadastrar um novo.",
  },
  {
    titulo: "contar_cnjs",
    categoria: "Relatórios",
    link: "https://colab.research.google.com/drive/140tclf6ep8SAdJ_0ni8pqovBwOn2MQ6G",
    descricao: "O script retorna a quantidade de processo para cada tribunal.",
  },
  {
    titulo: "Desmonitorar processos em massa - IP",
    categoria: "IP",
    link: "https://colab.research.google.com/drive/1WAjDrErsZo2sVM_lslQDqaxHA4NW9pV9",
    descricao: " Esse script tem como objetivo desativar os processos monitorados no IP.",
  },
  {
    titulo: "Excluir partes monitoradas em massa - IP",
    categoria: "IP",
    link: "https://colab.research.google.com/drive/1f-FpBErRpZKndePwH2rE4GSCfysV2n8p#scrollTo=s7ZjYJJFtjb1",
    descricao: " Esse script tem como objetivo excluir as partes monitoradas pelo cliente IP.",
  },
  {
    titulo: "Monitoramento de partes em massa IP",
    categoria: "IP",
    link: "https://colab.research.google.com/drive/1dp-CjvtI-dwcxU_9GPPIV-zZJ3YqlZtp",
    descricao: "Esse script tem como objetivo cadastrar as partes monitoradas para o cliente IP.",
  },
];

const styles = {
  page: {
    minHeight: "100vh",
    background:
      "radial-gradient(circle at top, #f0f3f7 0%, #f7f9fb 45%, #ffffff 100%)",
    padding: 24,
    fontFamily:
      "Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    color: "#0f172a",
  },

  container: {
    maxWidth: 1280,
    margin: "0 auto",
  },

  hero: {
    position: "relative",
    overflow: "hidden",
    borderRadius: 32,
    padding: 32,
    marginBottom: 24,
    background: "linear-gradient(135deg, #ffffff 0%, #f8fafb 100%)",
    border: "1px solid #dbe4ea",
    boxShadow: "0 20px 60px rgba(0, 64, 51, 0.08)",
  },

  glowTop: {
    position: "absolute",
    top: -80,
    right: -60,
    width: 220,
    height: 220,
    borderRadius: "50%",
    background: "rgba(0, 64, 51, 0.10)",
    filter: "blur(40px)",
  },

  glowBottom: {
    position: "absolute",
    bottom: -70,
    left: -40,
    width: 200,
    height: 200,
    borderRadius: "50%",
    background: "rgba(0, 64, 51, 0.06)",
    filter: "blur(36px)",
  },

  topGrid: {
    position: "relative",
    display: "grid",
    gridTemplateColumns: "minmax(0, 1.7fr) minmax(300px, 0.8fr)",
    gap: 28,
    alignItems: "start",
  },

  leftCol: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },

  pill: {
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    background: "#f0f3f7",
    color: "#004033",
    border: "1px solid #dbe4ea",
    borderRadius: 999,
    padding: "8px 12px",
    fontSize: 13,
    fontWeight: 700,
    width: "fit-content",
  },

  h1: {
    fontSize: 58,
    lineHeight: 1,
    margin: "10px 0 0 0",
    color: "#004033",
    fontWeight: 300,
    letterSpacing: "-0.04em",
  },

  subtitle: {
    margin: 0,
    marginTop: 16,
    fontSize: 17,
    lineHeight: 1.7,
    color: "#334155",
    maxWidth: 860,
  },

  statsRow: {
    display: "grid",
    gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
    gap: 12,
    marginTop: 20,
  },

  statCard: {
    background: "#f8fafb",
    border: "1px solid #dde5eb",
    borderRadius: 20,
    padding: "16px 18px",
  },

  statLabel: {
    fontSize: 13,
    color: "#5f6f7b",
    margin: 0,
  },

  statValue: {
    fontSize: 28,
    color: "#004033",
    fontWeight: 700,
    margin: "6px 0 0 0",
  },

  rightCol: {
    display: "flex",
    flexDirection: "column",
    gap: 14,
  },

  notice: {
    background: "#f8fafb",
    border: "1px solid #dbe4ea",
    borderRadius: 24,
    padding: 20,
    boxShadow: "0 10px 30px rgba(0, 64, 51, 0.06)",
  },

  noticeTitle: {
    fontWeight: 700,
    color: "#004033",
    margin: 0,
    fontSize: 16,
  },

  noticeText: {
    marginTop: 10,
    color: "#32424d",
    fontSize: 14,
    lineHeight: 1.7,
  },

  toolbarInline: {
    marginTop: 20,
    background: "#f0f3f7",
    border: "1px solid #d9e2ea",
    borderRadius: 20,
    padding: 16,
    backdropFilter: "blur(6px)",
    width: "100%",
    maxWidth: "100%",
  },

  searchWrap: {
    width: "100%",
  },

  input: {
    width: "100%",
    borderRadius: 16,
    border: "1px solid #d4dde5",
    padding: "14px 16px",
    fontSize: 15,
    background: "#ffffff",
    outline: "none",
    boxSizing: "border-box",
    boxShadow: "0 2px 8px rgba(0,0,0,0.03)",
  },

  catWrap: {
    display: "flex",
    gap: 8,
    flexWrap: "wrap",
    marginTop: 12,
  },

  catBtn: {
    borderRadius: 999,
    padding: "10px 14px",
    border: "1px solid #dbe4ea",
    background: "#ffffff",
    color: "#334155",
    fontSize: 14,
    fontWeight: 600,
    cursor: "pointer",
    transition: "all 0.2s ease",
  },

  catBtnActive: {
    background: "#004033",
    color: "#fff",
    border: "1px solid #004033",
    boxShadow: "0 8px 24px rgba(0, 64, 51, 0.20)",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, minmax(0, 1fr))",
    gap: 24,
  },

  card: {
    overflow: "hidden",
    borderRadius: 28,
    border: "1px solid #e2e8f0",
    background: "#fff",
    boxShadow: "0 12px 40px rgba(15,23,42,0.08)",
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
  },

  cardTop: {
    height: 4,
    background: "linear-gradient(90deg, #004033 0%, #0d5a4b 55%, #1f7a68 100%)",
  },

  cardBody: {
    padding: 24,
  },

  badge: {
    display: "inline-flex",
    borderRadius: 999,
    padding: "8px 12px",
    fontSize: 12,
    fontWeight: 700,
    letterSpacing: "0.16em",
    textTransform: "uppercase",
    background: "#f0f3f7",
    color: "#004033",
    border: "1px solid #dbe4ea",
  },

  cardTitle: {
    fontSize: 30,
    lineHeight: 1.15,
    margin: "18px 0 0 0",
    fontWeight: 400,
    color: "#004033",
  },

  cardDesc: {
    marginTop: 18,
    fontSize: 15,
    lineHeight: 1.8,
    color: "#475569",
    minHeight: 54,
  },

  actions: {
    marginTop: 20,
    display: "flex",
    gap: 12,
    flexWrap: "wrap",
  },

  linkBtn: {
    display: "inline-flex",
    alignItems: "center",
    gap: 10,
    borderRadius: 16,
    padding: "12px 18px",
    background: "#004033",
    color: "#fff",
    textDecoration: "none",
    fontWeight: 600,
    fontSize: 15,
  },

  empty: {
    borderRadius: 24,
    background: "#fff",
    border: "1px dashed #cbd5e1",
    padding: 32,
    textAlign: "center",
    color: "#64748b",
  },
};

function CardScript({ item }) {
  const descricao = item.descricao?.trim()
    ? item.descricao
    : "Sem descrição ainda.";

  return (
    <article
      style={styles.card}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-4px)";
        e.currentTarget.style.boxShadow =
          "0 20px 50px rgba(15,23,42,0.12)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow =
          "0 12px 40px rgba(15,23,42,0.08)";
      }}
    >
      <div style={styles.cardTop} />
      <div style={styles.cardBody}>
        <span style={styles.badge}>{item.categoria}</span>
        <h3 style={styles.cardTitle}>{item.titulo}</h3>
        <p style={styles.cardDesc}>{descricao}</p>

        <div style={styles.actions}>
          <a href={item.link} target="_blank" rel="noreferrer" style={styles.linkBtn}>
            ↗ Abrir no Colab
          </a>
        </div>
      </div>
    </article>
  );
}

export default function Scripts() {
  const [busca, setBusca] = useState("");
  const [categoria, setCategoria] = useState("Todas");

  const categorias = [
    "Todas",
    ...new Set(scriptsData.map((item) => item.categoria)),
  ];

  const filtrados = useMemo(() => {
    const termo = busca.toLowerCase().trim();

    return scriptsData.filter((item) => {
      const okCategoria =
        categoria === "Todas" || item.categoria === categoria;

      const okBusca =
        !termo ||
        item.titulo.toLowerCase().includes(termo) ||
        item.descricao.toLowerCase().includes(termo) ||
        item.categoria.toLowerCase().includes(termo);

      return okCategoria && okBusca;
    });
  }, [busca, categoria]);

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <section style={styles.hero}>
          <div style={styles.glowTop} />
          <div style={styles.glowBottom} />

          <div style={styles.topGrid}>
            <div style={styles.leftCol}>
              <div style={styles.pill}>🔗 Catálogo de scripts disponíveis</div>

              <h1 style={styles.h1}>Central de scripts</h1>

              <p style={styles.subtitle}>
                Reúne os scripts disponíveis, a finalidade de cada um e os links
                de acesso para consulta rápida do time.
              </p>

              <div style={styles.statsRow}>
                <div style={styles.statCard}>
                  <p style={styles.statLabel}>Total de scripts</p>
                  <p style={styles.statValue}>{scriptsData.length}</p>
                </div>
                <div style={styles.statCard}>
                  <p style={styles.statLabel}>Categorias</p>
                  <p style={styles.statValue}>{categorias.length - 1}</p>
                </div>
                <div style={styles.statCard}>
                  <p style={styles.statLabel}>Resultados</p>
                  <p style={styles.statValue}>{filtrados.length}</p>
                </div>
              </div>

              <div style={styles.toolbarInline}>
                <div style={styles.searchWrap}>
                  <input
                    value={busca}
                    onChange={(e) => setBusca(e.target.value)}
                    placeholder="Buscar por título, descrição ou categoria"
                    style={styles.input}
                  />
                </div>

                <div style={styles.catWrap}>
                  {categorias.map((item) => {
                    const active = categoria === item;

                    return (
                      <button
                        key={item}
                        onClick={() => setCategoria(item)}
                        style={
                          active
                            ? { ...styles.catBtn, ...styles.catBtnActive }
                            : styles.catBtn
                        }
                      >
                        {item}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            <div style={styles.rightCol}>
              <div style={styles.notice}>
                <p style={styles.noticeTitle}>🛡️ Importante</p>
                <div style={styles.noticeText}>
                  Caso não possua acesso, o e-mail <strong>{supportEmail}</strong> tem
                  autorização. Basta acessar pelo e-mail e conceder o acesso.
                </div>
              </div>
            </div>
          </div>
        </section>

        {filtrados.length > 0 ? (
          <section style={styles.grid}>
            {filtrados.map((item) => (
              <CardScript key={item.titulo} item={item} />
            ))}
          </section>
        ) : (
          <div style={styles.empty}>
            Nenhum script encontrado para essa busca.
          </div>
        )}
      </div>
    </div>
  );
}