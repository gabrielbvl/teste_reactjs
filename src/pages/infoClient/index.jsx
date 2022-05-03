import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import ApiSaibWeb from "../../services";
import Back from "../../imgs/back.png";
import "./styles.css";

function InfoClient({}) {
    const params = useParams();
    const [item, setItem] = useState({});
    const [refresh, setRefresh] = useState(false);

    const navigate = useNavigate();

    console.log("ID", params.id);

    useEffect(() => {
        getClientId();
    }, [refresh]);

    const getClientId = async () => {
        try {
            const res = await ApiSaibWeb.get(`/cliente/${params.id}`);
            console.log("RES", res);
            setItem(res.data.data[0]);
        } catch (err) {
            toast.error(err.message);
        }
    };

    const goBack = () => {
        navigate("/clientes");
    };

    return (
        <div className="container_client">
            <h1>Informações do cliente {item.TECL_ID}</h1>
            <div className="client_infos">
                <div className="infos" id="info_name">
                    <h2>Cliente</h2>
                    <h3> {item.TECL_NOME} </h3>
                </div>

                <div className="infos" id="info_address">
                    <h2>Endereço</h2>
                    <h3>Rua: {item.TECL_ENDERECO}</h3>
                    <h3>Cidade: {item.TECL_CIDADE}</h3>
                    <h3>Estado: {item.TECL_UF}</h3>
                </div>

                <div className="infos" id="info_contact">
                    <h2>Contato</h2>
                    <h3>Número para contato: {item.TECL_TELEFONE}</h3>
                </div>
                <img onClick={goBack} className="back" src={Back} alt="Back" />
            </div>
        </div>
    );
}

export default InfoClient;
