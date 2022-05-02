import "./styles.css";
import { toast } from "react-hot-toast";
import React from "react";
import { useHistory } from "react-router-dom";
import Logo from "../../imgs/saibWeb.png";

function LandingPage() {
    const history = useHistory();

    const goHome = () => {
        history.push("/home");
        toast.success("Bem vindo a lista de clientes!");
    };

    return (
        <div className="container">
            <div className="container_img">
                <img className="logo" src={Logo} alt="Logo Nu Kenzie" />
            </div>

            <div className="container_button">
                <button className="acess_button" onClick={goHome}>
                    Acessar a lista de clientes
                </button>
            </div>
        </div>
    );
}

export default LandingPage;
