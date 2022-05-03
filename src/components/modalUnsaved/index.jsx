import "./styles.css";

function ModalUnsaved({ closeCard, refresh, setRefresh, setModalAdd, setModalUnsaved }) {
    function closeModalUnsaved() {
        setModalAdd(false);
        setModalUnsaved(false);
        setRefresh(!refresh);
    }

    return (
        <div className="container_modal_confirm">
            <div className="container_buttons">
                <div className="popUp">
                    <h3>Tem certeza deseja sair sem salvar as alterações?</h3>
                    <div className="buttons_modal_confirm">
                        <button className="yes" onClick={closeModalUnsaved}>
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

export default ModalUnsaved;
