export default function Base4BIZ() {
  return (
    <>
      <h1>Base de Conhecimento – 4BIZ</h1>
      <p>
        Este material foi elaborado para auxiliar o time de suporte na compreensão
        de análises e possíveis cenários mapeados.
      </p>

      <hr />

      <h2>1. Modais de Limite Atingido</h2>
      <p>
        <strong>Descrição:</strong> esta categoria se refere às situações em que o
        sistema exibe um modal de bloqueio por limite de uso ou restrição
        contratual. Abaixo, os principais cenários com seus respectivos contextos.
      </p>

      <h3>1.1 Plano contratado não possui módulo de processos</h3>
      <ul>
        <li>
          <strong>Informação interna:</strong> clientes legados podem ter pacotes
          antigos, nos quais a consulta processual era vendida separadamente.
        </li>
        <li>
          Mesmo com nomes como <strong>“Pesquisa Básica”</strong> ou{" "}
          <strong>“Pesquisa Avançada”</strong>, o módulo de processos pode não
          estar incluído.
        </li>
        <li>
          Usuários novos dessas contas podem tentar usar a funcionalidade sem
          saber que não têm acesso.
        </li>
      </ul>

      <h3>1.2 Limite de consultas por CPF ou CNPJ atingido</h3>
      <ul>
        <li>
          Existe um limite mensal de <strong>100 consultas</strong> por CPF/CNPJ
          por organização.
        </li>
        <li>
          Esse limite não é informado ao cliente. Após atingi-lo, qualquer nova
          consulta é bloqueada.
        </li>
      </ul>

      <h3>1.3 Limite de acompanhamento de processos atingido</h3>
      <ul>
        <li>
          Sempre que o cliente baixa um documento ou clica em{" "}
          <strong>“verificar processo”</strong> no JPV, o sistema começa a
          monitorar automaticamente aquele processo.
        </li>
        <li>
          Cada usuário contribui com <strong>5 acompanhamentos</strong>, somando ao
          limite total da organização.
        </li>
        <li>
          Exemplo: <strong>5 usuários contratados → 5 x 5 = 25 acompanhamentos</strong>{" "}
          no total.
        </li>
        <li>
          O limite é <strong>compartilhado</strong> (não é fracionado por usuário).
        </li>
        <li>
          Um único perfil pode utilizar todos os acompanhamentos disponíveis na
          conta.
        </li>
        <li>
          O plano foi estruturado para um mínimo de 5 usuários, então mesmo que a
          organização tenha menos usuários cadastrados, o limite mínimo de{" "}
          <strong>25 acompanhamentos</strong> permanece (vinculado ao plano, não à
          quantidade de acessos ativos).
        </li>
      </ul>

      <p>
        <strong>Importante:</strong> independente da forma de consulta (CPF, CNPJ,
        nome da parte ou número do processo), o que conta para o limite é o{" "}
        <strong>número de processos acompanhados</strong>, não o tipo de dado
        consultado.
      </p>

      <p>
        <strong>Observação (problema conhecido):</strong> existe uma distorção nos
        dados exibidos no campo <code>monitor_lawsuit</code> do Toolbelt, causada
        pela alternância entre ambientes após a separação do EO e JPV.
      </p>
      <ul>
        <li>
          Processos acompanhados no <strong>JPV</strong> aparecem apenas no JPV.
        </li>
        <li>
          Acompanhamentos feitos no <strong>EO</strong> aparecem apenas no EO.
        </li>
        <li>
          Os ambientes são independentes e os créditos não são unificados.
        </li>
        <li>O limite de consultas e acompanhamentos não é informado ao cliente.</li>
      </ul>

      <h3>1.4 Não permite o download de documentos (ambiente JPV)</h3>
      <ul>
        <li>
          Clicar em <strong>“verificar processo”</strong> ou{" "}
          <strong>“baixar documento”</strong> ativa automaticamente o
          acompanhamento do processo.
        </li>
        <li>
          Se o limite de acompanhamento da organização já tiver sido atingido, o
          download será bloqueado.
        </li>
      </ul>

      <h3>1.5 Não permite baixar peças processuais</h3>
      <ul>
        <li>
          O sistema bloqueia o download das peças processuais até que a OAB do
          usuário seja verificada.
        </li>
        <li>
          Enquanto a verificação não for concluída, o acesso permanece
          indisponível.
        </li>
      </ul>

      <h4>Regra de Produto – Acesso ao módulo de Peças</h4>
      <p>
        Desde <strong>05/12/2023</strong>, o acesso ao módulo de peças processuais
        foi restrito a usuários com <strong>OAB validada</strong>.
      </p>

      <h4>Como funciona a validação</h4>
      <p>
        Quando o usuário se identifica como advogado(a), uma modal de validação é
        exibida solicitando:
      </p>
      <ul>
        <li>CPF</li>
        <li>Data de nascimento</li>
        <li>Telefone</li>
        <li>Dados da OAB</li>
      </ul>
      <p>
        A validação é feita via integração com serviços da Receita Federal e OAB
        (via sistema chamado <strong>Severino</strong>).
      </p>
      <p>
        <strong>Importante:</strong> após 1 ano, a validação da OAB costuma
        expirar, e o usuário precisará refazer o processo de verificação para
        continuar acessando peças processuais.
      </p>

      <hr />

      <h2>2. Procedimento para Análise de Bloqueio de Funcionalidade</h2>

      <h3>2.1 Se der para identificar o cenário pelo relato/print</h3>
      <p>Adapte o discurso diretamente conforme o contexto identificado:</p>

      <ul>
        <li>
          Se tentou baixar um arquivo:{" "}
          <em>
            “Você lembra qual era o processo ou documento que tentou baixar? Pode
            me passar o dado e o e-mail da conta? Assim consigo testar por aqui.”
          </em>
        </li>
        <li>
          Se tentou acompanhar um processo:{" "}
          <em>
            “Consegue me enviar o número do processo e o e-mail logado? Isso vai
            ajudar a entender certinho onde o bloqueio ocorreu.”
          </em>
        </li>
        <li>
          Se tentou consultar por CPF/CNPJ:{" "}
          <em>
            “Pode me informar qual CPF ou CNPJ usou na consulta? E o e-mail da
            conta? Com isso consigo reproduzir aqui e te ajudar melhor.”
          </em>
        </li>
        <li>
          Se tentou baixar alguma peça processual:{" "}
          <em>
            “Pode me informar o e-mail da conta que estava usando? Assim consigo
            verificar aqui internamente o que pode ter acontecido.”
          </em>
        </li>
      </ul>

      <p>
        <strong>Importante:</strong> sempre solicitar o e-mail do cliente.
      </p>

      <p>
        Se o cliente perguntar por que o e-mail é necessário, responda:
        <br />
        <em>
          “Precisamos do e-mail para identificar corretamente o seu perfil e
          consultar as configurações do plano da sua organização, tá bem?”
        </em>
      </p>

      <h3>2.2 Se não der para identificar o cenário no primeiro contato</h3>
      <p>Sugestão de abordagem:</p>
      <p>
        <em>
          “Para que possamos compreender com mais precisão a origem da mensagem
          de limite apresentada, você pode nos informar qual ação estava
          executando no momento? Por exemplo: estava tentando realizar uma
          consulta por CPF, número do processo, acompanhar algum processo
          específico ou baixar um arquivo/peça processual?”
        </em>
      </p>

      <p>Dados que devemos solicitar para reproduzir o cenário:</p>
      <ul>
        <li>O dado utilizado na tentativa (CPF, número do processo etc.)</li>
        <li>O e-mail da conta utilizada</li>
        <li>O nome da organização à qual a conta pertence</li>
      </ul>

      <p>
        Mensagem sugerida ao cliente:
        <br />
        <em>
          “Para que possamos reproduzir o cenário internamente e investigar com
          mais precisão, você pode, por gentileza, nos informar: o dado utilizado
          (ex: CPF, número do processo etc.), o e-mail da conta utilizada e o
          nome da organização à qual a conta pertence?”
        </em>
      </p>

      <p>
        Se o cliente questionar o motivo do e-mail, responda:
        <br />
        <em>
          “Precisamos desses dados para identificar corretamente o seu perfil e
          consultar as configurações do plano da sua organização, tudo bem?”
        </em>
      </p>

      <hr />

      <h2>3. Simulação e reprodução do bloqueio (Jarvis + Take Over)</h2>

      <h3>3.1 Consultar o e-mail no Jarvis</h3>
      <p>
        No Slack, execute o comando no app do Jarvis:
        <br />
        <code>profiles-by-email emaildocliente</code>
      </p>

      <h3>3.2 Acessar o link do perfil retornado</h3>
      <p>
        No retorno do Jarvis, clique no link após <strong>“Link do perfil”</strong>{" "}
        para abrir o perfil completo do cliente.
      </p>

      <p>
        <strong>Dica:</strong> quando o comando retorna dois conjuntos de dados
        para o mesmo e-mail, isso significa que o e-mail do perfil administrativo
        da organização é o mesmo do perfil pessoal do administrador.
      </p>

      <p>Interpretação dos retornos:</p>
      <ul>
        <li>Primeiro retorno: perfil individual do administrador (pessoa física)</li>
        <li>Segundo retorno: perfil do grupo/organização (perfil institucional)</li>
      </ul>

      <h3>3.3 Realizar Take Over</h3>
      <p>
        Acesse a conta do cliente via Take Over e tente reproduzir exatamente a
        ação relatada, usando os dados fornecidos.
      </p>

      <hr />

      <h2>4. Simulação no JPV (dica de filtros)</h2>
      <p>Para realizar testes e simulações com mais precisão:</p>
      <ol>
        <li>No canto superior esquerdo, clique em <strong>“JPV”</strong> ou <strong>“Para Você”</strong>.</li>
        <li>No menu lateral esquerdo, selecione <strong>“Pesquisa Jurídica”</strong>.</li>
        <li>
          No campo <strong>“Todos”</strong>, aplique o filtro conforme o tipo de
          análise (ex: Consulta Processual, Modelos, Peças Processuais, etc.).
        </li>
      </ol>

        <img
        src="https://lh3.googleusercontent.com/sitesv/AAzXCked0-Id4TnC6Zl1JUMr5RcZfSmoXcc4IUF0dXFOt5Bvf13qN3ahOAoOIRYqKo_hmcHLoLdt6dB5kuEVk8XQ0mwK4kI847UrUXegW9MHvxgRigxegSRw9M7KFbC5mjn3JMKHrX0DPOUfb2YTVntluGpnwSSbKH8PIZL4H3hSRbur79fIk0FAgXuAtd8I2VDwckk786-QcFZNX4WnNQaeNZ-iYp1hH3UZz0iWCD0=w1280"
        alt="Tela de exemplo do Digesto IP"
        style={{ maxWidth: "70%", margin: "16px 0", borderRadius: 8 }}
      />

      <h3>4.1 Testar se a organização não possui módulo de processos</h3>
      <ol>
        <li>No JPV, faça uma consulta por CPF.</li>
        <li>Em seguida, faça uma consulta por número do processo.</li>
      </ol>
      <p>
        Se o modal aparecer em ambas as tentativas, é provável que a organização
        não possua o módulo de processos contratado (cliente legado).
      </p>

      <h3>4.2 Limite de consultas por CPF/CNPJ</h3>
      <ol>
        <li>Acesse JPV → Pesquisa Jurídica.</li>
        <li>Selecione o filtro <strong>Consulta Processual</strong>.</li>
        <li>Digite um CPF ou CNPJ para testar.</li>
      </ol>
      <p>
        Se o modal aparecer, a conta pode ter atingido o limite mensal de 100
        consultas por CPF/CNPJ (compartilhado entre todos os usuários).
      </p>

      <h3>4.3 Limite de acompanhamento de processos</h3>
      <ol>
        <li>Após consultar um processo, clique em <strong>Verificar Processo</strong> ou no ícone do sino.</li>
      </ol>
      <p>
        Se o modal aparecer, é provável que o limite de acompanhamento tenha sido
        alcançado.
      </p>

      <h3>4.4 Download de documentos (JPV)</h3>
      <p>
        Tente baixar um documento de um processo. O bloqueio geralmente ocorre
        quando o limite de acompanhamento foi atingido, já que o sistema tenta
        acompanhar automaticamente ao clicar em “baixar”.
      </p>

      <h3>4.5 Peças processuais bloqueadas (OAB não verificada)</h3>
      <p>
        Tente acessar alguma peça processual ou modelo jurídico. Se o acesso for
        negado, é provável que a OAB do usuário ainda não esteja verificada.
      </p>

      <hr />

      <h2>5. Como investigar se o grupo não possui o módulo de processos</h2>
      <p>
        <strong>Informação interna:</strong> atenção com clientes legados: antes,
        a consulta processual era comercializada separadamente. Hoje, todos os
        pacotes já incluem consulta processual, mas clientes legados podem estar
        com planos antigos.
      </p>

      <h3>5.1 Opção 1: teste no ambiente do usuário</h3>
      <ol>
        <li>No JPV, faça uma consulta por CPF.</li>
        <li>Em seguida, faça uma consulta por número do processo.</li>
      </ol>
      <p>
        Se o modal aparecer em ambas as tentativas, é provável que a organização
        não possua o módulo de processos contratado.
      </p>
          <img
        src="https://lh3.googleusercontent.com/sitesv/AAzXCkfuP4qyiav6bykKGtZnespPlAemGdbUXcQpyvHZYh8dn5oveWYT8FkYKgMdWMevipn9TvBdeAt6QIGsUyydT4yj-Pr5bFoDak4JNC20qdpBx-o68fF2VTAxJ998B501KcbAou1ycUjrjy6Hy9Lrl1Ri-9IKsrC99dR_CDro3iQ770w-n3ERUVwtv2A=w1280"
        alt="Tela de exemplo do Digesto IP"
        style={{ maxWidth: "45%", margin: "16px 0", borderRadius: 8 }}
      />
       <img
        src="https://lh3.googleusercontent.com/sitesv/AAzXCkcfNGTSqdWBfB8C4tF2if7yMsoz9eU-dj79QRvmLZZM7R8WkGW4qbRSRJ30HXBzzMz-ccKqj_Sjd5LkV8a4FVOxdd_-nYcUlnC93MgVs-GBqKMrlB5zOv4Z3jNDaAjxy39PdI0D3gM0OQpR8B77Z4UZHjaaJ_AeSsSFrU37nJcKj4GFgbbjGONkouwSAapHCH-IjbMjhFCydRDzVQs3JEBhYs6lYXStxmjN9g8=w1280"
        alt="Tela de exemplo do Digesto IP"
        style={{ maxWidth: "50%", margin: "16px 0", borderRadius: 8 }}
      />
        <img
        src="https://lh3.googleusercontent.com/sitesv/AAzXCkfC8v_7hTjKAExFHBDpy_1irNH-4RqRIpvz74BqeIOdGKfyn92cu6EvewkunMXD68uX9GJuE6WB3io5G0R8kXE_8MfD-yIkUfwn3JLumaymAvXfr86Nu0DbQAUNOeAxrOFDgPOoBWmFn-TS5pZ8TXLs33caMk1R6qGYqAsh04suyb1Jkz7z6N7wrLm_B0iFrWlu9l0k02C8tMTaSvBNEwlOcbCyCoKcWiojPpE=w1280"
        alt="Tela de exemplo do Digesto IP"
        style={{ maxWidth: "45%", margin: "16px 0", borderRadius: 8 }}
      />
      <img
        src="https://lh3.googleusercontent.com/sitesv/AAzXCkcmorEVd7TYWObXXSlUvkBhqEud6fY9yZrpUXlVzGU_7ZhB08j7uVLG5uEdKJV0DSKcpcK_3qG9Jm8ufFXYQyAFGBbh2qmF7EEt7_EEDGLefpzkYuMeGNDLOrOFoZ_rVdk1IVFlbqLPGTocWen9JzxqqMeYeWgQRwiPkj_RmZ2PPpftIku09ZJJq6tGUmDBBv0cWlRXLXUbofjV58RBRuOtrb2_wqeIa1fQ=w1280"
        alt="Tela de exemplo do Digesto IP"
        style={{ maxWidth: "40%", margin: "16px 0", borderRadius: 8 }}
      />
      <h3>5.2 Opção 2: conferir o plano no perfil do grupo</h3>
      <ol>
        <li>No link do perfil do grupo, clique nos três pontinhos → <strong>Gerenciar</strong>.</li>
        <li>
          Verifique o campo <strong>Plano</strong>. Se aparecer{" "}
          <strong>“Pesquisa Jurídica para Empresas”</strong>, isso indica que a
          organização não possui um plano de processos no pacote.
        </li>
        <li>
          Verifique o campo <strong>Plano</strong>. Se aparecer{" "}
          <strong>“Acompanhamento de processos”</strong>, isso indica que a
          organização possui um plano de processos no pacote.
        </li>
      </ol>
       <img
        src="https://lh3.googleusercontent.com/sitesv/AAzXCkesnXbWy9mTAP7wkLso6AD6RCsQQUuurOkV10cUdIsd--lpCIFwT3JkIdIMMJ9yX_naq5H7YtNcrccBhSigqJ84pV518sE_p2Eq3vix5UTTYEGfkO5DZsIzVFRC_8Io_OyDwbaVQ9OfJ1_iMvcmbb5N8jYEAlU6fKqCF_XuYhim4XL8s9ASJVwbgfDMkzPbWfe2iQZOxsgqKpjt_ZQxGoReUTcao8M3cw=w1280"
        alt="Tela de exemplo do Digesto IP"
        style={{ maxWidth: "50%", margin: "16px 0", borderRadius: 8 }}
      />
       <img
        src="https://lh3.googleusercontent.com/sitesv/AAzXCkeRaqEMccHYJWONFZUNLNM8SKB0YpwqLrFP4YTMV0GhLmARYnuiJgEmPnJwjB2Geo6KdG3bUpS4hvVku6CMbN8XoQMyPWWmDWtkAIl-v2zBM9p6AxQEx1VjROu3XZTKL2pQp_ofBecIiKwTUZEoiZOSHB4-Dl7cMRPOt0CalQd3J8EK8TdVlRjX2sjZQYSUM9gZFDONgv9Q7DvD-EhPv_5SlMCOMKMUoHoe99E=w1280"
        alt="Tela de exemplo do Digesto IP"
        style={{ maxWidth: "45%", margin: "16px 0", borderRadius: 8 }}
      />
      <p>
        <strong>Importante:</strong> essa validação deve ser feita pelo perfil do
        grupo. Ainda não mapeamos com precisão o significado de cada item exibido
        no perfil do usuário individual, por isso não recomendamos usar essa
        visão para análise caso não tenha o link do perfil do grupo.
      </p>

      <h3>5.3 Opção 3: conferir o plano pelo perfil do usuário (EO)</h3>
      <ol>
        <li>Com Take Over, acesse o EO (Escritório Online).</li>
        <li>Clique no ícone da engrenagem → <strong>Plano</strong>.</li>
        <li>
          Se aparecer <strong>“Pesquisa Jurídica para Empresas”</strong>, indica
          que a organização não possui o plano de processos no pacote.
        </li>
      </ol>
      <img
        src="https://lh3.googleusercontent.com/sitesv/AAzXCkdwhc_NKE7kFHDRtwLavDAH0NaqNuXAsWhoHOYcKvmjVdFhvjnjC_EeOOuZT5WEHWDthA1dyMKt1plik1ZuKs9QJGHWQcPn4VxE7VpE7PR3uccNAxX-SiSUuswtK9rQFeqRADZI8Ud8TgZD7eS0uTrU0wGMxJ--uGpHrC4l3LFJsyH6sys9jK3LeRe-LotGRmpFgBEkSWZu6g1_oSLxPlod-ZLKZT4iqxwk=w1280"
        alt="Tela de exemplo do Digesto IP"
        style={{ maxWidth: "45%", margin: "16px 0", borderRadius: 8 }}
      />
    </>
  );
}
