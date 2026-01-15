export default function FaqRA() {
  return (
    <>
      <h1>FAQ – Relatórios Avançados</h1>

      <h3>
        Enviei 1.000 números de processos, mas o relatório retornou com 1.500
        linhas na aba de processos. Por que isso acontece?
      </h3>
      <p>
        Isso ocorre porque cada linha do relatório representa uma instância de um
        processo. Um mesmo número de processo CNJ pode estar representado em mais
        de uma linha na aba <strong>Processos</strong>.
      </p>
      <p>
        É importante destacar que o cliente paga pela quantidade de processos
        efetivamente atualizados, e não pela quantidade de linhas do relatório.
      </p>

      <h3>
        O cliente pagará pelos processos que constam na aba “Desatualizados”?
      </h3>
      <p>
        Não. O cliente será cobrado apenas pelos processos atualizados.
      </p>
      <p>
        No momento da encomenda do relatório, o valor apresentado no checkout é
        apenas uma estimativa (preço máximo). Após a execução, o sistema verifica
        quais processos foram efetivamente atualizados e apenas esses são
        bilhetados.
      </p>

      <h3>
        O crédito da mensalidade acumula para outros meses ou expira?
      </h3>
      <p>
        No modelo atual, o crédito não utilizado não acumula para o mês seguinte.
      </p>

      <h3>
        É possível atualizar um relatório antigo adicionando novos processos?
      </h3>
      <p>
        Atualmente, não é possível aplicar essa lógica dentro do mesmo relatório,
        pois não é permitido adicionar novos CNJs a um relatório já criado.
      </p>
      <p>
        Nesse cenário, o cliente deve:
      </p>
      <ul>
        <li>
          Atualizar os processos do relatório original (pagando valor de
          atualização)
        </li>
        <li>
          Criar um novo relatório com os novos processos (pagando o valor de nova
          consulta)
        </li>
      </ul>

      <h3>
        Em quanto tempo, em média, a geração de um relatório é finalizada?
      </h3>
      <p>
        O prazo máximo é de até <strong>72 horas</strong>.
      </p>
      <p>
        Caso esse tempo seja atingido, o relatório é enviado com os processos que
        foram atualizados até o momento, indicando em uma aba específica quais
        processos não foram atualizados.
      </p>

      <h3>O que significa a aba “Desatualizados” no relatório?</h3>
      <p>
        A aba <strong>Desatualizados</strong> representa os processos que não
        puderam ser atualizados dentro do prazo de até 72 horas.
      </p>
      <p>
        Os motivos podem incluir:
      </p>
      <ul>
        <li>Indisponibilidade do site do tribunal</li>
        <li>Alterações na fonte ainda não ajustadas nos robôs</li>
        <li>Erros nos robôs de coleta</li>
        <li>Outros fatores externos</li>
      </ul>

      <h3>Quais campos são enviados nos relatórios?</h3>

      <h4>Dados de capa</h4>
      <ul>
        <li>Número do processo</li>
        <li>Instância</li>
        <li>Processo principal</li>
        <li>Partes (autor e reclamada)</li>
        <li>Advogados das partes (nome, OAB e UF)</li>
        <li>Juiz ou relator</li>
        <li>Área</li>
        <li>Data e tipo de distribuição</li>
        <li>Processo digital</li>
        <li>Tribunal</li>
        <li>Sistema</li>
        <li>Vara</li>
        <li>Órgão julgador</li>
        <li>Comarca e Foro CNJ</li>
        <li>UF</li>
        <li>Valor da causa</li>
        <li>Assunto</li>
        <li>Natureza</li>
        <li>Data, local e tipo de audiência</li>
        <li>Total de movimentações</li>
        <li>10 últimas movimentações</li>
        <li>Situação</li>
      </ul>

      <h4>Classificadores</h4>
      <ul>
        <li>Acordo</li>
        <li>Apreensão</li>
        <li>Arquivamento</li>
        <li>Arresto</li>
        <li>Citação</li>
        <li>Cumprimento de sentença</li>
        <li>Embargos de terceiros</li>
        <li>Expropriação</li>
        <li>Extinto</li>
        <li>Extinto – Indício Art. 794</li>
        <li>Homologada desistência</li>
        <li>Liminar deferida</li>
        <li>Liminar indeferida</li>
        <li>Justiça gratuita</li>
        <li>Emenda inicial</li>
        <li>Penhora</li>
        <li>Recurso</li>
        <li>Revelia</li>
        <li>Sentença</li>
        <li>Suspenso</li>
        <li>Título executado</li>
        <li>Trânsito em julgado</li>
      </ul>

      <h3>
        Por que há processos repetidos (com o mesmo número) no relatório?
      </h3>
      <p>
        Isso acontece porque cada instância do processo é tratada como uma linha
        distinta, tanto na plataforma quanto no arquivo XLSX gerado.
      </p>

      <h3>Como são obtidos os classificadores?</h3>
      <p>
        Os classificadores são obtidos por meio da aplicação de expressões
        regulares (regex) nos textos das movimentações dos processos, buscando
        identificar palavras-chave que indiquem eventos como citação, decisão,
        arquivamento, entre outros.
      </p>

      <h3>Qual a assertividade dos classificadores?</h3>
      <p>
        A assertividade varia conforme o classificador, ficando entre{" "}
        <strong>70% e 99%</strong>. Em caso de dúvidas sobre um classificador
        específico, recomenda-se contatar o suporte ou o gerente de atendimento
        da conta.
      </p>

      <h3>Vocês buscam informações nos anexos dos processos?</h3>
      <p>
        Atualmente, não. Todos os classificadores se baseiam apenas nos textos
        das movimentações dos processos.
      </p>
      <p>
        Entretanto, está no planejamento do time desenvolver novos
        classificadores baseados no texto de determinados tipos de anexos.
      </p>

      <h3>
        É possível filtrar partes do processo por polo antes de encomendar o
        relatório?
      </h3>
      <p>
        Sim. Tanto na consulta por nome quanto por documento (CPF ou CNPJ), é
        possível indicar em qual polo o nome ou documento deve figurar.
      </p>
      <p>
        Os polos disponíveis atualmente são:
      </p>
      <ul>
        <li>Polo ativo</li>
        <li>Polo passivo</li>
        <li>Advogado</li>
        <li>Juiz</li>
        <li>Outros</li>
      </ul>
    </>
  );
}
