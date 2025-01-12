import { BrowserRouter, Routes, Route } from "react-router-dom";
import { DarkModeProvider } from "./assets/Components/DarkModeContext";
import Home from "./assets/Pages/Home";
import Skills from "./assets/Pages/Skills";
import Project from "./assets/Pages/Project";
import Experience from "./assets/Pages/Experience";
import Layout from "./assets/Pages/Layout";
import Certication from "./assets/Pages/Certication";

const AppRoutes = () => {
  
  return (
    <DarkModeProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Child routes should not have leading slashes */}
          <Route index element={<Home />} /> {/* Default route */}
          <Route path="Certification" element={<Certication />} />
          <Route path="Skills" element={<Skills />} />
          <Route path="Project" element={<Project />} />
          <Route path="Experience" element={<Experience />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </DarkModeProvider>
  );
};

export default AppRoutes;
