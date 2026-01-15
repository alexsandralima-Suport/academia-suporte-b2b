export default function FaqProcon() {
  return (
    <>
      <h1>FAQ – Procon</h1>

      <h3>1. O que é a API Procon?</h3>
      <p>
        A API Procon fornece uma interface padronizada para acessar e gerenciar
        informações extraídas de diversos sistemas de Procons (órgãos de defesa
        do consumidor) espalhados pelo Brasil.
      </p>
      <p>
        Ela unifica dados de diferentes plataformas, como Sindec Consulta,
        ProconWeb, Proconsumidor ou APIs próprias, para facilitar o monitoramento
        de CIPs e Reclamações.
      </p>

      <h3>2. Qual é o objetivo dessa API?</h3>
      <p>
        O objetivo é permitir que empresas e times jurídicos obtenham, de forma
        estruturada e automatizada:
      </p>
      <ul>
        <li>As fontes de Procon monitoradas</li>
        <li>As empresas cadastradas</li>
        <li>
          As credenciais de acesso usadas pelos robôs responsáveis por coletar
          CIPs e Reclamações
        </li>
      </ul>

      <h3>3. Quem deve usar essa API?</h3>
      <p>Essa API é voltada para:</p>
      <ul>
        <li>
          Times jurídicos e de atendimento ao consumidor que lidam com CIPs e
          Reclamações
        </li>
        <li>
          Equipes técnicas que integram esses dados em ERPs, CRMs ou dashboards
        </li>
        <li>
          Plataformas intermediadoras que consomem dados de forma automatizada
        </li>
      </ul>

      <h3>4. Como funciona a autenticação?</h3>
      <p>
        A API utiliza token de autenticação (<strong>Bearer Token</strong>) nos
        headers das requisições para permitir o acesso às rotas protegidas, como
        cadastro e listagem de recursos.
      </p>

      <h3>5. O que é uma “Company” na API Procon?</h3>
      <p>
        Uma <strong>company</strong> representa uma empresa com CNPJ, que será
        associada às credenciais usadas para acessar os sistemas dos Procons.
      </p>

      <h3>6. Como cadastrar uma empresa?</h3>
      <p>
        É possível cadastrar uma empresa via endpoint{" "}
        <code>POST /companies</code>, enviando nome, CNPJ e uma descrição
        opcional no corpo da requisição.
      </p>
      <p>
        A empresa será registrada para uso em credenciais e monitoramento.
      </p>

      <h3>7. Como listar empresas cadastradas?</h3>
      <p>
        Utilize o endpoint <code>GET /companies</code> com os headers de
        autenticação para recuperar todas as empresas vinculadas ao seu token.
      </p>
      <p>
        É possível aplicar filtros via query, como{" "}
        <code>where</code>, <code>page</code> e <code>per_page</code>.
      </p>

      <h3>8. O que são “Sources”?</h3>
      <p>
        <strong>Sources</strong> são os sistemas de Procon monitorados pela
        plataforma. Cada source representa um Procon específico, como o
        ProconWeb de um estado.
      </p>

      <h3>9. Como listar os Procons monitorados?</h3>
      <p>
        Faça um <code>GET /sources</code> utilizando seu token para recuperar
        todos os provedores de dados disponíveis na API.
      </p>
      <p>
        É possível filtrar por critérios como nome, estado ou outros campos
        utilizando o parâmetro <code>where</code>.
      </p>

      <h3>10. O que são “Credentials”?</h3>
      <p>
        Credenciais representam os dados de login (usuário e senha) necessários
        para que o robô automatizado da Jusbrasil acesse o sistema do Procon e
        extraia dados vinculados ao CNPJ da empresa.
      </p>
      <p>
        Cada credencial é associada a uma <strong>source</strong> (Procon) e a
        uma <strong>company</strong>.
      </p>

      <h3>11. Como cadastrar uma credencial?</h3>
      <p>
        Utilize o endpoint <code>POST /credentials</code>, enviando:
      </p>
      <ul>
        <li>Username e password</li>
        <li>Source_id (Procon alvo)</li>
        <li>Company_id (empresa associada)</li>
        <li>
          Opcionalmente, <code>activate_new_profiles</code> para ativar novos
          perfis automaticamente
        </li>
      </ul>

      <h3>12. Como listar credenciais existentes?</h3>
      <p>
        Faça um <code>GET /credentials</code> com seu token para recuperar todas
        as credenciais cadastradas.
      </p>
      <p>
        Os resultados podem ser paginados e filtrados utilizando o parâmetro{" "}
        <code>where</code>.
      </p>

      <h3>13. Como filtrar credenciais?</h3>
      <p>
        É possível usar o parâmetro <code>where</code> para filtrar resultados,
        por exemplo, por <code>source_id</code> ou outros campos, facilitando a
        busca por credenciais específicas.
      </p>

      <h3>14. Como obter detalhes de uma credencial?</h3>
      <p>
        Utilize o endpoint <code>GET /credentials/{`{id}`}</code>, passando o ID
        da credencial na URL para obter os detalhes completos.
      </p>

      <h3>15. Como funciona a coleta de CIPs e Reclamações?</h3>
      <p>
        A API não apenas cadastra recursos. Ela permite que robôs automatizados
        façam login nos sistemas dos Procons fora do horário comercial e coletem
        arquivos de CIPs e Reclamações.
      </p>
      <p>
        Esses dados ficam disponíveis para consulta via API ou podem ser enviados
        via webhook.
      </p>

      <h3>16. Dúvidas comuns sobre o uso da API</h3>
      <p>
        <strong>
          A API retorna apenas CIPs ou também reclamações?
        </strong>
      </p>
      <p>
        Por padrão, a API foca em CIPs, que são notificações oficiais
        extrajudiciais. Caso seja necessário incluir reclamações, consulte o
        suporte para ajustes específicos.
      </p>
    </>
  );
}
