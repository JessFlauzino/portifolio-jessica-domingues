import { createBrowserRouter } from "react-router-dom";
import App from "./App"
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import SkillsSection from "./pages/SkillsSection";
import Projetos from "./pages/Projetos";
import Contato from "./pages/Contato";


const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { index: true, element: <Home /> },
            { path: "sobre", element: <Sobre /> },
            { path: "skills", element: <SkillsSection /> },
            { path: "projetos", element: <Projetos /> },
            { path: "contato", element: <Contato /> },
            
        ]
    }
]);

export default router;
