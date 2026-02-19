🎓 Academia Suporte B2B — Jusbrasil Soluções

Portal interno de conhecimento do Suporte B2B, criado para centralizar FAQs, bases de conhecimento, playbooks, treinamentos e avaliação interna dos produtos Jusbrasil.

🚀 Objetivo do projeto

A Academia Suporte B2B foi criada para:

📚 Centralizar informações técnicas e operacionais

🎓 Facilitar o onboarding de novos analistas

🧠 Organizar FAQs por produto

🛠️ Padronizar processos internos

🎮 Avaliar conhecimento através de quiz

🏅 Emitir certificado interno de conhecimento

🎮 Módulo de Quiz e Certificação

A plataforma conta com um sistema de avaliação interna:

📌 Funcionalidades

Perguntas baseadas nas FAQs oficiais

Feedback imediato ao errar (mostra resposta correta)

Cálculo automático de aproveitamento

Exigência mínima de 70% de acertos

Emissão de certificado em PDF

Layout institucional com identidade visual da Jusbrasil Soluções

Selo oficial “Amigo(a) do Suporte B2B”

🏆 Certificado

Geração automática via jsPDF

Nome personalizado

Cores institucionais:

Verde: #004033

Fundo claro: #f0f3f7

Assinatura institucional:

Suporte B2B Jusbrasil Soluções

🧱 Tecnologias utilizadas

⚛️ React

⚡ Vite

🔀 React Router DOM

📄 jsPDF (geração do certificado)

🎨 CSS / estilos inline

🔐 PasswordGate (controle de acesso interno)

☁️ Deploy: Vercel

academia-suporte-b2b/
│
├── 📁 public/
│   └── 📁 img/
│       ├── icon_api.png
│       ├── icon_ip.png
│       ├── icon_op.png
│       ├── icon_4biz.png
│       ├── icon_cpro.png
│       ├── icon_hs.png
│       ├── icon_ra.png
│       ├── icon_procon.png
│       ├── icon_intimacoes.png
│       └── selo.png                ← Selo do certificado
│
├── 📁 src/
│   │
│   ├── 📁 assets/
│   │   └── logo.jpg
│   │
│   ├── 📁 components/
│   │   ├── Sidebar.jsx
│   │   └── PasswordGate.jsx
│   │
│   ├── 📁 data/
│   │   ├── menu.jsx
│   │   └── questions.js           ← Perguntas do quiz
│   │
│   ├── 📁 pages/
│   │   ├── Home.jsx
│   │   ├── 📁 faqs/
│   │   ├── 📁 bases/
│   │   ├── 📁 videos/
│   │   └── 📁 certificado/
│   │         └── certificado.jsx  ← Lógica do quiz + PDF
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── package.json
├── vite.config.js
└── README.md

▶️ Rodar o projeto localmente
npm install
npm run dev

Build para produção:
npm run build


🧠 Lógica das Perguntas

As perguntas estão no arquivo:
src/data/questions.js

Estrutura padrão:
{
  id: 1,
  question: "Pergunta aqui...",
  options: ["Opção A", "Opção B", "Opção C", "Opção D"],
  answerIndex: 2
}
nswerIndex define qual alternativa é correta (começa do índice 0).

🔐 Controle de Acesso

A aplicação utiliza um componente PasswordGate para restringir o acesso ao ambiente interno.

🎨 Identidade Visual

Cores oficiais utilizadas:

Verde institucional: #004033

Fundo claro: #f0f3f7

Design alinhado com a identidade da Jusbrasil Soluções.

📈 Roadmap

Possíveis evoluções futuras:

 Número único de certificado

 QR Code de validação

 Ranking interno

 Dashboard de desempenho

 Níveis de certificação (Bronze, Prata, Ouro)

 👩‍💻 Desenvolvimento

Projeto desenvolvido por
Alexsandra Santos Lima
Analista de Suporte Pleno - Jusbrasil Soluções

Idealizado para facilitar o acesso ao conhecimento interno, padronizar informações e fortalecer a cultura técnica do Suporte B2B.