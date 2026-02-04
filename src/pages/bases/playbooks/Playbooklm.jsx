export default function Playbooklm() {
  const pageStyles = {
    container: {
      maxWidth: "100%",
      margin: "0 auto"
    },
    section: {
      marginBottom: "40px"
    },
    imageContainer: {
      display: "flex",
      flexWrap: "wrap",
      gap: "20px",
      margin: "24px 0",
      justifyContent: "center"
    },
    image: {
      maxWidth: "100%",
      width: "auto",
      height: "auto",
      borderRadius: "4px",
      margin: "0"
    },
    code: {
      backgroundColor: "#f5f5f5",
      padding: "3px 8px",
      borderRadius: "3px",
      fontFamily: "monospace",
      fontSize: "14px",
      color: "#004033"
    }
  };

  return (
    <div style={pageStyles.container}>
      <h1>Playbook – LM</h1>
      <h2>Processos não distribuídos / Cliente não localizou recebimento</h2>

      {/* 1. Visão geral */}
      <section style={pageStyles.section}>
        <h3>1. Visão geral</h3>
        <p>
          Este playbook orienta o atendimento de ocorrências em que o cliente informa
          que um processo não foi recebido, não aparece no sistema ou houve falhas
          na distribuição ou captura.
        </p>

        <ul>
          <li>Distribuição :: Coleta :: Falha na captura de processos</li>
          <li>Distribuição :: Coleta :: Falha na captura de partes</li>
          <li>Distribuição :: Coleta :: Atraso na captura de processos</li>
          <li>Distribuição :: Coleta :: Atraso na captura de partes</li>
          <li>Distribuição :: Expressão Regular :: Falha na configuração</li>
          <li>Distribuição :: Segredo de Justiça</li>
        </ul>
      </section>

      {/* 2. Análise inicial */}
      <section style={pageStyles.section}>
        <h3>2. Análise inicial</h3>

        <h4>2.1 Orientação ao cliente</h4>
        <ul>
          <li>Confirmar número do processo (formato CNJ)</li>
          <li>Validar se o processo está disponível no tribunal</li>
          <li>Verificar se é ou foi segredo de justiça</li>
          <li>Checar possíveis filtros por expressão regular (regex)</li>
        </ul>

        <h4>2.2 Análise do suporte</h4>
        <ol>
          <li>Validar publicação no tribunal</li>
          <li>Analisar logs de captura e distribuição</li>
          <li>Identificar falha, atraso ou bloqueio por regra</li>
          <li>Avaliar regex e segredo de justiça</li>
          <li>Retornar ao cliente com causa e próximo passo</li>
        </ol>
      </section>

      {/* 3. Verificação inicial */}
      <section style={pageStyles.section}>
        <h3>3. Verificação inicial</h3>

        <p>
          Confirmar se o processo existe na base judicial e se está classificado
          como segredo de justiça.
        </p>

        <p>
          <strong>Mensagem padrão – Segredo de justiça:</strong>
        </p>

        <p style={pageStyles.code}>
          “O processo informado ainda consta em segredo de justiça. Ele foi capturado
          dessa forma em nossa base e, para preservar a confidencialidade das informações,
          o envio não ocorre enquanto o sigilo estiver ativo.”
        </p>
      </section>

      {/* 4. Validação das partes */}
      <section style={pageStyles.section}>
        <h3>4. Validação das partes</h3>

        <ul>
          <li>Data de criação da parte dentro do período de distribuição</li>
          <li>Não enviamos processos retroativos</li>
          <li>
            Validação de polo:
            <ul>
              <li>Polo qualquer → ativo e passivo</li>
              <li>Autor → somente polo ativo</li>
              <li>Réu → somente polo passivo</li>
            </ul>
          </li>
          <li>Instância compatível com a do processo</li>
          <li>Tribunal corretamente cadastrado</li>
        </ul>
      </section>

      {/* 5. Conferência técnica */}
      <section style={pageStyles.section}>
        <h3>5. Conferência técnica (OP)</h3>

        <p>
          Acessar a Base Judicial no OP e consultar o processo utilizando a URL PROC2:
        </p>

        <p>
          <span style={pageStyles.code}>
            https://op.digesto.com.br/#/tribproc/proc2/NUMERO_PROCESSO?tipo_numero=8
          </span>
        </p>

        <ul>
          <li><strong>Primeira consulta em:</strong> data de captura na base</li>
          <li><strong>Distribuição:</strong> data de disponibilização no tribunal</li>
        </ul>

        <p>
          Até 30 dias → atraso <br />
          Acima de 30 dias → falha
        </p>
      </section>

      {/* 6. Regex e regras */}
      <section style={pageStyles.section}>
        <h3>6. Regex e regras</h3>

        <ul>
          <li>Validar regex no site pythex.org</li>
          <li>Cliente IP: ajuste interno</li>
          <li>Cliente OP/API: solicitar ajuste ao cliente</li>
          <li>
            Validar regras de dias retroativos e espera de anexos
            (default 48h)
          </li>
        </ul>
      </section>

      {/* 7. Casos específicos */}
      <section style={pageStyles.section}>
        <h3>7. Casos específicos</h3>

        <h4>Pedido de cadastro de partes</h4>
        <p>
          Aplicável principalmente a clientes IP. Solicitar lista de partes e
          utilizar o script <strong>“Monitorar partes em massa – IP”</strong>.
        </p>

        <h4>Falha no envio de relatórios diários</h4>
        <ul>
          <li>Validar envio no e-mail suporte-org</li>
          <li>Consultar Mailgun</li>
          <li>Verificar restrições e cadastro do usuário</li>
        </ul>

        <p>
          Persistindo o problema, escalar para o time de LM.
        </p>
      </section>
    </div>
  );
}
