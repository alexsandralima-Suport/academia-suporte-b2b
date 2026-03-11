export default function PlaybookOP() {
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
      display: "inline-block",
      marginTop: "6px",
    },
    codeBlock: {
      backgroundColor: "#f5f5f5",
      padding: "12px 14px",
      borderRadius: "6px",
      fontFamily: "monospace",
      fontSize: "14px",
      color: "#004033",
      overflowX: "auto",
      margin: "12px 0",
      whiteSpace: "pre-wrap",
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
    linkHighlight: {
      fontWeight: "600",
      color: "#004033",
      textDecoration: "underline",
    },
  };

  return (
    <div style={styles.container}>
      <h1>Entendendo o OP</h1>

      {/* O QUE É */}
      <section style={styles.section}>
        <h2>O que é?</h2>
        <p>
          O Sistema <strong>OP (Digesto Operações)</strong> é a frente da Digesto
          focada em dados estruturados e APIs jurídicas. Diferente do portal visual
          usado por muitos advogados para consulta de processos, o OP é uma
          infraestrutura mais técnica, voltada para automação em larga escala.
        </p>

        <h3>1. O que ele faz (Funcionalidades)</h3>
        <ul>
          <li>
            <strong>Monitoramento de Processos:</strong> acompanha automaticamente
            milhares de processos em todos os tribunais do Brasil.
          </li>
          <li>
            <strong>Leitura de Diários Oficiais:</strong> varre diários em busca de
            termos específicos ou nomes de partes/advogados.
          </li>
          <li>
            <strong>Distribuições Novas:</strong> detecta quando um novo processo é
            aberto contra uma empresa antes mesmo de haver citação formal.
          </li>
          <li>
            <strong>Extração de Dados:</strong> coleta valores de causa, nomes das
            partes, decisões e movimentos, entregando tudo em formato limpo (JSON).
          </li>
        </ul>

        <h3>2. Para quem serve?</h3>
        <ul>
          <li>Departamentos Jurídicos</li>
          <li>Escritórios de Advocacia Tech</li>
          <li>Softwares de Gestão Jurídica</li>
        </ul>
      </section>

      {/* COMO UTILIZAR */}
      <section style={styles.section}>
        <h2>Como utilizar?</h2>
        <p>
          Ao acessar o OP, na lateral esquerda ficam os menus com os módulos do sistema:
          Base judicial, Meus processos, Cadastros, Minhas partes, Diários oficiais,
          Relatório de processos por nome, Relatório de saneamento de base,
          Acompanhar processos, Monitorar distribuições, Certidões, Cobranças,
          Configurações e Administração.
        </p>

        <h3>Base judicial</h3>
        <p>
          Nesta seção é possível buscar processos, atualizar processos, emitir
          relatórios, verificar cobertura de tribunais/diários e extrair CNJ de texto.
        </p>
        <ul>
          <li>
            <strong>Buscar processos por número:</strong> consulta por número CNJ,
            retornando partes, distribuição, segredo de justiça, processos relacionados,
            andamentos e anexos.
          </li>
          <li>
            <strong>Buscar processos por parte:</strong> busca por nome da parte com
            filtros adicionais, como tribunal, data de distribuição e polo.
          </li>
          <li>
            <strong>Buscar partes em recuperação judicial:</strong> pesquisa processos
            de recuperação judicial vinculados ao nome pesquisado.
          </li>
          <li>
            <strong>Atualizar processos no tribunal:</strong> permite solicitar
            atualização de um ou vários processos.
          </li>
          <li>
            <strong>Pedidos para atualização no tribunal:</strong> exibe os pedidos
            realizados e o status da atualização.
          </li>
          <li>
            <strong>Relatórios de pedidos:</strong> permite visualizar relatórios
            emitidos e solicitar novos.
          </li>
          <li>
            <strong>Cobertura de tribunais:</strong> mostra o mapa de cobertura e
            manutenções dos tribunais.
          </li>
          <li>
            <strong>Cobertura de diários:</strong> mesma lógica, com foco em diários
            oficiais.
          </li>
          <li>
            <strong>Extrair CNJ de texto:</strong> valida e retorna o número CNJ com
            formatação correta.
          </li>
        </ul>

        <div style={styles.callout}>
          <strong>Atualizar processos no tribunal – parâmetros comuns:</strong>
          <ul>
            <li>Prioridade de 1 a 5</li>
            <li>Instância: 1ª, 2ª, 3ª ou 4ª</li>
            <li>Considerar apenas números CNJ válidos</li>
            <li>Atualizar processos de todos os anos</li>
            <li>Obter anexos logados</li>
            <li>Atualizar processos relacionados</li>
            <li>Forçar atualização geralmente com valor 0</li>
            <li>No nome do pedido, usar o número do ticket</li>
            <li>Credencial: normalmente Default</li>
          </ul>
        </div>

        <h3>Meus processos</h3>
        <ul>
          <li>
            <strong>Processos monitorados:</strong> lista de processos monitorados,
            com possibilidade de exportação e criação de novo monitoramento.
          </li>
          <li>
            <strong>Processos distribuídos:</strong> lista de processos distribuídos.
          </li>
          <li>
            <strong>Monitorar em massa:</strong> monitora até 100 processos por vez.
          </li>
          <li>
            <strong>Desmonitorar em massa:</strong> remove monitoramento em lote.
          </li>
        </ul>

        <h3>Cadastros</h3>
        <ul>
          <li>
            <strong>Novo cadastro:</strong> cadastro de intimação, ofício e citação.
          </li>
          <li>
            <strong>Cadastros:</strong> visualização e exportação dos cadastros já feitos.
          </li>
        </ul>

        <h3>Minhas partes</h3>
        <ul>
          <li>
            <strong>Partes monitoradas:</strong> lista com expressões regulares, polo,
            tribunais, dias retroativos e status do monitoramento.
          </li>
          <li>
            <strong>Monitorar em massa:</strong> cadastro em lote de nomes.
          </li>
        </ul>

        <h3>Diários oficiais</h3>
        <ul>
          <li>
            <strong>Palavras monitoradas:</strong> cadastro e gestão de termos monitorados.
          </li>
          <li>
            <strong>Minhas publicações:</strong> exibe as publicações capturadas.
          </li>
          <li>
            <strong>Buscar publicações judiciais:</strong> pesquisa publicações na base.
          </li>
          <li>
            <strong>Buscar Diário executivo:</strong> pesquisa diários executivos por
            data, fonte e texto.
          </li>
        </ul>

        <h3>Relatório por nome</h3>
        <p>
          Emite todos os processos da base com base no nome pesquisado, exibindo
          resumo prévio, estimativa de custo e filtros de refinamento.
        </p>

        <h3>Relatório de saneamento de base</h3>
        <p>
          Requer número do processo, mostra previsão de custo e permite atualização
          em primeira e segunda instância.
        </p>

        <h3>Acompanhar processos</h3>
        <p>Dashboard com a lista de processos monitorados.</p>

        <h3>Monitorar distribuições</h3>
        <p>Dashboard com a lista de processos distribuídos monitorados.</p>

        <h3>Cobrança</h3>
        <ul>
          <li><strong>Faturas:</strong> listagem de faturas e detalhes</li>
          <li><strong>Transações:</strong> detalhamento dos procedimentos cobrados</li>
          <li><strong>Minha assinatura:</strong> detalhes da assinatura</li>
        </ul>

        <h3>Configurações</h3>
        <ul>
          <li>
            <strong>Usuários:</strong> consulta, cadastro, edição de permissões e exportação.
          </li>
          <li>
            <strong>Empresas:</strong> consulta, cadastro e visualização de usuários,
            configurações gerais e módulos liberados.
          </li>
        </ul>
      </section>

      {/* FERRAMENTAS AUXILIARES */}
      <section style={styles.section}>
        <h2>Quais ferramentas auxiliares são utilizadas?</h2>
        <ul>
          <li>
            <strong>Acompanhamento de manutenções:</strong> histórico de manutenções
            nos tribunais onde a captura ocorre.
          </li>
          <li>
            <strong>Metabase ou Redash:</strong> execução de consultas na base de dados.
          </li>
          <li>
            <strong>Pythex:</strong> validação de expressão regular.
          </li>
          <li>
            <strong>Ferramenta de análise de distribuição:</strong> automação para
            apoiar casos de distribuição.
          </li>
        </ul>
      </section>

      <div style={styles.divider} />

      <h2>Exemplos de casos analisados</h2>

      {/* CASO 1 */}
      <section style={styles.section}>
        <h3>
          Validações que podem ser feitas quando o cliente relata que o processo não
          recebeu a distribuição
        </h3>

        <div style={styles.callout}>
          <strong>Sistema:</strong> OP <br />
          <strong>Funcionalidade:</strong> Monitoramento de parte <br />
          <strong>Visibilidade:</strong> Company confidential
        </div>

        <h4>Descrição</h4>
        <p>
          Cliente relata que o processo foi distribuído, mas não recebeu o evento
          da distribuição.
        </p>

        <h4>Solução</h4>
        <p>
          Primeiro, validar se houve ou não envio consultando a tabela{" "}
          <span style={styles.code}>monitored_event</span>.
        </p>

        <div style={styles.codeBlock}>
          {"select * from monitored_event where target_number = 'xxxxxxxxxxxxx'"}
        </div>

        <p>
          Se não houver registros no retorno, seguir com validações complementares:
        </p>
        <ul>
          <li>Cadastro da parte monitorada</li>
          <li>Data de criação da parte monitorada</li>
          <li>Data de distribuição do processo</li>
          <li>Expressão regular cadastrada</li>
          <li>Data de associação da parte no processo</li>
        </ul>

        <p>
          No OP, acessar <strong>Minhas partes → Parte monitorada</strong>, procurar
          pelo nome da parte e coletar os dados:
        </p>
        <ul>
          <li>“Criado em”</li>
          <li>“Expressão regular de busca”</li>
          <li>“Dias retroativos para distribuições”</li>
        </ul>

        <p>
          Em seguida, acessar os dados do processo pela URL:
        </p>

        <div style={styles.codeBlock}>
          {"https://op.digesto.com.br/#/tribproc/proc2/<numero-processo>?tipo_numero=8"}
        </div>

        <p>Coletar do processo as seguintes informações:</p>
        <ul>
          <li>Distribuição</li>
          <li>Instância</li>
          <li>Datas do campo “Associado em” no quadro de Partes</li>
        </ul>

        <h4>Validações finais</h4>
        <ul>
          <li>
            A data de cadastro da parte deve ser anterior à data de distribuição do processo.
          </li>
          <li>
            A expressão regular precisa dar match com o nome da parte associado ao processo.
          </li>
          <li>Se o processo foi distribuído em segunda instância, não haverá envio.</li>
          <li>
            Se a diferença entre “Associado em” e “Distribuição” for maior do que
            “Dias retroativos para distribuições”, a distribuição também não será enviada.
          </li>
        </ul>

        <div style={styles.warning}>
          Neste último cenário, é possível que manutenção ou indisponibilidade do
          tribunal tenha impactado a captura.
        </div>

        <h4>Causa</h4>
        <p></p>

        <h4>Artigos Sugeridos</h4>
        <p>Sugestão de artigos relacionados com o assunto - apague caso não seja utilizado</p>

        <h4>Documentos Relacionados</h4>
        <p>Relação de documentos referente ao assunto - apague caso não seja utilizado</p>
      </section>

      <div style={styles.divider} />

      {/* CASO 2 */}
      <section style={styles.section}>
        <h3>
          É possível limitar a quantidade de distribuições capturadas por mês em uma empresa filha?
        </h3>

        <div style={styles.callout}>
          <strong>Sistema:</strong> OP <br />
          <strong>Funcionalidade:</strong> Configurações de empresa <br />
          <strong>Visibilidade:</strong> Company confidential
        </div>

        <h4>Descrição</h4>
        <p>
          O cliente questiona se é possível limitar a quantidade de distribuições
          capturadas por mês em uma empresa filha.
        </p>

        <h4>Solução</h4>
        <p>
          Nas configurações da empresa (
          <strong>Configurações → Empresas → acessar a empresa</strong>), a configuração
          <strong> “Limite de distribuições por mês”</strong> só é efetiva para empresas
          que têm o <strong>Hub Soluções</strong> contratado.
        </p>

        <h4>Causa</h4>
        <p>Dúvida em configuração.</p>

        <h4>Artigos Sugeridos</h4>
        <p>Sugestão de artigos relacionados com o assunto - apague caso não seja utilizado</p>

        <h4>Documentos Relacionados</h4>
        <p>Relação de documentos referente ao assunto - apague caso não seja utilizado</p>
      </section>

      <footer style={{ marginTop: "60px", fontSize: "12px", color: "#666" }}>
        Documento interno – OP | Jusbrasil
      </footer>
    </div>
  );
}