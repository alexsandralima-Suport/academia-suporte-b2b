# 🎓 Academia Suporte B2B — Jusbrasil

> Portal interno de conhecimento do **Suporte B2B**, criado para centralizar **FAQs, bases de conhecimento, playbooks e treinamentos** dos produtos Jusbrasil.

---

## 🚀 Objetivo do projeto

A **Academia Suporte B2B** foi criada para:

- Centralizar informações técnicas e operacionais
- Facilitar o onboarding de novos analistas
- Organizar FAQs por produto
- Garantir manutenção simples e rápida
- Servir como fonte única de consulta interna

---

## 🧱 Tecnologias utilizadas

- ⚛️ **React**
- ⚡ **Vite**
- 🔀 **React Router DOM**
- 🎨 **CSS / estilos inline**
- ☁️ **Deploy:** Vercel ou GitHub Pages

---

## 🗂️ Estrutura do projeto (visual)

```text
academia-suporte-b2b/
│
├── 📁 public/
│   └── 📁 img/                         ← IMAGENS DOS CARDS (OBRIGATÓRIO)
│       ├── icon_api.png
│       ├── icon_ip.png
│       ├── icon_op.png
│       ├── icon_4biz.png
│       ├── icon_cpro.png
│       ├── icon_hs.png
│       ├── icon_ra.png
│       ├── icon_procon.png
│       └── icon_intimacoes.png
│
├── 📁 src/
│   │
│   ├── 📁 assets/                      ← LOGO
│   │   └── logo.jpg
│   │
│   ├── 📁 components/
│   │   └── Sidebar.jsx                 ← Menu lateral
│   │
│   ├── 📁 data/
│   │   └── menu.jsx                    ← Estrutura do menu
│   │
│   ├── 📁 pages/
│   │   ├── Home.jsx                    ← Página inicial
│   │   ├── 📁 faqs/                    ← FAQs por produto
│   │   ├── 📁 bases/                   ← Bases de conhecimento
│   │   └── 📁 videos/                  ← Treinamentos
│   │
│   ├── App.jsx                         ← Rotas
│   ├── main.jsx                        ← Entrada do React
│   └── index.css
│
├── package.json
├── vite.config.js
└── README.md

▶️ Rodar o projeto localmente
npm install
npm run dev

---

### 👩‍💻 Desenvolvimento

Projeto desenvolvido por **Alexsandra Lima**  
**Analista de Suporte - Jusbrasil**

> Idealizado para facilitar o acesso ao conhecimento interno, padronizar informações e apoiar o time de Suporte B2B no dia a dia.