export default function Base4BIZ() {
  return (
    <>
      <h1>Playbook de Atendimento – 4BIZ</h1>
      <p>Versão 2026 · Uso Interno · Confidencial</p>

      <hr />

      <h2>1. Introdução</h2>
      <p>
        Este playbook tem como objetivo padronizar o atendimento aos clientes
        4biz, garantindo agilidade, consistência e qualidade nas interações. A
        proposta é facilitar a execução no dia a dia, reduzir dúvidas
        operacionais e assegurar que todos os processos sejam realizados de
        forma correta.
      </p>
      <p>
        <strong>Lembre-se:</strong> antes de executar qualquer ação, confirme a
        identidade e o contrato do cliente no Mr Big. Em caso de dúvida,
        consulte o CS de referência no Slack.
      </p>

      <hr />

      <h2>2. Sistemas Utilizados</h2>
      <p>
        O atendimento 4biz utiliza diferentes sistemas que devem ser acionados
        conforme o tipo de solicitação do cliente.
      </p>

      <table style={{ borderCollapse: "collapse", width: "100%" }}>
        <thead>
          <tr>
            <th style={{ border: "1px solid #ccc", padding: "8px", textAlign: "left" }}>
              Sistema
            </th>
            <th style={{ border: "1px solid #ccc", padding: "8px", textAlign: "left" }}>
              Quando usar
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: "1px solid #ccc", padding: "8px" }}>
              <a
                href="https://mandioca-admin.apps.jusbr.com/admin/"
                target="_blank"
                rel="noreferrer"
              >
                <strong>Mandioca</strong>
              </a>
            </td>
            <td style={{ border: "1px solid #ccc", padding: "8px" }}>
              Verificar e remover e-mails em blacklist. Essencial em casos de
              não recebimento de convites ou comunicações.
            </td>
          </tr>
          <tr>
            <td style={{ border: "1px solid #ccc", padding: "8px" }}>
              <a
                href="https://mrbig-admin-production.apps.jusbr.com/admin"
                target="_blank"
                rel="noreferrer"
              >
                <strong>Mr Big</strong>
              </a>
            </td>
            <td style={{ border: "1px solid #ccc", padding: "8px" }}>
              Validar informações contratuais, plano ativo e identificar o
              usuário administrador.
            </td>
          </tr>
          <tr>
            <td style={{ border: "1px solid #ccc", padding: "8px" }}>
              <a
                href="https://jusbrasil.pipedrive.com/pipeline/8/user/everyone?quickFilter=none"
                target="_blank"
                rel="noreferrer"
              >
                <strong>Pipedrive</strong>
              </a>
            </td>
            <td style={{ border: "1px solid #ccc", padding: "8px" }}>
              CRM para consultar histórico do cliente e identificar o CS
              responsável pelo contrato.
            </td>
          </tr>
          <tr>
            <td style={{ border: "1px solid #ccc", padding: "8px" }}>
              <a
                href="https://jusbrasil.slack.com/archives/D09C24X5D7S"
                target="_blank"
                rel="noreferrer"
              >
                <strong>Jarvis (Slack)</strong>
              </a>
            </td>
            <td style={{ border: "1px solid #ccc", padding: "8px" }}>
              Robô para executar comandos e alterações nos perfis dos usuários.
            </td>
          </tr>
          <tr>
            <td style={{ border: "1px solid #ccc", padding: "8px" }}>
              <a
                href="https://metabase.apps.jusbr.com/"
                target="_blank"
                rel="noreferrer"
              >
                <strong>Metabase</strong>
              </a>
            </td>
            <td style={{ border: "1px solid #ccc", padding: "8px" }}>
              Validar envio de e-mails e analisar dados. Atenção: pode haver
              delay de até 24h nas informações.
            </td>
          </tr>
        </tbody>
      </table>

      <hr />

      <h2>3. Procedimentos de Atendimento</h2>

      <h3>3.1 Cliente não recebe e-mail — Remoção Individual</h3>
      <p>
        Quando o cliente informa que não recebeu o convite ou qualquer
        comunicação, o primeiro passo é verificar no Mandioca se o e-mail está
        em blacklist.
      </p>

      <h4>Passo a passo</h4>
      <ol>
        <li>Acesse o Mandioca Admin e pesquise pelo e-mail do cliente.</li>
        <li>
          Se estiver bloqueado, aparecerá a opção de deletar — clique e
          confirme.
        </li>
        <li>Reenvie o convite ao cliente.</li>
        <li>
          Retorne ao cliente informando que o problema foi identificado e
          corrigido.
        </li>
      </ol>

      <p>
        <strong>Exemplo de resposta:</strong>{" "}
        <em>
          "Identificamos que seu e-mail estava bloqueado em nosso sistema. Já
          realizamos a correção e reenviamos o convite. Caso não localize na
          caixa de entrada, por favor verifique também a pasta de spam."
        </em>
      </p>

      <h3>3.2 Cliente não recebe e-mail — Remoção em Massa por Domínio</h3>
      <p>
        Quando a solicitação envolve múltiplos e-mails do mesmo domínio (ex:
        todos os usuários de @cliente.com.br), a interface admin do Mandioca
        não suporta remoção em massa. O procedimento é diferente.
      </p>
      <p>
        <strong>Atenção:</strong> use este fluxo para remoções de muitos
        e-mails ou quando a solicitação for por domínio inteiro. Para 1–2
        e-mails, use o procedimento 3.1.
      </p>

      <h4>Passo 1 — Verificar no Metabase</h4>
      <p>
        Confirme quais e-mails do domínio estão na blacklist e qual o motivo:
      </p>
      <p>
        <strong>Banco:</strong> BigQuery
      </p>
      <pre
        style={{
          background: "#f4f4f4",
          padding: "12px",
          borderRadius: 6,
          overflowX: "auto",
          fontSize: "0.9em",
        }}
      >
        {`SELECT email, type, dsn\nFROM \`data_production_mandioca_db.mandioca_blacklist\`\nWHERE domain = 'dominio.com.br'\nORDER BY email`}
      </pre>
      <p>Exporte o resultado como planilha (.xlsx) para anexar na solicitação.</p>

      <h4>Motivos mais comuns de entrada na blacklist</h4>
      <table style={{ borderCollapse: "collapse", width: "100%" }}>
        <thead>
          <tr>
            <th style={{ border: "1px solid #ccc", padding: "8px", textAlign: "left" }}>
              Tipo
            </th>
            <th style={{ border: "1px solid #ccc", padding: "8px", textAlign: "left" }}>
              Causa Provável
            </th>
            <th style={{ border: "1px solid #ccc", padding: "8px", textAlign: "left" }}>
              Observação
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: "1px solid #ccc", padding: "8px" }}>
              <code>SOFT_BOUNCE</code>
            </td>
            <td style={{ border: "1px solid #ccc", padding: "8px" }}>
              Instabilidade temporária no servidor de destino
            </td>
            <td style={{ border: "1px solid #ccc", padding: "8px" }}>
              Acúmulo de rejeições temporárias
            </td>
          </tr>
          <tr>
            <td style={{ border: "1px solid #ccc", padding: "8px" }}>
              <code>HARD_BOUNCE 5.7.1</code>
            </td>
            <td style={{ border: "1px solid #ccc", padding: "8px" }}>
              Rejeição por política SPF/DKIM/DMARC
            </td>
            <td style={{ border: "1px solid #ccc", padding: "8px" }}>
              Problema de autenticação do remetente
            </td>
          </tr>
          <tr>
            <td style={{ border: "1px solid #ccc", padding: "8px" }}>
              <code>HARD_BOUNCE 5.1.1</code>
            </td>
            <td style={{ border: "1px solid #ccc", padding: "8px" }}>
              Endereço de e-mail inexistente
            </td>
            <td style={{ border: "1px solid #ccc", padding: "8px" }}>
              Verificar se o e-mail ainda é válido
            </td>
          </tr>
          <tr>
            <td style={{ border: "1px solid #ccc", padding: "8px" }}>
              <code>HARD_BOUNCE 5.0.0</code>
            </td>
            <td style={{ border: "1px solid #ccc", padding: "8px" }}>
              Erro genérico de rejeição permanente
            </td>
            <td style={{ border: "1px solid #ccc", padding: "8px" }}>
              Verificar logs do servidor de destino
            </td>
          </tr>
        </tbody>
      </table>

      <h4>Passo 2 — Acionar o time de Traffic no Slack</h4>
      <ul>
        <li>
          Canal: <strong>#teamacquisitionidentity</strong>
        </li>
        <li>
          Marcar: <strong>@metal</strong> (time de Traffic)
        </li>
        <li>
          Incluir na mensagem: domínio, volume de e-mails, motivo e a planilha
          exportada
        </li>
      </ul>

      <p>
        <strong>Modelo de mensagem:</strong>{" "}
        <em>
          "Oi @metal, tudo bem? Precisamos remover e-mails do domínio
          [dominio.com.br] da blacklist do Mandioca a pedido do cliente [Nome].
          Volume: [X] e-mails. Segue a lista em anexo. Consegue nos apoiar?"
        </em>
      </p>

      <h4>Passo 3 — Validar após a execução</h4>
      <ol>
        <li>Aguardar confirmação do @metal.</li>
        <li>Reexecutar a query no Metabase (pode haver delay de até 24h).</li>
        <li>
          Validar 2–3 e-mails diretamente no admin do Mandioca para confirmar.
        </li>
        <li>Retornar ao cliente confirmando a correção.</li>
      </ol>

      <p>
        <strong>Exemplo de resposta:</strong>{" "}
        <em>
          "Identificamos que os e-mails do seu domínio estavam bloqueados em
          nosso sistema. Já realizamos a correção. Caso algum usuário ainda não
          receba os e-mails, peço que nos informe para verificarmos
          individualmente."
        </em>
      </p>

      <h3>3.3 Adicionar Usuários</h3>
      <p>
        Nos casos em que o cliente solicita a adição de um novo usuário, é
        necessário acessar o Mr Big para identificar o contrato e confirmar
        quem é o usuário administrador.
      </p>

      <h4>Passo a passo</h4>
      <ol>
        <li>Acesse o Mr Big e localize o contrato do cliente.</li>
        <li>Identifique o usuário administrador.</li>
        <li>
          Acesse o perfil Jusbrasil do admin e realize o Take Over:{" "}
          <em>Perfil &gt; 3 pontinhos &gt; Gerenciar &gt; Take Over</em>
        </li>
        <li>
          Na Gestão de Convites, insira o nome completo e e-mail do novo
          usuário e envie o convite:{" "}
          <em>Perfil &gt; 3 Pontinhos &gt; Ir para Gestão de Convites</em>
        </li>
        <li>Informe o cliente que o convite foi enviado.</li>
      </ol>

      <p>
        <strong>Exemplo de resposta:</strong>{" "}
        <em>
          "O convite foi enviado para o e-mail informado. Assim que aceito, o
          usuário passará a ter acesso ao plano contratado."
        </em>
      </p>

      <h3>3.4 Remover Usuário</h3>
      <p>
        Quando houver solicitação de remoção de usuário, o processo deve ser
        realizado através do Take Over.
      </p>

      <h4>Passo a passo</h4>
      <ol>
        <li>Acesse o Mr Big e localize o contrato.</li>
        <li>Realize o Take Over no perfil do administrador.</li>
        <li>Selecione o usuário desejado e remova seu acesso ao plano.</li>
        <li>Confirme a remoção ao cliente.</li>
      </ol>

      <p>
        <strong>Exemplo de resposta:</strong>{" "}
        <em>"O usuário foi removido do plano."</em>
      </p>

      <h3>3.5 Limite de Consultas Atingido</h3>
      <p>
        Nos casos em que o cliente informa que não consegue realizar consultas
        por CPF ou processos devido ao limite atingido, siga o diagnóstico
        abaixo.
      </p>

      <h4>Passo a passo</h4>
      <ol>
        <li>
          No Jarvis (Slack &gt; Aplicativos), execute o comando{" "}
          <code>profiles-by-email</code> com o e-mail do cliente.
        </li>
        <li>
          Valide no BoxToolbelt a métrica{" "}
          <code>view_ls_entity_content_upper_bound</code> (Funcionalidades
          Permitidas &gt; view_ls_entity_content_upper_bound).
        </li>
        <li>
          Se a quota foi atingida, não realize nenhuma liberação manual —
          oriente o cliente sobre a limitação do plano.
        </li>
        <li>
          Inclua ou mencione o CS responsável para dar continuidade à conversa.
        </li>
      </ol>

      <p>
        <strong>Atenção:</strong> nunca libere manualmente a quota de consultas.
        O correto é orientar o cliente e acionar o CS.
      </p>

      <p>
        <strong>Exemplo de resposta:</strong>{" "}
        <em>
          "Não há um número fixo de consultas, pois o controle é feito por
          algoritmo. Ao identificar um alto volume de pesquisas, o sistema pode
          aplicar restrições temporárias. Esse comportamento ocorre porque o
          plano atual não é voltado para consultas em larga escala. Caso
          precisem de maior volume, existem soluções do Jusbrasil mais
          adequadas. Estou incluindo o CS responsável para apoiar vocês nessa
          avaliação."
        </em>
      </p>

      <h3>3.6 Perfil sem Assinatura Ativa</h3>
      <p>
        Quando o cliente informa que, ao acessar o Jusbrasil com o e-mail
        institucional, não consegue utilizar as funcionalidades da parceria.
      </p>

      <h4>Passo a passo</h4>
      <ol>
        <li>
          No Mr Big, localize o contrato da parceria e acesse o perfil do
          administrador.
        </li>
        <li>
          Realize o Take Over e verifique se o e-mail do solicitante consta
          como ativo ou pendente.
        </li>
        <li>
          Se o usuário consta como ativo, mas não está vinculado, execute no
          Jarvis o comando <code>profiles-by-email</code> com o e-mail do
          solicitante.
        </li>
        <li>
          Acesse o BoxToolbelt (fora do Take Over), clique em{" "}
          <strong>Link BoxToolbelt</strong> e navegue até{" "}
          <strong>contas vinculadas</strong>.
        </li>
        <li>
          Se o perfil não estiver associado a nenhuma conta, retorne ao perfil
          do admin, realize o Take Over, remova o usuário e reenvie o convite.
        </li>
        <li>Informe o cliente que o convite foi reenviado.</li>
      </ol>

      <p>
        <strong>Curiosidade:</strong> no Mr Big existe a configuração{" "}
        <em>
          "Dias para expiração dos benefícios em caso de inatividade (válido
          somente para login via Domínio Corporativo)"
        </em>
        . Usuários podem perder acesso após inatividade — comportamento esperado
        do sistema.
      </p>

      <p>
        <strong>Exemplo de resposta:</strong>{" "}
        <em>
          "Identificamos que seu usuário não estava diretamente vinculado ao
          plano da parceria. Realizamos o reenvio do convite de acesso. Assim
          que você aceitar, o vínculo será restabelecido e as funcionalidades
          estarão disponíveis."
        </em>
      </p>

      <h3>3.7 Verificação de Identidade (CPF em mais de uma conta)</h3>
      <p>
        Quando é identificado que o mesmo CPF está cadastrado em mais de uma
        conta. A regra do sistema permite que cada CPF esteja vinculado a
        apenas uma conta.
      </p>

      <h4>Passo a passo</h4>
      <ol>
        <li>Oriente o cliente sobre a regra (um CPF por conta).</li>
        <li>
          Solicite ao cliente: documento com foto (para validação de identidade)
          e e-mail da conta anterior.
        </li>
        <li>Valide se os dados correspondem à mesma pessoa.</li>
        <li>
          Confirmada a identidade, realize a remoção do CPF via Jarvis:
          <br />
          <code>@jarvis remover-cpf-e-documentos-relacionados PID CPF</code>
        </li>
        <li>
          Se o comando não funcionar ou ocorrer erro, abra uma solicitação no
          canal <strong>#teamacquisitionidentity</strong> para o time de
          segurança.
        </li>
      </ol>

      <hr />

      <h2>4. Canais e Contatos de Suporte Interno</h2>
      <p>Quando escalar ou precisar de apoio, utilize os canais corretos:</p>

      <table style={{ borderCollapse: "collapse", width: "100%" }}>
        <thead>
          <tr>
            <th style={{ border: "1px solid #ccc", padding: "8px", textAlign: "left" }}>
              Situação
            </th>
            <th style={{ border: "1px solid #ccc", padding: "8px", textAlign: "left" }}>
              Canal / Contato
            </th>
            <th style={{ border: "1px solid #ccc", padding: "8px", textAlign: "left" }}>
              Observação
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: "1px solid #ccc", padding: "8px" }}>
              Remoção em massa de blacklist
            </td>
            <td style={{ border: "1px solid #ccc", padding: "8px" }}>
              #teamacquisitionidentity (@metal)
            </td>
            <td style={{ border: "1px solid #ccc", padding: "8px" }}>
              Enviar lista de e-mails + domínio
            </td>
          </tr>
          <tr>
            <td style={{ border: "1px solid #ccc", padding: "8px" }}>
              CPF duplicado / problema de segurança
            </td>
            <td style={{ border: "1px solid #ccc", padding: "8px" }}>
              #teamacquisitionidentity
            </td>
            <td style={{ border: "1px solid #ccc", padding: "8px" }}>
              Enviar documento com foto, PID e CPF
            </td>
          </tr>
          <tr>
            <td style={{ border: "1px solid #ccc", padding: "8px" }}>
              Limite de consultas / upgrade de plano
            </td>
            <td style={{ border: "1px solid #ccc", padding: "8px" }}>
              CS responsável pelo contrato
            </td>
            <td style={{ border: "1px solid #ccc", padding: "8px" }}>
              Consultar via Pipedrive
            </td>
          </tr>
        </tbody>
      </table>

      <hr />

      <h2>5. Boas Práticas de Atendimento</h2>
      <ul>
        <li>
          Sempre confirme a identidade e o contrato do cliente antes de executar
          qualquer ação.
        </li>
        <li>
          Ao validar dados no Metabase, considere o delay de até 24h — sempre
          valide ações críticas diretamente no sistema de origem (Mandioca, Mr
          Big).
        </li>
        <li>
          Nunca libere quotas ou permissões manualmente sem orientação do CS ou
          time responsável.
        </li>
        <li>
          Em caso de dúvida, escale antes de agir — é melhor perguntar do que
          desfazer uma ação incorreta.
        </li>
        <li>
          Oriente sempre o cliente a verificar a pasta de spam quando o problema
          for de não recebimento de e-mails.
        </li>
      </ul>
    </>
  );
}
