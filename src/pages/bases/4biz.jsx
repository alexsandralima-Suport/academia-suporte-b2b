export default function Playbook4BIZ() {
  const styles = {
    container: { maxWidth: "100%", margin: "0 auto" },
    section: { marginBottom: "50px" },
    code: {
      backgroundColor: "#f5f5f5",
      padding: "4px 8px",
      borderRadius: "4px",
      fontFamily: "monospace",
      fontSize: "14px",
      color: "#004033",
    },
    callout: {
      border: "1px solid #ddd",
      borderLeft: "6px solid #004033",
      borderRadius: "6px",
      padding: "14px",
      margin: "14px 0",
      backgroundColor: "#fafafa",
      lineHeight: 1.6,
    },
    warning: {
      border: "1px solid #f5c6cb",
      borderLeft: "6px solid #dc3545",
      borderRadius: "6px",
      padding: "14px",
      margin: "14px 0",
      backgroundColor: "#fff5f5",
      lineHeight: 1.6,
    },
    divider: {
      margin: "50px 0",
      borderTop: "2px dashed #ccc",
    },
  };

  return (
    <div style={styles.container}>
      <h1>Base de Conhecimento – 4BIZ</h1>

      {/* INTRODUÇÃO */}
      <section style={styles.section}>
        <p>
          Os planos corporativos do Jusbrasil são voltados para múltiplos usuários
          e oferecem as mesmas funcionalidades disponíveis na contratação individual.
        </p>

        <p>Destinado a organizações com 5 ou mais acessos, como:</p>
        <ul>
          <li>Escritórios de advocacia</li>
          <li>Departamentos jurídicos</li>
          <li>Instituições públicas (Tribunais, OABs, etc.)</li>
        </ul>
      </section>

      {/* CLASSIFICAÇÃO */}
      <section style={styles.section}>
        <h2>Classificação de Porte dos Clientes</h2>
        <div style={styles.callout}>
          <strong>Small:</strong> 5 a 15 logins <br />
          <strong>Mid:</strong> 16 a 30 logins <br />
          <strong>Big:</strong> acima de 30 logins
        </div>
      </section>

      {/* FUNCIONALIDADES */}
      <section style={styles.section}>
        <h2>Funcionalidades Disponíveis</h2>
        <ul>
          <li>Pesquisa básica</li>
          <li>Consulta processual</li>
          <li>Pesquisa avançada</li>
          <li>Pesquisa avançada + acompanhamento processual</li>
          <li>Pesquisa de jurisprudência (exclusivo para CNJ)</li>
          <li>Pesquisa avançada + Jus IA</li>
          <li>Pesquisa avançada + acompanhamento processual + Jus IA</li>
          <li>Plano gratuito</li>
        </ul>
      </section>

      {/* CONTRATO */}
      <section style={styles.section}>
        <h2>Contrato e Cobrança</h2>
        <p>O contrato pode ter validade de 1 ou 2 anos.</p>

        <p>Modalidades de cobrança:</p>
        <ul>
          <li>Mensal</li>
          <li>Anual</li>
          <li>Bianual</li>
        </ul>

        <div style={styles.callout}>
          No momento da venda, o time de Sales aciona o time de Billing,
          que passa a ser responsável pela gestão financeira do contrato.
        </div>
      </section>

      <div style={styles.divider} />

      {/* JARVIS */}
      <section style={styles.section}>
        <h2>Jarvis (Slack)</h2>

        <p>Bot interno utilizado para acessar dados de usuários e organizações.</p>

        <h3>Comando mais utilizado</h3>
        <div style={styles.code}>
          profiles-by-email emaildousuario
        </div>

        <h3>Interpretação dos retornos</h3>
        <ul>
          <li>
            <strong>Dois conjuntos de dados:</strong>
            <br />1º Perfil individual do administrador
            <br />2º Perfil da organização
          </li>
          <li>
            <strong>Apenas um perfil:</strong> e-mail vinculado somente a perfil individual
          </li>
        </ul>

        <h3>Campos retornados</h3>
        <ul>
          <li>Nome</li>
          <li>PID</li>
          <li>UID</li>
          <li>Username</li>
          <li>Email</li>
          <li>Link do perfil</li>
          <li>Link BoxToolbelt</li>
        </ul>
      </section>

      {/* BOXTOOLBELT */}
      <section style={styles.section}>
        <h2>BoxToolbelt</h2>
        <p>Ferramenta para verificar limites de uso e permissões da conta.</p>

        <div style={styles.warning}>
          ⚠ Certifique-se de não estar em takeover antes de acessar.
        </div>

        <h3>Campos Importantes</h3>
        <ul>
          <li>
            <span style={styles.code}>view_ls_entity_content_upper_bound</span> –
            limite total de acompanhamento de processos
          </li>
          <li>
            <span style={styles.code}>monitor_lawsuit</span> –
            limite total de consultas por CPF
          </li>
        </ul>

        <h3>Como interpretar</h3>
        <ul>
          <li><strong>Limite:</strong> total disponível</li>
          <li><strong>Usado:</strong> quantidade consumida</li>
          <li><strong>Data de Expiração:</strong> renovação automática</li>
        </ul>
      </section>

      {/* TAKEOVER */}
      <section style={styles.section}>
        <h2>Takeover de Conta</h2>
        <p>Permite assumir temporariamente a conta do usuário.</p>

        <h3>Passo a Passo</h3>
        <ol>
          <li>Execute o comando no Jarvis</li>
          <li>Acesse o link do perfil</li>
          <li>Clique em "Gerenciar"</li>
          <li>Role até o final</li>
          <li>Clique em "Take Over"</li>
          <li>Senha padrão: <span style={styles.code}>12345</span></li>
        </ol>

        <div style={styles.warning}>
          ⚠ Sempre finalize o takeover antes de iniciar outra atividade.
        </div>
      </section>

      {/* FERRAMENTAS COMPLEMENTARES */}
      <section style={styles.section}>
        <h2>Ferramentas Complementares</h2>

        <h3>Mandioca</h3>
        <p>Verificar e remover usuários da blacklist.</p>

        <h3>Metabase (antigo Kibana)</h3>
        <p>Investigar envios de e-mail.</p>

        <div style={styles.warning}>
          ⚠ Possui delay de até 24h para atualização.
        </div>

        <h3>Pipedrive (CRM)</h3>
        <ul>
          <li>Status do contrato</li>
          <li>Dados dos usuários</li>
          <li>Pacotes contratados</li>
          <li>Histórico da jornada</li>
          <li>Responsável CS</li>
        </ul>

        <h3>Mr. Big</h3>
        <ul>
          <li>Identificar plano contratado</li>
          <li>Link do perfil da organização</li>
          <li>E-mail do administrador</li>
        </ul>

        <h3>EO – Escritório Online</h3>
        <p>Modelo antigo de ativação (novos contratos não utilizam).</p>

        <h3>Magic Link</h3>
        <ul>
          <li>Login via link enviado por e-mail</li>
          <li>Acesso sem senha</li>
          <li>Liberação automática para domínio contratado</li>
        </ul>
      </section>

      <div style={styles.divider} />

      {/* EXEMPLO DE TICKET */}
      <section style={styles.section}>
        <h2>Exemplo de Ticket</h2>

        <h3>Problema</h3>
        <ul>
          <li>Convites não estavam sendo recebidos</li>
          <li>Domínio não estava na blacklist</li>
          <li>Metabase possui delay de 24h</li>
        </ul>

        <h3>Resolução</h3>
        <ul>
          <li>Identificada flag no Mr. Big</li>
          <li>Flag removida</li>
          <li>Convites reenviados com sucesso</li>
        </ul>
        <div style={{ marginTop: "12px", marginBottom: "20px" }}>
          <img
            src="/img/bc_4biz01.png"
            alt="Print do ticket de exemplo"
            style={{
              maxWidth: "100%",
              height: "auto",
              borderRadius: "6px"
            }}
          />
        </div>

        <h4>Documentos relacionados</h4>
        <p>
          <a
            href="https://jusbrasil.lightning.force.com/lightning/r/Case/500N400000gkgvJIAQ/view"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontWeight: "600",
              color: "#004033",
              textDecoration: "underline"
            }}
          >
            Link </a> do ticket para consulta.

        </p>

        <div style={styles.divider} />

        <section style={styles.section}>
          <h2>Exemplo de Ticket 2</h2>

          <h3>Mensagem do Cliente</h3>
          <div style={styles.callout}>
            Bom dia,<br />
            Estou sem acesso ao Jusbrasil e com limitação no Jus IA.<br />
            Att.
          </div>

          <h3>Análise</h3>
          <ul>
            <li>O Jus IA estava com período de cortesia ativo.</li>
            <li>A cortesia de 60 dias foi finalizada.</li>
            <li>Link de acesso à plataforma foi reenviado.</li>
          </ul>
           <div style={{ marginTop: "12px", marginBottom: "20px" }}>
          <img
            src="/img/bc_4biz02.png"
            alt="Print do ticket de exemplo"
            style={{
              maxWidth: "100%",
              height: "auto",
              borderRadius: "6px"
            }}
          />
        </div>

          <h3>Resolução Enviada ao Cliente</h3>
          <div style={styles.callout}>
            Bom dia! Tudo bem?
            <br /><br />
            Sobre os pontos informados:
            <br /><br />
            <strong>Jus IA:</strong> o plano atualmente contratado não contempla acesso ao Jus IA.
            Houve a concessão de uma cortesia de 60 dias, que já foi finalizada, e por esse motivo
            o acesso encontra-se limitado no momento.
            <br /><br />
            <strong>Acesso ao Jusbrasil:</strong> acabei de encaminhar para você o link de acesso
            à plataforma, para que consiga acessar normalmente.
            <br /><br />
            Fico à disposição!
          </div>

          <h4>Documentos relacionados</h4>
        <p>
          <a
            href="https://jusbrasil.lightning.force.com/lightning/r/Case/500N400000ji5ALIAY/view"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontWeight: "600",
              color: "#004033",
              textDecoration: "underline"
            }}
          >
            Link </a> do ticket para consulta.

        </p>
        </section>

        <div style={styles.divider} />

      </section>

      <footer style={{ marginTop: "60px", fontSize: "12px", color: "#666" }}>
        Documento interno – 4BIZ | Jusbrasil
      </footer>
    </div>
  );
}


