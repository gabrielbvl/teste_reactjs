import "./styles.css";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import ApiSaibWeb from "../../services";
import { toast } from "react-hot-toast";
import Back from "../../imgs/back.png";
import React, { useState } from "react";
import ModalUnsaved from "../modalUnsaved";

function ModalAdd({ setModalAdd, setRefresh, refresh }) {
    const [modalUnsaved, setModalUnsaved] = useState(false);
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [cell, setCell] = useState("");

    const schema = yup.object().shape({
        TECL_NOME: yup.string().required("Campo Obrigatório"),
        TECL_ENDERECO: yup.string().required("Campo Obrigatório"),
        TECL_CIDADE: yup.string().required("Campo Obrigatório"),
        TECL_UF: yup
            .string()
            .required("Campo Obrigatório")
            .min(2, "Mínimo 2 letras")
            .max(2, "Máximo 2 letras"),
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
        if (dataForm === "") {
            return toast.error("Preencha todos os campos");
        }

        ApiSaibWeb.post("/cliente", dataForm)
            .then((res) => {
                setRefresh(!refresh);
                setModalAdd(false);
                toast.success("Novo cliente cadastrado");
            })
            .catch((error) => toast.error("Ops algo deu errado"));
    };

    const goBack = () => {
        setModalAdd(false);
    };

    const closeCard = () => {
        setModalUnsaved(false);
    };

    const openCard = () => {
        console.log(name, address, city, state, cell);
        if (name !== "" || address !== "" || city !== "" || state !== "" || cell !== "") {
            setModalUnsaved(true);
        } else {
            setModalAdd(false);
        }
    };
    return (
        <section className="container_modal_add">
            <div className="header_modal_add">
                <img onClick={openCard} className="back" src={Back} alt="Back" />
                <h3>Novo Registro</h3>
            </div>
            <div className="general_modal_add">
                <form className="form_modal_add" onSubmit={handleSubmit(onSubmit)}>
                    <div className="line_one">
                        {/* Nome */}
                        <div className="line_one_div">
                            <p className="p_modal_add">Nome</p>
                            <input
                                className="input_modal_add"
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
                            <p className="p_modal_add">Endereço</p>
                            <input
                                onChange={(e) => setAddress(e.target.value)}
                                className="input_modal_add"
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
                            <p className="p_modal_add">Cidade</p>
                            <input
                                onChange={(e) => setCity(e.target.value)}
                                className="input_modal_add"
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
                            <p className="p_modal_add">UF</p>
                            <input
                                onChange={(e) => setState(e.target.value)}
                                className="input_modal_add"
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
                            <p className="p_modal_add">Telefone</p>
                            <input
                                onChange={(e) => setCell(e.target.value)}
                                className="input_modal_add"
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

                    <div className="buttons_modal_add">
                        <button className="add_modal_add" id="save">
                            Salvar
                        </button>
                        <button className="add_modal_add" id="close" onClick={goBack}>
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
                    setModalAdd={setModalAdd}
                    setModalUnsaved={setModalUnsaved}
                />
            )}
        </section>
    );
}

export default ModalAdd;
