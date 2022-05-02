import { Routes, Route } from "react-router-dom";
import LandingPage from "../pages/landingPage";
import Home from "../pages/home";

const ProjectRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/home" element={<Home />} />
            </Routes>
        </>
    );
};

export default ProjectRoutes;
