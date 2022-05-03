import "./styles.css";

function ModalConfirmDelete({ closeCard, removeClient, clientsInfo }) {
    const removerCard = () => {
        removeClient(clientsInfo.TECL_ID);
        closeCard();
    };

    return (
        <div className="container_modal_confirm">
            <div className="container_buttons">
                <div className="popUp">
                    <h3>
                        Tem certeza que deseja excluir o(a) cliente
                        <span className="client_name">{clientsInfo.TECL_NOME}</span>?
                    </h3>
                    <div className="buttons_modal_confirm">
                        <button className="yes" onClick={removerCard}>
                            Sim
                        </button>
                        <button className="no" onClick={closeCard}>
                            Não
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ModalConfirmDelete;
