import "./styles.css";
import { toast } from "react-hot-toast";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import ApiSaibWeb from "../../services";
import axios from "axios";

function Home() {
    useEffect(() => {
        getClients();
    }, []);

    const [modalAdd, setModalAdd] = useState(false);
    const [modalEdit, setModalEdit] = useState(false);
    const [clients, setClients] = useState([]);
    const [infoClient, setInfoClient] = useState([]);

    const history = useHistory();

    const goBack = () => {
        history.push("/");
        toast.success("Bem vindo a SaibWeb Tecnologia!");
    };

    const getClients = async () => {
        try {
            const res = await ApiSaibWeb.get(`/clientes`);
            setClients(res.data.data);
        } catch (err) {
            alert(err.message);
        }
    };

    console.log(clients);

    // console.log("Clients.data", clients);

    const openModalAdd = () => {
        setModalAdd(true);
    };

    return (
        <div>
            <div className="header">Teste ReactJS - SaibWeb</div>
            <div>
                {clients.map((item) => (
                    <div /*onClick={() => openModalEdit(item.id)}*/>
                        <span>{item.TECL_NOME}</span>
                        <span>{item.TECL_ENDERECO}</span>
                        <span>{item.TECL_CIDADE}</span>
                        <span>{item.TECL_UF}</span>
                        <span>{item.ECL_TELEFONE}</span>
                        <span>{item.TECL_EMAIL}</span>
                    </div>
                ))}
            </div>
            <button onClick={goBack}>Sair</button>
        </div>
    );
}

export default Home;
