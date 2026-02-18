export const questions = [
  // 1️⃣ 4BIZ
  {
    id: 1,
    question:
      "No 4BIZ, qual é o critério para classificar um cliente como 'Mid'?",
    options: [
      "De 5 a 15 logins",
      "De 16 a 30 logins",
      "Acima de 30 logins",
      "Qualquer cliente com contrato anual",
    ],
    answerIndex: 1,
  },

  // 2️⃣ CPRO
  {
    id: 2,
    question:
      "No CPRO, em caso de 'Dados Insuficientes', qual campo deve ser validado no Tuxedo para verificar quando o CPF foi vinculado ao processo?",
    options: [
      "createdAt",
      "updatedAt",
      "lastModified",
      "processStatus",
    ],
    answerIndex: 1,
  },

  // 3️⃣ API Jusbrasil Soluções
  {
    id: 3,
    question:
      "Qual é a forma padrão de autenticação utilizada na API Jusbrasil Soluções?",
    options: [
      "Login e senha via formulário",
      "Token de acesso (API Key) enviado no header Authorization",
      "OAuth via Google",
      "Certificado digital ICP-Brasil",
    ],
    answerIndex: 1,
  },

  // 4️⃣ OP (Orientações de Permissões)
  {
    id: 4,
    question:
      "No OP, como tornar um usuário administrador da empresa?",
    options: [
      "Solicitando diretamente ao suporte técnico",
      "Editando o perfil do usuário e marcando a permissão 'Administrar: empresa'",
      "Criando um novo login com domínio corporativo",
      "Ativando o monitoramento em massa",
    ],
    answerIndex: 1,
  },

  // 5️⃣ Relatórios Avançados (IP)
  {
    id: 5,
    question:
      "Ao adicionar uma tag ao monitorar um processo no IP, qual ação é obrigatória para que a tag seja salva?",
    options: [
      "Clicar em Salvar antes de acompanhar",
      "Selecionar o tribunal primeiro",
      "Digitar a tag e clicar no botão +",
      "Atualizar a página após inserir a tag",
    ],
    answerIndex: 2,
  },

  // 6️⃣ Hub Soluções
  {
    id: 6,
    question:
      "O Hub Soluções integra quais principais funcionalidades?",
    options: [
      "Apenas Pesquisa Jurídica",
      "Pesquisa Jurídica, Jus IA, Gestão de Processos e Relatórios Avançados",
      "Somente monitoramento de processos",
      "Apenas API e Consulta PRO",
    ],
    answerIndex: 1,
  },

  // 7️⃣ Procon
  {
    id: 7,
    question:
      "No módulo Procon, é possível realizar qual das ações abaixo?",
    options: [
      "Monitoramento de CIPs e reclamações",
      "Alteração de senha do usuário",
      "Cancelamento automático de contratos",
      "Migração de plano 4BIZ",
    ],
    answerIndex: 0,
  },

  // 8️⃣ Intimações
  {
    id: 8,
    question:
      "O módulo de Intimações é utilizado principalmente para:",
    options: [
      "Emitir boletos de cobrança",
      "Acompanhar comunicações oficiais e intimações judiciais",
      "Criar usuários administrativos",
      "Gerar token de API",
    ],
    answerIndex: 1,
  },
];
