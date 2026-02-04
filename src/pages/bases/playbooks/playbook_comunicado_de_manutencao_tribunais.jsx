export default function PlaybookComunicadoManutencaoTribunais() {
  const pageStyles = {
    container: { maxWidth: "100%", margin: "0 auto" },
    section: { marginBottom: "40px" },
    code: {
      backgroundColor: "#f5f5f5",
      padding: "3px 8px",
      borderRadius: "3px",
      fontFamily: "monospace",
      fontSize: "14px",
      color: "#004033",
    },
    callout: {
      border: "1px solid #ddd",
      borderLeft: "6px solid #555",
      borderRadius: "6px",
      padding: "12px 14px",
      background: "#fff",
      margin: "12px 0",
      whiteSpace: "pre-wrap",
      lineHeight: 1.5,
    },
    checklist: {
      listStyle: "none",
      paddingLeft: 0,
      margin: "12px 0",
      display: "grid",
      gap: "10px",
    },
    checkItem: {
      display: "flex",
      alignItems: "flex-start",
      gap: "10px",
      border: "1px solid #eee",
      borderRadius: "8px",
      padding: "10px 12px",
    },
    checkbox: { marginTop: 3 },
    muted: { color: "#666" },
  };

  return (
    <div style={pageStyles.container}>
      <h1>Playbook – Comunicar manutenção / prorrogação de manutenção dos tribunais</h1>
      <p style={pageStyles.muted}>
        Execução via Listmonk (campanhas de alertas).
      </p>

      {/* 1) Objetivo */}
      <section style={pageStyles.section}>
        <h2>1) Objetivo</h2>
        <p>
          Identificar quem receberá o comunicado e enviar a campanha correta no{" "}
          <strong>Listmonk</strong>, conforme o cenário:
        </p>
        <ul>
          <li>
            <strong>Manutenção</strong>
          </li>
          <li>
            <strong>Prorrogação de manutenção</strong>
          </li>
        </ul>
      </section>

      {/* 2) Quando usar */}
      <section style={pageStyles.section}>
        <h2>2) Quando usar</h2>
        <p>Use este playbook quando houver necessidade de comunicar:</p>
        <ul>
          <li>Início de manutenção em tribunal(is)</li>
          <li>Extensão/prorrogação de uma manutenção já comunicada</li>
        </ul>
      </section>

      {/* 3) Ferramenta */}
      <section style={pageStyles.section}>
        <h2>3) Ferramenta</h2>
        <p>
          <span style={pageStyles.code}>Listmonk</span>
        </p>
      </section>

      {/* 4) Passo a passo */}
      <section style={pageStyles.section}>
        <h2>4) Passo a passo</h2>

        <h3>4.1 Acessar a lista correta</h3>
        <ol>
          <li>Acesse o Listmonk</li>
          <li>
            Vá no menu:{" "}
            <span style={pageStyles.code}>
              Lista → Todas as listas → Alertas → Clientes que recebem alertas
            </span>
          </li>
        </ol>
         <div style={pageStyles.imageContainer}>
          <div style={pageStyles.imageContainer}>
          <img
            src="/img/playbookmanutencao1.png"
            alt="Lista correta no Listmonk"
            style={pageStyles.image}
          />
        </div>
    
  </div>

        <h3>4.2 Conferir os assinantes</h3>
        <ol>
          <li>Abra a aba <strong>Assinantes</strong></li>
          <li>Confirme quem receberá o comunicado (público-alvo do disparo)</li>
            <img
            src="/img/playbookmanutencao2.png"
            alt="Conferir assinantes no Listmonk"
            style={pageStyles.image}
          />
          <br />
            <img
            src="/img/playbookmanutencao3.png"
            alt="Conferir assinantes no Listmonk"
            style={pageStyles.image}
          />
        </ol>

        <h3>4.3 Localizar comunicados/campanhas disponíveis</h3>
        <ol>
          <li>Vá na área de <strong>campanhas/comunicados</strong></li>
          <li>
            Filtre por <span style={pageStyles.code}>“Manutenção”</span> ou{" "}
            <span style={pageStyles.code}>“Prorrogação de manutenção de tribunais”</span>
          </li>
               <img
            src="/img/playbookmanutencao4.png"
            alt="Localizar campanhas no Listmonk"
            style={pageStyles.image}
          />
        </ol>

        <h3>4.4 Escolher e editar a campanha</h3>
        <ol>
          <li>Clique na campanha correta (Manutenção vs Prorrogação)</li>
          <li>
            Edite o conteúdo conforme o caso, atualizando:
            <ul>
              <li>datas</li>
              <li>tribunal</li>
              <li>janela de manutenção</li>
              <li>impacto</li>
            </ul>
          </li>
              <img
            src="/img/playbookmanutencao5.png"
            alt="Editar campanha no Listmonk"
            style={pageStyles.image}
          />
          <br />
              <img
            src="/img/playbookmanutencao6.png"
            alt="Editar campanha no Listmonk"
            style={pageStyles.image}
          />
        </ol>

        <h3>4.5 Pré-visualizar e validar</h3>
        <ol>
          <li>Clique em <strong>Pré-visualizar</strong></li>
          <li>Confirme se a mensagem segue os padrões definidos</li>
             <img
            src="/img/playbookmanutencaoteste.png"
            alt="Pré-visualizar campanha no Listmonk"
            style={pageStyles.image}
          />
        </ol>

        <h3>4.6 Enviar a campanha</h3>
        <ol>
          <li>Após validar, retorne à campanha (a lista já estará salva)</li>
          <li>Clique em <strong>Enviar</strong> para disparar o comunicado</li>
        </ol>

        <div style={pageStyles.callout}>
          <strong>Dica:</strong>{" "}
          Antes de enviar, faça uma revisão final principalmente de{" "}
          <strong>datas</strong>, <strong>tribunal</strong>, <strong>janela</strong>{" "}
          e <strong>impacto</strong>.
             <img
            src="/img/playbookmanutencao8.png"
            alt="Pré-visualizar campanha no Listmonk"
            style={pageStyles.image}
          />
        </div>
      </section>

      {/* 5) Checklist rápido */}
      <section style={pageStyles.section}>
        <h2>5) Checklist rápido (antes de enviar)</h2>

        <ul style={pageStyles.checklist}>
          <li style={pageStyles.checkItem}>
            <input type="checkbox" style={pageStyles.checkbox} />
            <span>
              Estou na lista{" "}
              <span style={pageStyles.code}>
                Alertas → Clientes que recebem alertas
              </span>
            </span>
          </li>

          <li style={pageStyles.checkItem}>
            <input type="checkbox" style={pageStyles.checkbox} />
            <span>Conferi os assinantes (público correto)</span>
          </li>

          <li style={pageStyles.checkItem}>
            <input type="checkbox" style={pageStyles.checkbox} />
            <span>
              Selecionei a campanha certa:{" "}
              <strong>Manutenção</strong> ou <strong>Prorrogação</strong>
            </span>
          </li>

          <li style={pageStyles.checkItem}>
            <input type="checkbox" style={pageStyles.checkbox} />
            <span>Atualizei datas / tribunal / janela / impacto</span>
          </li>

          <li style={pageStyles.checkItem}>
            <input type="checkbox" style={pageStyles.checkbox} />
            <span>Fiz Pré-visualização e revisei tudo</span>
          </li>

          <li style={pageStyles.checkItem}>
            <input type="checkbox" style={pageStyles.checkbox} />
            <span>Disparei em Enviar</span>
          </li>
        </ul>

        <div style={pageStyles.callout}>
          <strong>Se der dúvida:</strong>{" "}
          volte um passo, revise a campanha e só então finalize o envio.
        </div>
      </section>

      <footer style={{ marginTop: "60px", fontSize: "12px", color: "#666" }}>
        Documento interno – Playbook de comunicação (Listmonk).
      </footer>
    </div>
  );
}
