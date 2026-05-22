export const studyContent = [
  {
    id: "api-jusbrasil-solucoes",
    title: "API Jusbrasil Soluções",
    bullets: [
      "A autenticação da API é feita por API Key enviada no header Authorization. O token é único e permanece válido até ser regenerado.",
      "Quando necessário, a autenticação também pode ser feita em formato Basic, utilizando o token em Base64.",
      "Os dados retornados nem sempre são em tempo real. A resposta pode vir da base já coletada ou ser atualizada sob demanda no tribunal, dependendo do endpoint e do módulo contratado.",
      "Retornos vazios, incompletos ou com timeout geralmente estão ligados a indisponibilidade dos tribunais, processos sigilosos ou lentidão em consultas mais pesadas.",
      "O monitoramento permite acompanhar processos por CNJ, com envio automático de capa e movimentações, incluindo histórico recente por padrão.",
      "Os anexos podem trazer ID, link temporário de download e relação com movimentações. Sua exibição depende de parâmetros da requisição.",
      "Erros comuns indicam: falha de autenticação (401/403), recurso não encontrado (404), excesso de requisições (429) ou instabilidade/tempo de resposta elevado (timeout).",
    ],
    validator: {
      buttonLabel: "Concluir conteúdo de API",
      message: "Confirme a leitura do conteúdo de API Jusbrasil Soluções para avançar.",
    },
  },
  {
    id: "op",
    title: "OP",
    bullets: [
      "A gestão de usuários depende de permissões administrativas, permitindo criar novos acessos e definir perfis diretamente na área de Cadastro de Usuários.",
      "Somente um usuário que já possui perfil de administrador pode promover outro usuário ao nível de administração. Usuários comuns não têm acesso a essa funcionalidade. Essa promoção é feita dentro do menu de Cadastro de Usuários, onde o administrador acessa o perfil do usuário desejado e altera o nível de permissão.",
      "O monitoramento de partes permite acompanhar distribuições com base em nome, regex, polos e tribunais configurados.",
      "Para cadastrar uma lista grande de termos de uma só vez, o usuário deve acessar a funcionalidade Monitorar em massa, disponível dentro do módulo de Monitoramento de Partes. Nela, é possível importar uma lista de nomes ou termos de uma vez e, depois de salva, cada entrada pode ser editada individualmente para ajustar configurações como tribunais, polos e tags.",
      "Monitoramentos podem ser editados, desativados ou exportados em relatórios enviados por e-mail.",
      "O sistema também permite monitorar palavras em diários oficiais e acompanhar processos completos com configuração de tribunais e instâncias.",
      "Falhas no recebimento de distribuições ou andamentos geralmente estão relacionadas a configuração incorreta, data de cadastro ou status do monitoramento.",
    ],
    validator: {
      buttonLabel: "Concluir conteúdo de OP",
      message: "Confirme a leitura do conteúdo de OP para avançar.",
    },
  },
  {
    id: "gestao-avancada-processos",
    title: "Gestão Avançada de Processos",
    bullets: [
      "O monitoramento de distribuições permite ajustes contínuos, como edição de termos, tags e centros de custo para melhor organização.",
      "O acompanhamento de processos pode ser feito individualmente ou em lote por CNJ, incluindo dados de tribunais e diários oficiais.",
      "A organização dos processos pode ser enriquecida com tags e centros de custo, desde que corretamente adicionados no cadastro.",
      "Faturas e cobranças ficam disponíveis para consulta na plataforma, enquanto boletos e notas fiscais são enviados por e-mail.",
      "As cobranças são calculadas com base no uso mensal e faturadas no mês seguinte.",
      "Problemas com notificações geralmente envolvem filtros de e-mail, segredo de justiça ou inconsistência entre data de cadastro e distribuição.",
    ],
    validator: {
      buttonLabel: "Concluir conteúdo de Gestão Avançada",
      message: "Confirme a leitura do conteúdo de Gestão Avançada de Processos para avançar.",
    },
  },
  {
    id: "hub-de-solucoes",
    title: "Hub de Soluções",
    bullets: [
      "O Hub centraliza as principais soluções do Jusbrasil, incluindo Pesquisa Jurídica, Jus IA, Gestão de Processos e Relatórios Avançados.",
      "A Pesquisa Jurídica oferece acesso a um amplo acervo jurídico para consultas rápidas e aprofundadas.",
      "O Jus IA é um assistente de inteligência artificial integrado à plataforma, voltado para tarefas jurídicas como produção de peças, revisão de documentos, resumo de processos e análise de contratos. Ele foi desenvolvido para uso profissional no contexto jurídico e opera com base nos dados e documentos fornecidos pelo próprio usuário durante a sessão.",
      "As soluções permitem organização da carteira processual e geração de relatórios personalizados.",
      "Os dados inseridos e processados pelos clientes dentro da plataforma não são utilizados para treinar modelos de inteligência artificial externos. Isso significa que documentos, consultas e informações dos processos permanecem restritos ao uso da conta do cliente, sem qualquer compartilhamento com terceiros ou uso para aprimoramento de modelos fora do ambiente contratado. Esse é um ponto importante para clientes que questionam sobre privacidade e conformidade com a LGPD.",
    ],
    validator: {
      buttonLabel: "Concluir conteúdo do Hub",
      message: "Confirme a leitura do conteúdo de Hub de Soluções para avançar.",
    },
  },
  {
    id: "relatorios-avancados",
    title: "Relatórios Avançados",
    bullets: [
      "Cada linha do relatório representa uma instância do processo, por isso um mesmo CNJ pode aparecer mais de uma vez.",
      "A cobrança considera apenas os processos efetivamente atualizados, e não a quantidade de linhas exibidas.",
      "O valor apresentado inicialmente é uma estimativa máxima, sendo ajustado conforme os resultados reais da atualização.",
      "Relatórios podem levar até 72 horas e, caso incompletos, destacam os processos não atualizados em aba específica.",
      "Os dados incluem informações completas do processo, como partes, movimentações, audiências e classificadores.",
      "Os classificadores são baseados em análise textual das movimentações e possuem alta taxa de assertividade.",
    ],
    validator: {
      buttonLabel: "Concluir conteúdo de Relatórios",
      message: "Confirme a leitura do conteúdo de Relatórios Avançados para avançar.",
    },
  },
  {
    id: "procon",
    title: "Procon",
    bullets: [
      "A API Procon centraliza dados de diferentes sistemas estaduais, permitindo acesso padronizado a informações de CIPs e reclamações.",
      "Ela é utilizada por equipes jurídicas, atendimento ao consumidor e sistemas integrados como ERPs e CRMs.",
      "A autenticação é feita via Bearer Token e controla o acesso aos recursos da API.",
      "A estrutura da API Procon é organizada em três elementos principais. A Company representa uma empresa com CNPJ cadastrado, que é associada às credenciais de acesso, ou seja, é o cliente final que será vinculado às reclamações coletadas. A fonte representa o sistema de Procon de um estado específico de onde os dados são coletados. A credencial é o conjunto de login e senha utilizado pelo robô para acessar aquela fonte e realizar a coleta automatizada em nome da empresa.",
      "Robôs automatizados realizam coletas periódicas, inclusive fora do horário comercial.",
      "Por padrão, a API foca em CIPs, podendo incluir reclamações mediante configuração com o suporte.",
    ],
    validator: {
      buttonLabel: "Concluir conteúdo de Procon",
      message: "Confirme a leitura do conteúdo de Procon para avançar.",
    },
  },
  {
    id: "intimacoes",
    title: "Intimações",
    bullets: [
      "A API de Intimações automatiza a coleta de publicações judiciais como intimações, notificações e audiências.",
      "Permite integrar dados detalhados aos sistemas jurídicos, facilitando o acompanhamento processual.",
      "Contas representam acessos aos tribunais, enquanto perfis organizam notificações por representado.",
      "A API oferece consultas filtradas por período, processo e conta, além de endpoints específicos para audiências.",
      "A integração pode ser síncrona ou via webhooks, permitindo atualização automática.",
      "Alguns tribunais exigem autenticação adicional, como certificado digital ou MFA.",
    ],
    validator: {
      buttonLabel: "Concluir conteúdo de Intimações",
      message: "Confirme a leitura do conteúdo de Intimações para avançar.",
    },
  },
  {
    id: "pesquisa-juridica",
    title: "Pesquisa Jurídica",
    bullets: [
     "A Pesquisa Jurídica oferece acesso a um amplo acervo jurídico, incluindo jurisprudências, legislações, doutrinas e modelos de peças, permitindo que advogados e equipes jurídicas realizem consultas rápidas e aprofundadas diretamente pela plataforma.",
     "O acesso é feito por meio de um link enviado ao e-mail cadastrado. Caso o link não seja recebido, o usuário deve verificar as pastas de spam, promoções e outras abas da caixa de entrada antes de acionar o suporte.",
     "É importante confirmar se o endereço de e-mail informado está correto e se não há bloqueios aplicados pelo time de TI da empresa do cliente, pois alguns domínios corporativos filtram e-mails automatizados.",
     "Pode haver um pequeno atraso na entrega do link, especialmente em horários de maior volume. Aguardar alguns minutos e tentar reenviar pelo portal costuma resolver. Se o problema persistir após essas tentativas, o caso deve ser escalado ao suporte interno.", 
    ],
    validator: {
      buttonLabel: "Concluir conteúdo de Pesquisa Jurídica",
      message: "Confirme a leitura do conteúdo de Pesquisa Jurídica para avançar.",
    },
  },
  {
    id: "background-check",
    title: "Background Check",
    bullets: [
      "O Background Check realiza associação entre nome e CPF com alta probabilidade de acerto, baseada em análise de múltiplas fontes.",
      "Em alguns casos, podem ocorrer associações com menor confiança devido a limitações de dados ou inconsistências nas fontes.",
      "Existe limite de processos por CPF, organizados principalmente pela data de distribuição.",
      "O Background Check permite realizar consultas por CPF, CNPJ ou número do processo judicial. A cobrança é feita por volume de consultas realizadas, sem diferenciação entre o tipo de identificador utilizado, uma consulta por CPF tem o mesmo custo que uma consulta por CNPJ ou número de processo.",
      "Consultas repetidas no mesmo dia não geram nova cobrança.",
      "Os dados exibidos refletem o que foi coletado até o momento, podendo ser atualizados sob demanda.",
      "A validação de homônimos pode exigir análise complementar via suporte.",
    ],
    validator: {
      buttonLabel: "Concluir conteúdo de Background Check",
      message: "Confirme a leitura do conteúdo de Background Check para finalizar a trilha.",
    },
  },
];