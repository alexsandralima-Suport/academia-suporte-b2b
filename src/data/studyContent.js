export const studyContent = [
  {
    id: "4biz",
    title: "4BIZ - Visão geral",
    bullets: [
      "Planos corporativos são para organizações com 5+ acessos.",
      "Classificação de porte: Small (5–15), Mid (16–30), Big (30+).",
      "Contrato: 1 ou 2 anos; cobrança mensal/anual/bianual.",
    ],
  },
  {
    id: "cpro",
    title: "CPRO - Fluxo de análise (Tuxedo)",
    bullets: [
      "Cenário ‘Dados Insuficientes’: validar o campo updatedAt para quando o CPF foi vinculado.",
      "Divergência: validar documentos e evidências; abrir thread no canal apropriado se necessário.",
      "Homônimos: comparar CPF, data de nascimento e nome da mãe.",
    ],
  },
  {
    id: "api",
    title: "API Jusbrasil Soluções - Conceitos essenciais",
    bullets: [
      "Autenticação via API Key (token) no header Authorization.",
      "Nem todo dado é ‘tempo real’: depende do endpoint e módulo.",
      "Erros comuns: 401/403, 404, 429 e timeout (instabilidade/limites).",
    ],
  },
  {
    id: "op-ip",
    title: "OP / Digesto IP - Pontos rápidos",
    bullets: [
      "OP: perfil admin permite cadastrar usuários e alterar permissões (Administrar: empresa).",
      "OP: monitorar em massa permite cadastrar lista de termos em lote.",
      "IP: editar termo em Monitoramento → Distribuições.",
      "IP: Cobranças ficam em Outros → Cobranças; boletos/NF chegam por e-mail.",
      "IP: ao adicionar tag, digitar e clicar no botão + para salvar.",
    ],
  },
];