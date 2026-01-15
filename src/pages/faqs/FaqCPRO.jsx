export default function FaqCPRO() {
  return (
    <>
      <h1>FAQ – CPRO</h1>

      <h3>O que significa um nome com baixa probabilidade de associação?</h3>
      <p>
        A associação entre nome e CPF realizada pelo ConsultaPRO possui, em
        média, 86% de alta probabilidade de acerto. Isso significa que, na maior
        parte dos casos, conseguimos relacionar corretamente a pessoa ao
        documento informado.
      </p>
      <p>
        Antes de realizar qualquer associação, fazemos uma leitura inteligente
        de um grande volume de informações, sempre de forma legal e responsável.
        Em alguns cenários específicos, como variações nos dados fornecidos pelo
        tribunal ou limitações tecnológicas da fonte, pode ocorrer a exibição de
        registros com baixa probabilidade de associação.
      </p>

      <h3>
        Existe um limite de 100 processos por CPF. Como funciona essa
        classificação?
      </h3>
      <p>
        Os processos relacionados a um CPF são organizados prioritariamente pela
        data de distribuição do processo. Quando essa informação não está
        disponível, utilizamos como critério de ordenação a data da última
        atualização informada pelo tribunal.
      </p>

      <h3>
        Sou cliente do CPRO e também do Jusbrasil. Posso usar o mesmo e-mail?
      </h3>
      <p>
        Sim. Para isso, basta alterar o e-mail diretamente nas configurações da
        sua conta Jusbrasil, acessando:
      </p>
      <p>
        <a
          href="https://www.jusbrasil.com.br/configuracoes"
          target="_blank"
          rel="noreferrer"
        >
          https://www.jusbrasil.com.br/configuracoes
        </a>
      </p>

      <h3>
        Somos cobrados mais de uma vez pela consulta do mesmo CPF?
      </h3>
      <p>
        A cobrança no ConsultaPRO é feita de forma unitária, considerando apenas
        o número de chamadas realizadas, sem distinção entre CPF ou CNPJ
        pesquisados.
      </p>
      <p>
        Além disso, consultas repetidas do mesmo CPF realizadas no mesmo dia não
        são cobradas, garantindo um período de latência razoável para o usuário.
      </p>

      <h3>
        Os documentos exibidos correspondem a todos os autos do processo?
      </h3>
      <p>
        Os documentos exibidos são todos aqueles que foram coletados até o
        momento.
      </p>
      <p>
        Caso deseje verificar se há novos documentos disponíveis, basta clicar
        em <strong>“Atualizar processo”</strong> para tentar uma nova coleta junto
        ao tribunal.
      </p>

      <h3>Por que alguns processos não exibem status?</h3>
      <p>Nem todos os processos possuem status disponível porque:</p>
      <ul>
        <li>Nem todos estão atualizados nos tribunais de origem</li>
        <li>
          Exibimos apenas as informações que o tribunal disponibilizou
          explicitamente na última coleta
        </li>
        <li>Não utilizizamos classificadores automáticos de status</li>
      </ul>

      <h3>É possível realizar consulta por nome?</h3>
      <p>
        Não. Atualmente, o ConsultaPRO permite consultas exclusivamente por CPF,
        CNPJ ou número do processo.
      </p>

      <h3>Como posso validar um homônimo?</h3>
      <p>
        A confiança do processo ajuda a identificar um homônimo. Caso ainda
        existam dúvidas, o caso pode ser direcionado para{" "}
        <strong>suportesolucoes@jusbrasil.com.br</strong>, informando:
      </p>
      <ul>
        <li>Nome da mãe</li>
        <li>Data de nascimento</li>
        <li>Nome buscado</li>
        <li>CPF</li>
        <li>Número do processo em que há suspeita de homônimo</li>
      </ul>
    </>
  );
}
