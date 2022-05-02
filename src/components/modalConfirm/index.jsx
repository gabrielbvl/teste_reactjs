import "./styles.css";

function ModalConfirm({ closeCard, removeClient, clientsInfo }) {
    function removerCard() {
        removeClient(clientsInfo.TECL_ID);
        closeCard();
    }

    return (
        <div className="container">
            <div className="container_buttons">
                <div className="popUp">
                    <h3> Remover Cliente? </h3>
                    <button onClick={removerCard}> Sim </button>
                    <button onClick={closeCard}> Não </button>
                </div>
            </div>
        </div>
    );
}

export default ModalConfirm;
