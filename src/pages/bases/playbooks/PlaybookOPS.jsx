export default function PlaybookOPS() {
  return (
    <>
      <h1>Playbook – Legal Ops</h1>

      {/* ===================== */}
      {/* Cenário 1 */}
      {/* ===================== */}
      <h2>Cenário 1 — Análise de distribuição de processos</h2>

      <p>
        <strong>Situação:</strong> Cliente reporta que um ou mais processos
        específicos não foram enviados.
      </p>

      <h3>Passo a passo</h3>
      <ol>
        <li>Acesse o OP</li>
        <li>Busque pela opção de <strong>debug</strong></li>
        <li>
          Insira o número do processo mencionado na solicitação e envie o
          relatório
        </li>
        <li>Em instantes, o relatório será enviado por e-mail</li>
        <li>
          Abra a planilha e verifique:
          <ul>
            <li>Data de envio</li>
            <li>ID da empresa</li>
            <li>ID de envio</li>
          </ul>
        </li>
      </ol>

      <p>
        Se as informações constarem na planilha, significa que o processo foi
        disponibilizado corretamente ao cliente.
      </p>
      <p>
        Caso a planilha retorne vazia, o processo não foi disponibilizado e será
        necessário analisar a correspondência das partes e variações de nome.
      </p>

      {/* ===================== */}
      {/* Cenário 2 */}
      {/* ===================== */}
      <h2>Cenário 2 — Análise de correspondência (match)</h2>

      <p>
        No OP, pesquise pelo <strong>ID da empresa</strong> para identificar os
        termos cadastrados em monitoramento.
      </p>

      <h3>Passo a passo</h3>
      <ol>
        <li>Acesse a aba <strong>“Partes Monitoradas”</strong></li>
        <li>Filtre a empresa pelo ID</li>
        <li>
          As partes cadastradas serão exibidas na tela
        </li>
        <li>
          Para receber as informações por e-mail, clique no ícone de
          “hambúrguer” (três linhas) e selecione{" "}
          <strong>“Enviar e-mail com todos os dados”</strong>
        </li>
      </ol>

      <h3>Caso a parte não esteja cadastrada</h3>
      <ul>
        <li>Busque pelo termo mais próximo do nome da parte</li>
        <li>
          Utilize expressões regulares para capturar variações de nome ou erros
          de digitação
        </li>
      </ul>

      <h3>Uso do Pythex para validar regex</h3>
      <ol>
        <li>
          Cole o texto da parte no campo <strong>“Test String”</strong>
        </li>
        <li>
          Insira a expressão regular no campo{" "}
          <strong>“Regular Expression”</strong>
        </li>
        <li>
          Verifique se o Pythex destaca corretamente os trechos que deram match
        </li>
      </ol>

      {/* ===================== */}
      {/* Cenário 3 */}
      {/* ===================== */}
      <h2>Cenário 3 — Cadastro de usuários</h2>

      <p>Para cadastrar novos usuários, são necessárias duas informações:</p>
      <ul>
        <li>ID da empresa</li>
        <li>E-mail do novo usuário</li>
      </ul>

      <h3>Passo a passo</h3>
      <ol>
        <li>No OP, acesse a aba <strong>“Usuários”</strong></li>
        <li>Clique em <strong>“Novo Usuário”</strong></li>
        <li>
          Preencha os campos <strong>Empresa</strong>, <strong>Nome</strong> e{" "}
          <strong>E-mail</strong>
        </li>
        <li>Finalize o cadastro</li>
      </ol>

      {/* ===================== */}
      {/* Cenário 4 */}
      {/* ===================== */}
      <h2>Cenário 4 — Cadastramento de monitoramento de processos</h2>

      <p>
        Para cadastrar monitoramentos, será necessário o{" "}
        <strong>ID da empresa</strong>.
      </p>

      <h3>Passo a passo</h3>
      <ol>
        <li>
          Cadastre-se como usuário na empresa, se ainda não existir usuário
        </li>
        <li>
          Ao entrar na página da empresa, realize o cadastro do seu usuário
        </li>
        <li>
          Insira ID da empresa, nome e e-mail (antes do @ o e-mail deve conter
          <strong> +suporte</strong>)
        </li>
        <li>Abra o OP em uma guia anônima</li>
        <li>
          Acesse a conta criada e vá em{" "}
          <strong>Meus Processos → Monitorar em massa</strong>
        </li>
        <li>
          Insira os números dos processos e marque a opção de inclusão de
          diários
        </li>
        <li>Envie o monitoramento</li>
        <li>
          Tire um print da tela e anexe como comentário interno no ticket
        </li>
      </ol>

      {/* ===================== */}
      {/* Cenário 5 */}
      {/* ===================== */}
      <h2>Cenário 5 — Análise de processos monitorados</h2>

      <h3>Passo a passo</h3>
      <ol>
        <li>Acesse <strong>“Processos monitorados”</strong> no OP</li>
        <li>Busque pelo número do processo</li>
        <li>
          Clique no ID do processo para visualizar todas as informações do
          cadastramento
        </li>
      </ol>

      {/* ===================== */}
      {/* Cenário 6 */}
      {/* ===================== */}
      <h2>
        Cenário 6 — Limite de relatórios atingido ao incluir novos casos
      </h2>

      <p>
        <strong>Situação:</strong> Cliente não consegue inserir novos casos e a
        plataforma exibe a mensagem:
      </p>
      <p>
        <em>
          “Limite de relatórios de processos conhecidos foi atingido.”
        </em>
      </p>

      <h3>Solução</h3>
      <ol>
        <li>Localize a empresa</li>
        <li>
          Acesse <strong>“Limites de relatórios de processos CNJ”</strong>
        </li>
        <li>Ajuste o limite para <strong>500</strong></li>
        <li>
          Solicite que o cliente realize um novo teste
        </li>
      </ol>

      <p>
        <strong>Observação:</strong> caso o problema persista, registre o
        comportamento e encaminhe para o time técnico.
      </p>

      {/* ===================== */}
      {/* Cenário 7 */}
      {/* ===================== */}
      <h2>Cenário 7 — Reativação de monitoramento em massa</h2>

      <p>
        <strong>Situação:</strong> Cliente envia listagem de termos inativos para
        reativação.
      </p>

      <h3>Passo a passo</h3>
      <ol>
        <li>Acesse o script de reativação</li>
        <li>
          Insira o arquivo <strong>.txt</strong> na pasta{" "}
          <strong>sample_data</strong>
        </li>
        <li>Copie o caminho do arquivo e cole em <code>file_path</code></li>
        <li>Altere o token para a chave do cliente</li>
        <li>Execute o script</li>
      </ol>

      <p>
        <strong>Status:</strong> Sucesso.
      </p>

      {/* ===================== */}
      {/* Cenário 8 */}
      {/* ===================== */}
      <h2>Cenário 8 — Query monitored_event</h2>

      <p>
        Consulta utilizada para auxiliar na análise de eventos enviados ao
        cliente.
      </p>
    </>
  );
}
