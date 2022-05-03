import "./styles.css";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import ApiSaibWeb from "../../services";
import Back from "../../imgs/back.png";
import { toast } from "react-hot-toast";
import { useState } from "react";
import ModalUnsaved from "../modalUnsaved";

function ModalEdit({ setModalEdit, clientsInfo, setRefresh, refresh }) {
    const [modalUnsaved, setModalUnsaved] = useState(false);
    const [name, setName] = useState(clientsInfo.TECL_NOME);
    const [address, setAddress] = useState(clientsInfo.TECL_ENDERECO);
    const [city, setCity] = useState(clientsInfo.TECL_CIDADE);
    const [state, setState] = useState(clientsInfo.TECL_UF);
    const [cell, setCell] = useState(clientsInfo.TECL_TELEFONE);

    const schema = yup.object().shape({
        TECL_NOME: yup.string().required("Campo Obrigatório"),
        TECL_ENDERECO: yup.string().required("Campo Obrigatório"),
        TECL_CIDADE: yup.string().required("Campo Obrigatório"),
        TECL_UF: yup
            .string()
            .min(2, "Mínimo 2 letras")
            .max(2, "Máximo 2 letras")
            .required("Campo Obrigatório"),
        TECL_TELEFONE: yup.string().required("Campo Obrigatório"),
    });
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    const onSubmit = (dataForm) => {
        dataForm["TECL_ID"] = clientsInfo["TECL_ID"];
        ApiSaibWeb.put(`/cliente`, dataForm)
            .then((res) => {
                setRefresh(!refresh);
                setModalEdit(false);
                toast.success("Cliente editado");
            })
            .catch((error) => toast.error("Ops algo deu errado"));
    };

    const goBack = () => {
        setModalEdit(false);
    };

    const closeCard = () => {
        setModalUnsaved(false);
    };

    const openCard = () => {
        if (
            name !== clientsInfo.TECL_NOME ||
            address !== clientsInfo.TECL_ENDERECO ||
            city !== clientsInfo.TECL_CIDADE ||
            state !== clientsInfo.TECL_UF ||
            cell !== clientsInfo.TECL_TELEFONE
        ) {
            setModalUnsaved(true);
        } else {
            setModalEdit(false);
        }
    };
    return (
        <section className="container_modal_edit">
            <div className="header_modal_edit">
                <img onClick={openCard} className="back" src={Back} alt="Back" />
                <h3>Editar Cliente</h3>
            </div>
            <div className="general_modal_edit">
                <form className="form_modal_edit" onSubmit={handleSubmit(onSubmit)}>
                    <div className="line_one">
                        {/* Nome */}
                        <div className="line_one_div">
                            <p className="p_modal_edit">Nome</p>
                            <input
                                defaultValue={clientsInfo.TECL_NOME}
                                className="input_modal_edit"
                                error={errors.TECL_NOME?.message}
                                {...register("TECL_NOME", {
                                    onChange: (e) => {
                                        setName(e.target.value);
                                    },
                                })}
                            />
                            {errors.TECL_NOME && (
                                <p className="error">{errors.TECL_NOME.message}</p>
                            )}
                        </div>

                        {/* Endereço */}
                        <div className="line_one_div">
                            <p className="p_modal_edit">Endereço</p>
                            <input
                                defaultValue={clientsInfo.TECL_ENDERECO}
                                className="input_modal_edit"
                                error={errors.TECL_ENDERECO?.message}
                                {...register("TECL_ENDERECO", {
                                    onChange: (e) => {
                                        setName(e.target.value);
                                    },
                                })}
                            />
                            {errors.TECL_ENDERECO && (
                                <p className="error">{errors.TECL_ENDERECO.message}</p>
                            )}
                        </div>
                    </div>

                    <div className="line_two">
                        {/* Cidade */}
                        <div className="line_two_div">
                            <p className="p_modal_edit">Cidade</p>
                            <input
                                defaultValue={clientsInfo.TECL_CIDADE}
                                className="input_modal_edit"
                                error={errors.TECL_CIDADE?.message}
                                {...register("TECL_CIDADE", {
                                    onChange: (e) => {
                                        setName(e.target.value);
                                    },
                                })}
                            />
                            {errors.TECL_CIDADE && (
                                <p className="error">{errors.TECL_CIDADE.message}</p>
                            )}
                        </div>

                        {/* UF */}
                        <div className="line_two_div_uf">
                            <p className="p_modal_edit">UF</p>
                            <input
                                defaultValue={clientsInfo.TECL_UF}
                                className="input_modal_edit"
                                error={errors.TECL_UF?.message}
                                {...register("TECL_UF", {
                                    onChange: (e) => {
                                        setName(e.target.value);
                                    },
                                })}
                            />
                            {errors.TECL_UF && <p className="error">{errors.TECL_UF.message}</p>}
                        </div>

                        {/* Telefone */}
                        <div className="line_two_div">
                            <p className="p_modal_edit">Telefone</p>
                            <input
                                defaultValue={clientsInfo.TECL_TELEFONE}
                                className="input_modal_edit"
                                error={errors.TECL_TELEFONE?.message}
                                {...register("TECL_TELEFONE", {
                                    onChange: (e) => {
                                        setName(e.target.value);
                                    },
                                })}
                            />
                            {errors.TECL_TELEFONE && (
                                <p className="error">{errors.TECL_TELEFONE.message}</p>
                            )}
                        </div>
                    </div>

                    <div className="buttons_modal_edit">
                        <button className="edit_modal_edit" id="save">
                            Salvar
                        </button>
                        <button className="edit_modal_edit" id="close" onClick={goBack}>
                            Cancelar
                        </button>
                    </div>
                </form>
            </div>

            {modalUnsaved && (
                <ModalUnsaved
                    closeCard={closeCard}
                    refresh={refresh}
                    setRefresh={setRefresh}
                    setModalAdd={setModalEdit}
                    setModalUnsaved={setModalUnsaved}
                />
            )}
        </section>
    );
}

export default ModalEdit;
