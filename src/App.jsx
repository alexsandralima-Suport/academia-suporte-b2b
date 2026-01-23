import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar.jsx";
import Home from "./pages/Home.jsx";
import PasswordGate from "./components/PasswordGate.jsx";

// FAQs
import Faq4BIZ from "./pages/faqs/Faq4BIZ.jsx";
import FaqAPIJS from "./pages/faqs/FaqAPIJS.jsx";
import FaqCPRO from "./pages/faqs/FaqCPRO.jsx";
import FaqHS from "./pages/faqs/FaqHS.jsx";
import FaqOP from "./pages/faqs/FaqOP.jsx";
import FaqIP from "./pages/faqs/FaqIP.jsx";
import FaqRA from "./pages/faqs/FaqRA.jsx";
import FaqProcon from "./pages/faqs/Procon.jsx";
import FaqIntimacoes from "./pages/faqs/Intimacoes.jsx";

// Bases de conhecimento
import ProconBase from "./pages/bases/Procon.jsx";
import Base4BIZ from "./pages/bases/4biz.jsx";

// Playbooks
import Playbook4BIZ from "./pages/bases/playbooks/Playbook4biz.jsx";
import PlaybookCPRO from "./pages/bases/playbooks/PlaybookCPRO.jsx";
import PlaybookITAU from "./pages/bases/playbooks/PlaybookITAU.jsx";
import PlaybookOPS from "./pages/bases/playbooks/PlaybookOPS.jsx";

// Vídeos de Treinamento
import Videos from "./pages/videos/Videos.jsx";

export default function App() {
  const layoutStyles = {
    container: {
      display: "flex",
      minHeight: "100vh",
      backgroundColor: "#ffffff"
    },
    main: {
      flex: 1,
      padding: "40px 60px",
      width: "100%",
      maxWidth: "1000px",
      margin: "0 auto",
      backgroundColor: "#ffffff"
    }
  };
  return (
    <PasswordGate>
     <BrowserRouter>
       <div style={layoutStyles.container}>
         <Sidebar />
         <main style={layoutStyles.main}>
           <Routes>
             {/* Home */}
             <Route path="/" element={<Home />} />
             {/* FAQs */}
             <Route path="/faqs/4biz" element={<Faq4BIZ />} />
             <Route path="/faqs/apijs" element={<FaqAPIJS />} />
             <Route path="/faqs/cpro" element={<FaqCPRO />} />
             <Route path="/faqs/hs" element={<FaqHS />} />
             <Route path="/faqs/op" element={<FaqOP />} />
             <Route path="/faqs/ip" element={<FaqIP />} />
             <Route path="/faqs/RA" element={<FaqRA />} />
             <Route path="/faqs/procon" element={<FaqProcon />} />
             <Route path="/faqs/intimacoes" element={<FaqIntimacoes />} />
             {/* Bases */}
             <Route path="/bases/procon" element={<ProconBase />} />
            <Route path="/bases/4biz" element={<Base4BIZ />} />
             {/* Playbooks */}
             <Route path="/playbooks/4biz" element={<Playbook4BIZ />} />
             <Route path="/playbooks/cpro" element={<PlaybookCPRO />} />
             <Route path="/playbooks/itau" element={<PlaybookITAU />} />
             <Route path="/playbooks/ops" element={<PlaybookOPS />} />
             {/* Vídeos de Treinamento */}
             <Route path="/videos" element={<Videos />} />
           </Routes>
         </main>
       </div>
     </BrowserRouter>
  </PasswordGate>
  );
}


// export default function App() {
//   const layoutStyles = {
//     container: {
//       display: "flex",
//       minHeight: "100vh",
//       backgroundColor: "#ffffff"
//     },
//     main: {
//       flex: 1,
//       padding: "40px 60px",
//       width: "100%",
//       maxWidth: "1000px",
//       margin: "0 auto",
//       backgroundColor: "#ffffff"
//     }
//   };

//   return (
//     <BrowserRouter>
//       <div style={layoutStyles.container}>
//         <Sidebar />

//         <main style={layoutStyles.main}>
//           <Routes>
//             {/* Home */}
//             <Route path="/" element={<Home />} />

//             {/* FAQs */}
//             <Route path="/faqs/4biz" element={<Faq4BIZ />} />
//             <Route path="/faqs/apijs" element={<FaqAPIJS />} />
//             <Route path="/faqs/cpro" element={<FaqCPRO />} />
//             <Route path="/faqs/hs" element={<FaqHS />} />
//             <Route path="/faqs/op" element={<FaqOP />} />
//             <Route path="/faqs/ip" element={<FaqIP />} />
//             <Route path="/faqs/RA" element={<FaqRA />} />
//             <Route path="/faqs/procon" element={<FaqProcon />} />
//             <Route path="/faqs/intimacoes" element={<FaqIntimacoes />} />

//             {/* Bases */}
//             <Route path="/bases/procon" element={<ProconBase />} />
//            <Route path="/bases/4biz" element={<Base4BIZ />} />

//             {/* Playbooks */}
//             <Route path="/playbooks/4biz" element={<Playbook4BIZ />} />
//             <Route path="/playbooks/cpro" element={<PlaybookCPRO />} />
//             <Route path="/playbooks/itau" element={<PlaybookITAU />} />
//             <Route path="/playbooks/ops" element={<PlaybookOPS />} />

//             {/* Vídeos de Treinamento */}
//             <Route path="/videos" element={<Videos />} />
//           </Routes>
//         </main>
//       </div>
//     </BrowserRouter>
//   );
// }
