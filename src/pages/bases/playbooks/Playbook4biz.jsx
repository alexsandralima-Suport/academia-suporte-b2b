export default function Playbook4BIZ() {
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
      <h1>Playbook – 4BIZ</h1>

      <div style={pageStyles.section}>
        <h2>Visão geral</h2>
        <p>
          Os planos corporativos do Jusbrasil são voltados para multiusuários e
          oferecem as mesmas funcionalidades disponíveis na contratação
          individual.
        </p>
        <p>
          Esse modelo é destinado a organizações que precisam de{" "}
          <strong>5 ou mais acessos</strong>, como escritórios de advocacia,
          departamentos jurídicos e instituições públicas (tribunais, OABs etc.).
        </p>
      </div>

      <div style={pageStyles.section}>
        <h2>Classificação de porte dos clientes</h2>
        <p>
          A classificação é realizada pelo time de CS com base na quantidade de
          logins contratados:
        </p>
        <ul>
          <li><strong>Small:</strong> de 5 a 15 logins</li>
          <li><strong>Mid:</strong> de 16 a 30 logins</li>
          <li><strong>Big:</strong> acima de 30 logins</li>
        </ul>
      </div>

      <div style={pageStyles.section}>
        <h2>Funcionalidades disponíveis</h2>
        <ul>
          <li>Pesquisa básica</li>
          <li>Consulta processual</li>
          <li>Pesquisa avançada</li>
          <li>Pesquisa avançada + acompanhamento processual</li>
          <li>Pesquisa de jurisprudência (exclusivo para CNJ)</li>
          <li>Pesquisa avançada + Jus IA</li>
          <li>
            Pesquisa avançada + acompanhamento de processos + Jus IA
          </li>
          <li>Plano gratuito</li>
        </ul>
      </div>

      <div style={pageStyles.section}>
        <h2>Contrato e cobrança</h2>
        <p>
          O contrato possui validade de <strong>1 ou 2 anos</strong>. A cobrança
          pode ser realizada de forma:
        </p>
        <ul>
          <li>Mensal</li>
          <li>Anual</li>
          <li>Bianual</li>
        </ul>
        <p>
          No momento da venda, o time de <strong>Sales</strong> aciona o time de{" "}
          <strong>Billing</strong>, que passa a ser responsável pela gestão
          financeira do contrato.
        </p>
        <div style={pageStyles.imageContainer}>
          <img
            src="https://lh3.googleusercontent.com/sitesv/AAzXCkdX-NWVMjD-scuwVJ6_bnSqpLxUGvBvE59E9-WRaRTiLMtdN2L6aPJb43FvMc1BOuc1ZCug1Ktw7WDzpbFBpJiEMplLaXy3UDBddCBcpFb-XBNzVRiMvSJ0aExZ7nN8n_UZRXK2cGr0t_wb6oBF_332Kr6LkFXy96TJJxpYw4dZ3PicECMFKJgwdsCjkbF0IrGQJ3t4-APxgPn5MXflWXb4JGbqX4tQ3IGqeH4=w1280"
            alt="Tela de exemplo do Digesto IP"
            style={pageStyles.image}
          />
          <img 
            src="https://lh3.googleusercontent.com/sitesv/AAzXCkcUA5-2E0-F0SZMks4Jch-P5M86X9GTcuzEMnw6TTGCxBNlkRB_dCprL6r5-c6OlBL2xsg7hF4jl98UOVtujaz9u7lWJCLFUyyCu1ql2ylytp2QvMsGphYb5HDuhZ9GgNKFDTNRThKkMxB2DAoEQDzwbotRU68VcknxuItUz4VwFa8oZkNzexZo8aqi30Wb_OUc7_xNg_utdUq6lzMwwKK-6-zR7eaUvubhc0Y=w1280"
            alt="Tela de exemplo do Digesto IP"
            style={pageStyles.image}
          />
        </div>
      </div>

      <div style={pageStyles.section}>
        <h2>Jarvis (Slack)</h2>
        <p>
          O <strong>Jarvis</strong> é o bot interno utilizado para acessar
          rapidamente dados de usuários e organizações.
        </p>
        <p>
          <strong>Comando mais utilizado:</strong>
          <br />
          <code style={pageStyles.code}>profiles-by-email emaildousuario</code>
        </p>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "32px",
            alignItems: "flex-start",
            marginTop: "24px",
            marginBottom: "24px"
          }}
        >
          <div style={{ flex: "1 1 320px", minWidth: 280 }}>
            <h3 style={{ marginTop: 0 }}>Interpretação dos retornos</h3>
            <p>
              Quando o comando retorna dois conjuntos de dados para o mesmo e-mail:
            </p>
            <ul>
              <li>
                <strong>Primeiro retorno:</strong> perfil individual do administrador
                (pessoa física)
              </li>
              <li>
                <strong>Segundo retorno:</strong> perfil da organização (perfil
                institucional)
              </li>
            </ul>
          </div>
          <img
            src="https://lh3.googleusercontent.com/sitesv/AAzXCkcSr1jYICGOs8RwHkjgNl6YPdifpMOAfYAJw6Q0sjxrn4LmLAVoWjLd7tkQZHRU-M_5pfyc3dpPB-dquZUQTiD_3ryV6VRboI1O0zwVOFc6-ZPl1a0o7BkanUBkwC2tNNUEvDZaKV7GDR0tO87HqRo75odWqypoLoixHeyr7k5AEbDWoDMmbeJNb_2O6P_hMkei_VTN3_WCjAtrIN8Xk8hfrT3Ew3ytYs5b=w1280"
            alt="Tela de exemplo do Digesto IP"
            style={{
              flex: "0 0 400px",
              maxWidth: "100%",
              borderRadius: "8px",
              boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
              alignSelf: "flex-start"
            }}
          />
        </div>
        <p>
          É no perfil da organização que é possível acessar:
        </p>
        <ul>
          <li>Convites pendentes</li>
          <li>Informações de consumo</li>
          <li>Gestão de usuários</li>
          <li>Dados gerais da conta corporativa</li>
        </ul>

        <h3>Apenas um perfil retornado</h3>
        <p>
          Quando o Jarvis retorna apenas um perfil, isso indica que o e-mail está
          vinculado somente a um perfil individual e não a uma organização como
          administrador.
        </p>
      </div>

      <div style={pageStyles.section}>
        <h2>Campos retornados pelo Jarvis</h2>
        <ul>
          <li><strong>Nome:</strong> nome do perfil (usuário ou organização)</li>
          <li><strong>PID:</strong> identificador único do perfil</li>
          <li><strong>UID:</strong> identificador interno do usuário</li>
          <li><strong>Username:</strong> identificador público do perfil</li>
          <li><strong>Email:</strong> e-mail vinculado ao perfil</li>
          <li><strong>Link do perfil:</strong> acesso ao perfil público</li>
          <li>
            <strong>Link BoxToolbelt:</strong> acesso às permissões e limites
          </li>
        </ul>
      </div>

      <div style={pageStyles.section}>
        <h2>BoxToolbelt</h2>
        <p>
          Ferramenta utilizada para verificar limites de uso e permissões da conta.
        </p>
        <p>
          <strong>Importante:</strong> certifique-se de{" "}
          <strong>não estar em takeover</strong> antes de acessar.
        </p>

        <h3>Campos importantes</h3>
        <ul>
          <li>
            <strong>view_ls_entity_content_upper_bound:</strong> limite total de
            acompanhamento de processos
          </li>
          <li>
            <strong>monitor_lawsuit:</strong> limite total de consultas por CPF
          </li>
        </ul>

        <h3>Como interpretar os dados</h3>
        <ul>
          <li><strong>Limite:</strong> total disponível</li>
          <li><strong>Usado:</strong> quantidade consumida</li>
          <li>
            <strong>Data de Expiração:</strong> data de renovação automática
          </li>
        </ul>
      </div>

      <div style={pageStyles.section}>
        <h2>Mandioca</h2>
        <p>
          Ferramenta utilizada para verificar e remover usuários da blacklist.
        </p>
      </div>

      <div style={pageStyles.section}>
        <h2>Metabase (antigo Kibana)</h2>
        <p>
          Utilizado para investigar se e-mails foram enviados corretamente quando
          o usuário não está na blacklist.
        </p>
        <p>
          Utilize o filtro <strong>"To Address"</strong> para buscar pelo e-mail do
          usuário.
        </p>
        <div style={pageStyles.imageContainer}>
          <img
            src="https://lh3.googleusercontent.com/sitesv/AAzXCkfhyKaPG6h8RKLXB3ggmgFS7Mb9qOTVszX_vAhizpuYe2EPpdiGd5TOSslyPB-PdbegUXBIxqwdsuFa1PX0b8sNB_fFyByYLA0uiqTwlmd0qGHRGtS5oBw_AoiPRPV-8a2gmrd2HLjJIXaILmhqcIzWjiSyQjKUUiyFgqiKiu31slULyMscLHXTpNHUoSG448PrSY4IJyyzh4OwRmENoZ8V_7QISHbSIYE72Os=w1280"
            alt="Tela de exemplo do Digesto IP"
            style={pageStyles.image}
          />
        </div>
      </div>

      <div style={pageStyles.section}>
        <h2>Takeover de Conta</h2>
        <p>
          O takeover permite assumir temporariamente a conta do usuário para
          reproduzir problemas ou validar configurações.
        </p>
        <div style={pageStyles.imageContainer}>
          <img
            src="https://lh3.googleusercontent.com/sitesv/AAzXCkcnt9PfFwlBBN0k38JVObQqYib2phaOenqSNvDnpEIz2YkXEPTAyexXcDM4TSQuF6GWVA-DfxHmCNQx0tGmD8XIKmiz8jXjtuBZYPyd_4gIlXJYHJ7dsTl25peeinrfWYCkZpck_ZeyhLrKGZpD9rNAhTk6t7OKZWt5LAaswa7ec5aSF1GbNUXOZ1HeAIsj8HJ7hiL_cXdwN6QzUqt-0WQVlvtaW385STg2JG8=w1280"
            alt="Tela de exemplo do Digesto IP"
            style={pageStyles.image}
          />
        </div>

        <h3>Passo a passo</h3>
        <ol>
          <li>Execute o comando no Jarvis</li>
          <li>Acesse o link do perfil retornado</li>
          <li>Clique em "Gerenciar"</li>
          <li>Role até o final e clique em "Take Over"</li>
          <li>Senha padrão: <strong>12345</strong></li>
        </ol>

        <h3>Como sair do takeover</h3>
        <p>
          Clique na foto do perfil e selecione <strong>"Sair do Takeover"</strong>.
        </p>

        <p>
          <strong>Importante:</strong> sempre finalize o takeover antes de iniciar
          outra atividade.
        </p>
      </div>

      <div style={pageStyles.section}>
        <h2>Pipedrive (CRM)</h2>
        <p>
          O Pipedrive é o sistema onde o time de CS gerencia as contas dos clientes.
        </p>

        <h3>O que pode ser consultado</h3>
        <ul>
          <li>Status do contrato</li>
          <li>Dados dos usuários vinculados</li>
          <li>Pacotes contratados</li>
          <li>Histórico da jornada do cliente</li>
          <li>Responsável pela conta (CS)</li>
        </ul>

        <h3>Como localizar a conta</h3>
        <ul>
          <li>Busque pelo domínio do e-mail</li>
          <li>Ou pelo nome da organização</li>
        </ul>
        <div style={pageStyles.imageContainer}>
          <img
            src="https://lh3.googleusercontent.com/sitesv/AAzXCkctquFEad_vESbRc0K12KpaNpcK-a9CauVd7QDRHU5subRiBytGVBsqYUgaPxUMO4GC6rdTQ6OOa8XmyhORklqX9eeAxM-FEQc7oya_wOvP6NoPk58y7uVypnd-XNSK7Xi6ECeCInTc34gYPwtah4OK06moRf8yTpziwILaga5G-LchETISNh1BDbOWWUkvRBKQvp_DXwm8u8CirkuuCJ4a6QgHa7NuNUrq8Xc=w1280"
            alt="Tela de exemplo do Digesto IP"
            style={pageStyles.image}
          />
        </div>
      </div>

      <div style={pageStyles.section}>
        <h2>Mr Big</h2>
        <p>
          Ferramenta utilizada para identificar o plano contratado, obter o link
          do perfil da organização e o e-mail do administrador.
        </p>
      </div>

      <div style={pageStyles.section}>
        <h2>EO – Escritório Online</h2>
        <p>
          Modelo antigo de ativação e gestão de usuários. Novos contratos não são
          ativados via EO.
        </p>
        <p>
          Contas antigas podem ainda utilizar esse modelo, mas durante renovações
          o CS geralmente migra para o <strong>Mr Big</strong>.
        </p>
      </div>

      <div style={pageStyles.section}>
        <h2>Magic Link</h2>
        <p>
          Forma segura de acesso ao Jusbrasil sem necessidade de senha ou convite
          manual.
        </p>
        <ul>
          <li>Login via link enviado por e-mail institucional</li>
          <li>Acesso sem senha</li>
          <li>
            Liberação automática para todos os e-mails do domínio contratado
          </li>
        </ul>
      </div>
    </div>
  );
}
