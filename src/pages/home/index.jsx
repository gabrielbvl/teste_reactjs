import "./styles.css";
import { toast } from "react-hot-toast";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ApiSaibWeb from "../../services";
import Back from "../../imgs/back.png";
import Edit from "../../imgs/edit.png";
import Minus from "../../imgs/minus.png";
import Plus from "../../imgs/plus.png";
import ModalAdd from "../../components/modalAdd";
import ModalEdit from "../../components/modalEdit";

function Home() {
    const [modalAdd, setModalAdd] = useState(false);
    const [modalEdit, setModalEdit] = useState(false);
    const [clients, setClients] = useState([]);
    const [refresh, setRefresh] = useState(false);

    useEffect(() => {
        getClients();
    }, [refresh]);

    const navigate = useNavigate();

    const goBack = () => {
        navigate("/");
        toast.success("Bem vindo a SaibWeb Tecnologia!");
    };

    const getClients = async () => {
        try {
            const res = await ApiSaibWeb.get(`/clientes`);
            setClients(res.data.data);
        } catch (err) {
            toast.error(err.message);
        }
    };

    const removeClient = async (id) => {
        console.log(id);
        ApiSaibWeb.delete(`/cliente/${id}`).then((res) => {
            setRefresh(!refresh);
            setModalEdit(false);
            toast.error("Cliente excluido");
        });
    };

    // console.log("Clients.data", clients);

    const openModalAdd = () => {
        setModalAdd(true);
    };

    return (
        <div className="container_div">
            <div className="header">
                <img onClick={goBack} className="back" src={Back} alt="Back" />
                <p>Teste ReactJS - SaibWeb</p>
            </div>
            <div className="center_all">
                <div className="listing">
                    <div className="list_identifier">
                        <img onClick={openModalAdd} src={Plus} alt="add client" />
                        <p className="null"></p>
                        <p className="name">Nome</p>
                        <p className="adress">Endereço</p>
                        <p className="city">Cidade</p>
                        <p className="state">UF</p>
                        <p className="cell">Telefone</p>
                        <p className="email">E-mail</p>
                    </div>
                    <div className="container_div">
                        {clients.map((item) => (
                            <div
                                key={item.TECL_ID}
                                className="list_clients" /*onClick={() => openModalEdit(item.id)}*/
                            >
                                <img
                                    onClick={() => removeClient(item.TECL_ID)}
                                    src={Minus}
                                    alt="delete client"
                                />
                                <img src={Edit} alt="edit client" />
                                <span className="name">{item.TECL_NOME}</span>
                                <span className="adress">{item.TECL_ENDERECO}</span>
                                <span className="city">{item.TECL_CIDADE}</span>
                                <span className="state">{item.TECL_UF}</span>
                                <span className="cell">{item.TECL_TELEFONE}</span>
                                <span className="email">email@padrao.com.br</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {!modalAdd ? (
                <></>
            ) : (
                <ModalAdd setModalAdd={setModalAdd} refresh={refresh} setRefresh={setRefresh} />
            )}
            {!modalEdit ? (
                <></>
            ) : (
                <ModalEdit setModalEdit={setModalEdit} refresh={refresh} setRefresh={setRefresh} />
            )}
        </div>
    );
}

export default Home;
