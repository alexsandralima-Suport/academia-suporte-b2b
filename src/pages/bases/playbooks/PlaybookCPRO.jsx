export default function PlaybookCPRO() {
  return (
    <>
      <h1>Playbook – Consulta PRO (CPRO)</h1>

      {/* ===================== */}
      {/* Cenário 1 */}
      {/* ===================== */}
      <h2>Cenário 1 — Dados Insuficientes</h2>

      <p>
        <strong>Situação:</strong> Cliente reporta que uma consulta feita na data
        X não retornou processos que passaram a aparecer apenas em nova busca na
        data Y.
      </p>

      <h3>Passo a passo</h3>
      <ol>
        <li>Acesse o Consulta Processual Jusbrasil</li>
        <li>Busque pelo número do processo informado</li>
        <li>Copie o <strong>Lawsuit ID</strong> da página</li>
        <li>Acesse o <strong>Tuxedo</strong> com a senha do Bitwarden</li>
        <li>Vá em <strong>Lawsuit</strong>, cole o ID e clique em Buscar</li>
        <li>Clique em <strong>Detalhe</strong> no registro do processo</li>
        <li>
          No bloco <strong>Embedded – relatedPeople</strong>, localize o CPF
        </li>
        <li>
          Valide o campo <strong>updatedAt</strong> para identificar quando o
          CPF foi vinculado ao processo
        </li>
      </ol>

      <h3>Resposta sugerida ao cliente</h3>
      <p>
        Olá, [Nome do Cliente]!
        <br />
        <br />
        Identificamos que o processo informado foi vinculado ao CPF/CNPJ
        consultado somente em <strong>[data]</strong>. Por esse motivo, quando
        você realizou a busca na data X, o processo ainda não constava associado
        ao documento, passando a aparecer apenas na consulta da data Y.
        <br />
        <br />
        Essa diferença ocorre porque os tribunais atualizam periodicamente os
        vínculos dos dados processuais, e refletimos essas alterações em nosso
        sistema assim que são disponibilizadas.
        <br />
        <br />
        Permanecemos à disposição!
      </p>

      {/* ===================== */}
      {/* Cenário 2 */}
      {/* ===================== */}
      <h2>Cenário 2 — Divergência em Resultado</h2>

      <p>
        <strong>Situação:</strong> Cliente informa divergência de nomes (ex.: CPF
        retorna “Eduardo Ramlow”, mas no Consulta PRO aparece “Altair Ramlow”).
      </p>

      <h3>Passo a passo</h3>
      <ol>
        <li>
          Acesse os documentos do processo via IP ou OP. Se indisponível, acesse
          o tribunal logado
        </li>
        <li>Analise a petição inicial e valide os dados do CPF</li>
        <li>
          Verifique anexos posteriores que possam indicar alteração de dados
        </li>
        <li>
          Se confirmada a divergência, abra um thread em{" "}
          <strong>#atendimento-solucoes-consulta-pro</strong> com evidências
        </li>
        <li>
          Solicite ao time responsável a atualização no front-end da aplicação
        </li>
      </ol>

      <h3>Resposta sugerida</h3>
      <p>
        Olá, [Nome do Cliente]!
        <br />
        <br />
        Realizamos a análise completa do processo informado. Na petição inicial,
        o CPF consultado está vinculado corretamente ao nome{" "}
        <strong>[Nome correto]</strong>.
        <br />
        <br />
        Entretanto, em movimentações posteriores, houve inclusão de documentos
        solicitando alteração dos dados, passando a constar o nome{" "}
        <strong>[Novo Nome]</strong>.
        <br />
        <br />
        Já encaminhamos o caso internamente para que a atualização seja refletida
        corretamente na interface do Consulta PRO.
        <br />
        <br />
        Agradecemos pelo reporte e seguimos acompanhando.
      </p>

      {/* ===================== */}
      {/* Cenário 3 */}
      {/* ===================== */}
      <h2>Cenário 3 — Homônimos</h2>

      <p>
        <strong>Situação:</strong> Cliente questiona resultados envolvendo
        pessoas com o mesmo nome.
      </p>

      <h3>Dados necessários</h3>
      <ul>
        <li>CPF</li>
        <li>Data de nascimento</li>
        <li>Nome da mãe</li>
        <li>Nome completo</li>
      </ul>

      <h3>Passo a passo</h3>
      <ol>
        <li>Acesse o tribunal e busque pelo CPF</li>
        <li>
          Se não retornar, acesse o processo via IP, OP ou tribunal logado
        </li>
        <li>Analise a petição inicial e documentos anexos</li>
        <li>
          Em processos criminais, verifique BO ou Guia de Recolhimento
        </li>
        <li>
          Compare os dados encontrados com os informados pelo cliente
        </li>
      </ol>

      <p>
        Se houver divergência em CPF, data de nascimento ou nome da mãe, o caso
        deve ser classificado como <strong>Homônimo</strong>.
      </p>

      <h3>Resposta sugerida</h3>
      <p>
        Olá, [Nome do Cliente]!
        <br />
        <br />
        Verificamos o processo <strong>[nº do processo]</strong> e constatamos
        divergências nos dados apresentados:
        <br />
        <br />
        RG: 1923819 SSP/RN
        <br />
        Data de nascimento: 25/08/1977
        <br />
        Nome da mãe: Maria Ferreira da Silva
        <br />
        <br />
        Dessa forma, classificamos o processo como <strong>Baixa no Consulta
        PRO</strong>, garantindo que ele não será atribuído ao profissional
        consultado.
        <br />
        <br />
        Ficamos à disposição para novas análises.
      </p>

      {/* ===================== */}
      {/* Cenário 4 */}
      {/* ===================== */}
      <h2>Cenário 4 — Dúvidas sobre API</h2>

      <h3>1. Verificar se o módulo está habilitado</h3>
      <ol>
        <li>Acesse o CPRO Admin</li>
        <li>Busque pela empresa do cliente</li>
        <li>Verifique se o módulo está habilitado (ex: BNMP)</li>
      </ol>

      <h3>2. Testar endpoint via Postman</h3>
      <ol>
        <li>Importe a requisição no Postman</li>
        <li>Clique em <strong>Send</strong></li>
      </ol>

      <p>
        <strong>Resultado esperado:</strong>
      </p>
      <ul>
        <li>200 OK → API funcionando corretamente</li>
        <li>401, 403, 500 → seguir para escalonamento</li>
      </ul>

      <h3>3. Escalonamento</h3>
      <p>
        Colete os detalhes do erro e encaminhe para{" "}
        <strong>#atendimento-solucoes-consulta-pro</strong>.
      </p>

      <h3>Modelo de resposta ao cliente</h3>
      <p>
        Olá, [Nome do Cliente]!
        <br />
        <br />
        Identificamos que a funcionalidade não retornou o resultado esperado.
        Realizamos testes internos e o comportamento foi reproduzido.
        <br />
        <br />
        Como o módulo já está habilitado, descartamos problemas de permissão e
        encaminhamos o caso para nosso time técnico.
        <br />
        <br />
        Assim que tivermos novidades, retornaremos.
      </p>

      {/* ===================== */}
      {/* Cenário 5 */}
      {/* ===================== */}
      <h2>Cenário 5 — Problemas de Acesso e Módulos</h2>

      <h3>Cliente recebe apenas processos parciais</h3>
      <p>
        <strong>Causa:</strong> módulos específicos (criminal, trabalhista,
        etc.) não habilitados.
      </p>

      <h3>Solução</h3>
      <ol>
        <li>Valide os módulos no CPRO Admin</li>
        <li>Acione o CS responsável</li>
        <li>Acompanhe até a habilitação</li>
      </ol>

      <h3>Cliente não acessa dashboard de consumo</h3>
      <p>
        <strong>Causa:</strong> usuário sem perfil administrativo.
      </p>

      <h3>Solução</h3>
      <ol>
        <li>Acesse CPRO Admin → Usuários</li>
        <li>Valide o perfil do usuário</li>
        <li>Ative o perfil administrativo, se necessário</li>
      </ol>

      <h3>Resposta padrão</h3>
      <p>
        Olá, [Nome do Cliente]!
        <br />
        <br />
        Identificamos que a situação está relacionada a uma configuração no CPRO
        Admin. Já realizamos os ajustes necessários ou encaminhamos para o time
        responsável.
        <br />
        <br />
        Qualquer dúvida adicional, ficamos à disposição.
      </p>
    </>
  );
}
