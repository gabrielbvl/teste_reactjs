import { Routes, Route } from "react-router-dom";
import LandingPage from "../pages/landingPage";
import Home from "../pages/home";
import InfoClient from "../pages/infoClient";

const ProjectRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/clientes" element={<Home />} />
                <Route path="/clientes/:id" element={<InfoClient />} />
            </Routes>
        </>
    );
};

export default ProjectRoutes;
