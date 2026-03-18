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
      "Administradores podem ajustar permissões e promover usuários ao nível de administração, garantindo controle total sobre o ambiente.",
      "O monitoramento de partes permite acompanhar distribuições com base em nome, regex, polos e tribunais configurados.",
      "Também é possível cadastrar termos em massa e posteriormente refiná-los individualmente conforme necessário.",
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
      "O Jus IA atua como assistente inteligente para produção, revisão e análise de documentos jurídicos.",
      "As soluções permitem organização da carteira processual e geração de relatórios personalizados.",
      "Os dados dos clientes não são utilizados para treinamento de modelos externos.",
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
      "Empresas, fontes e credenciais são os principais elementos da estrutura, permitindo organizar o acesso e a coleta de dados.",
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
      "Caso o link de acesso não seja recebido, é importante verificar spam, promoções e outras abas do e-mail.",
      "Também é necessário confirmar se o endereço informado está correto e se não há bloqueios pelo time de TI.",
      "Pode haver atraso na entrega, então aguardar alguns minutos é recomendado.",
      "Se o problema persistir, o suporte deve ser acionado.",
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
      "A cobrança é feita por volume de consultas, sem diferenciação entre CPF e CNPJ.",
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