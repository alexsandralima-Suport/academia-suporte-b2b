export default function FaqBackgroundCheckCPRO() {
  const styles = {
    container: { maxWidth: "100%", margin: "0 auto" },
    section: { marginBottom: "40px" },
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
    code: {
      backgroundColor: "#f5f5f5",
      padding: "3px 8px",
      borderRadius: "3px",
      fontFamily: "monospace",
      fontSize: "14px",
      color: "#004033",
    },
    linkHighlight: {
      fontWeight: "600",
      color: "#004033",
      textDecoration: "underline",
    },
    divider: {
      margin: "40px 0",
      borderTop: "2px dashed #ccc",
    },
  };

  return (
    <div style={styles.container}>
      <h1>FAQ – Background Check (CPRO)</h1>

      <section style={styles.section}>
        <h2>O que significa um nome com baixa probabilidade de associação?</h2>
        <p>
          A associação entre nome e CPF realizada pelo ConsultaPRO possui, em média,
          86% de alta probabilidade de acerto. Isso significa que, na maior parte dos
          casos, conseguimos relacionar corretamente a pessoa ao documento informado.
        </p>
        <p>
          Antes de realizar qualquer associação, fazemos uma leitura inteligente de um
          grande volume de informações, sempre de forma legal e responsável.
        </p>
        <p>
          Em alguns cenários específicos, como variações nos dados fornecidos pelo tribunal
          ou limitações tecnológicas da fonte, pode ocorrer a exibição de registros com
          baixa probabilidade de associação.
        </p>
      </section>

      

      <section style={styles.section}>
        <h2>Existe um limite de 100 processos por CPF. Como funciona essa classificação?</h2>
        <p>
          Cada tipo de consulta (<strong>Criminal</strong>, <strong>Cível</strong> e{" "}
          <strong>Trabalhista</strong>) retorna até 100 processos por endpoint,
          ordenados pelos de movimentação mais recente primeiro.
        </p>
        <p>
          Como são endpoints independentes, uma consulta completa pode retornar até
          <strong> 300 processos no total</strong>.
        </p>
      </section>

     

      <section style={styles.section}>
        <h2>Sou cliente do CPRO e também do Jusbrasil. Posso usar o mesmo e-mail?</h2>
        <p>
          Sim. Para isso, basta alterar o e-mail diretamente nas configurações da sua
          conta Jusbrasil, acessando:
        </p>
        <p>
          <a
            href="https://www.jusbrasil.com.br/configuracoes"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.linkHighlight}
          >
            https://www.jusbrasil.com.br/configuracoes
          </a>
        </p>
      </section>


      <section style={styles.section}>
        <h2>Somos cobrados mais de uma vez pela consulta do mesmo CPF?</h2>
        <p>
          Não. A cobrança no Background Check respeita uma janela de{" "}
          <strong>96 horas</strong>: o mesmo CPF ou CNPJ consultado dentro desse período
          é cobrado apenas uma vez, independentemente de quantas vezes for consultado
          ou de qual canal for utilizado.
        </p>
        <p>
          Uma consulta feita via API e depois via interface dentro desse intervalo
          conta como uma única cobrança.
        </p>
      </section>


      <section style={styles.section}>
        <h2>Os documentos exibidos correspondem a todos os autos do processo?</h2>
        <p>
          Os documentos exibidos são todos aqueles que foram coletados até o momento.
        </p>
        <p>
          Caso deseje verificar se há novos documentos disponíveis, basta clicar em{" "}
          <strong>“Atualizar processo”</strong> para tentar uma nova coleta junto ao tribunal.
        </p>
      </section>


      <section style={styles.section}>
        <h2>Por que alguns processos não exibem status?</h2>
        <p>Nem todos os processos possuem status disponível porque:</p>
        <ul>
          <li>Nem todos estão atualizados nos tribunais de origem;</li>
          <li>
            Exibimos apenas as informações que o tribunal disponibilizou explicitamente
            na última coleta;
          </li>
          <li>Não utilizamos classificadores automáticos de status.</li>
        </ul>
      </section>


      <section style={styles.section}>
        <h2>É possível realizar consulta por nome?</h2>
        <p>
          Não. Atualmente, o ConsultaPRO permite consultas exclusivamente por
          <strong> CPF</strong>, <strong>CNPJ</strong> ou <strong>número do processo</strong>.
        </p>
      </section>


      <section style={styles.section}>
        <h2>Como posso validar um homônimo?</h2>
        <p>
          A confiança do processo ajuda a identificar um homônimo. Caso ainda existam
          dúvidas, o caso pode ser direcionado para:
        </p>
        <p>
          <a
            href="mailto:suportesolucoes@jusbrasil.com.br"
            style={styles.linkHighlight}
          >
            suportesolucoes@jusbrasil.com.br
          </a>
        </p>
        <p>Informações que devem ser enviadas:</p>
        <ul>
           <li>Nome completo</li>
          <li>CPF</li>
          <li>Nome da mãe</li>
          <li>Data de nascimento</li>
          <li>Número do processo em que há suspeita de homônimo</li>
        </ul>
      </section>


      <section style={styles.section}>
        <h2>Consultas sem resultado são cobradas?</h2>
        <p>
          Sim. Uma consulta que retorna nenhum processo encontrado é cobrada normalmente.
        </p>
        <p>
          O motivo é que confirmar que um CPF ou CNPJ não possui histórico judicial é,
          por si só, uma informação relevante para a decisão de risco, e isso exige que
          a busca seja realizada na base.
        </p>
      </section>

      <section style={styles.section}>
        <h2>Quais os tipos de processos cobertos?</h2>
        <p>
          Criminal, Cível, Trabalhista, MP, BNMP e Empregador irregular.
        </p>
      </section>


      <section style={styles.section}>
        <h2>Processos em segredo de justiça são exibidos?</h2>
        <p>
          Não. Em nenhuma hipótese. Processos em segredo de justiça não são exibidos
          na API nem na interface, e também não indicamos que o processo existe.
        </p>
        <p>
          Se um processo era público e posteriormente entrou em segredo, ele deixa de
          ser exibido assim que a mudança é detectada.
        </p>
        <p>
          Se estava em segredo e voltou a ser público, pode ser reexibido com eventual
          atraso dependendo da fonte.
        </p>
      </section>


      <section style={styles.section}>
        <h2>Posso usar o Background Check para decisões de contratação de pessoas (RH)?</h2>
        <p>
          Depende do tipo de processo e da função a ser exercida:
        </p>
        <ul>
          <li>
            <strong>Criminal e Cível:</strong> sim, dependendo da finalidade da função
            e conforme o guia de boas práticas do Background Check.
          </li>
          <li>
            <strong>Trabalhista:</strong> não. O uso de dados trabalhistas para fins
            de contratação é vedado pelo risco de discriminação.
          </li>
        </ul>

        <div style={styles.warning}>
          Casos de uso fora do padrão devem ser avaliados em conjunto com o time de
          suporte e jurídico antes da implementação.
        </div>
      </section>


      <section style={styles.section}>
        <h2>O produto é compatível com a LGPD?</h2>
        <p>
          Sim. O Background Check trata exclusivamente dados processuais públicos.
          Processos judiciais são informação pública por princípio constitucional;
          a publicidade dos atos processuais está prevista na Constituição Federal e no CPC.
        </p>
        <p>
          Processos em segredo de justiça não são indexados.
        </p>
        <p>
          A Jus Soluções possui certificação <strong>ISO 27001</strong> e programa de
          LGPD formalizado.
        </p>
      </section>


      <section style={styles.section}>
        <h2>Qual o tempo de resposta da API?</h2>
        <p>
          O tempo médio de resposta é de aproximadamente <strong>200ms</strong> por consulta.
        </p>
        <p>
          Na prática, o tempo varia conforme o volume de processos do documento consultado:
        </p>
        <ul>
          <li>CPFs com poucos processos respondem em torno de 37ms;</li>
          <li>CPFs com muitos processos podem levar até 243ms.</li>
        </ul>
        <p>
          A API suporta até <strong>200 requisições por segundo</strong>.
          Limites específicos podem variar por contrato.
        </p>
      </section>


      <section style={styles.section}>
        <h2>É possível testar antes de contratar?</h2>
        <p>
          Sim. Disponibilizamos um <strong>trial com 30 consultas gratuitas</strong>
          para avaliação da qualidade dos dados e do nível de confiança antes da contratação.
        </p>
        <p>
          Para avaliações mais aprofundadas, também é possível realizar uma{" "}
          <strong>POC</strong> com um volume maior de CPFs para comparação com o fornecedor atual.
        </p>
      </section>

      <footer style={{ marginTop: "60px", fontSize: "12px", color: "#666" }}>
        Documento interno – FAQ Background Check (CPRO)
      </footer>
    </div>
  );
}