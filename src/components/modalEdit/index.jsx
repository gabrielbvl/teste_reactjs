import "./styles.css";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import ApiSaibWeb from "../../services";
import Back from "../../imgs/back.png";
import { toast } from "react-hot-toast";

function ModalEdit({ setModalEdit, clientsInfo, setRefresh, refresh }) {
    const schema = yup.object().shape({
        TECL_NOME: yup.string().required("*"),
        TECL_ENDERECO: yup.string().required("*"),
        TECL_CIDADE: yup.string().required("*"),
        TECL_UF: yup.string().required("*"),
        TECL_TELEFONE: yup.string().required("*"),
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
    return (
        <section className="container_modal_add">
            <div className="header_modal_add">
                <img onClick={goBack} className="back" src={Back} alt="Back" />
                <h3>Editar Cliente</h3>
            </div>
            <div className="general_modal_add">
                <form className="form_modal_add" onSubmit={handleSubmit(onSubmit)}>
                    <div className="line_one">
                        {/* Nome */}
                        <div className="line_one_div">
                            <p className="p_modal_add">Nome</p>
                            <input
                                defaultValue={clientsInfo.TECL_NOME}
                                className="input_modal_add"
                                error={errors.TECL_NOME?.message}
                                {...register("TECL_NOME")}
                            />
                            {errors.TECL_NOME && (
                                <p className="error">{errors.TECL_NOME.message}</p>
                            )}
                        </div>

                        {/* Endereço */}
                        <div className="line_one_div">
                            <p className="p_modal_add">Endereço</p>
                            <input
                                defaultValue={clientsInfo.TECL_ENDERECO}
                                className="input_modal_add"
                                error={errors.TECL_ENDERECO?.message}
                                {...register("TECL_ENDERECO")}
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
                                defaultValue={clientsInfo.TECL_CIDADE}
                                className="input_modal_add"
                                error={errors.TECL_CIDADE?.message}
                                {...register("TECL_CIDADE")}
                            />
                            {errors.TECL_CIDADE && (
                                <p className="error">{errors.TECL_CIDADE.message}</p>
                            )}
                        </div>

                        {/* UF */}
                        <div className="line_two_div_uf">
                            <p className="p_modal_add">UF</p>
                            <select
                                className="select_uf"
                                defaultValue={clientsInfo.TECL_UF}
                                {...register("TECL_UF")}
                            >
                                <option value="AC">Acre</option>
                                <option value="AL">Alagoas</option>
                                <option value="AP">Amapá</option>
                                <option value="AM">Amazonas</option>
                                <option value="BA">Bahia</option>
                                <option value="CE">Ceará</option>
                                <option value="DF">Distrito Federal</option>
                                <option value="ES">Espírito Santo</option>
                                <option value="GO">Goiás</option>
                                <option value="MA">Maranhão</option>
                                <option value="MT">Mato Grosso</option>
                                <option value="MS">Mato Grosso do Sul</option>
                                <option value="MG">Minas Gerais</option>
                                <option value="PA">Pará</option>
                                <option value="PB">Paraíba</option>
                                <option value="PR">Paraná</option>
                                <option value="PE">Pernambuco</option>
                                <option value="PI">Piauí</option>
                                <option value="RJ">Rio de Janeiro</option>
                                <option value="RN">Rio Grande do Norte</option>
                                <option value="RS">Rio Grande do Sul</option>
                                <option value="RO">Rondônia</option>
                                <option value="RR">Roraima</option>
                                <option value="SC">Santa Catarina</option>
                                <option value="SP">São Paulo</option>
                                <option value="SE">Sergipe</option>
                                <option value="TO">Tocantins</option>
                                <option value="EX">Estrangeiro</option>
                            </select>
                            {errors.TECL_UF && <p className="error">{errors.TECL_UF.message}</p>}
                        </div>

                        {/* Telefone */}
                        <div className="line_two_div">
                            <p className="p_modal_add">Telefone</p>
                            <input
                                defaultValue={clientsInfo.TECL_TELEFONE}
                                className="input_modal_add"
                                error={errors.TECL_TELEFONE?.message}
                                {...register("TECL_TELEFONE")}
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
        </section>
    );
}

export default ModalEdit;
