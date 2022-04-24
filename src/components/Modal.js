const Modal = ({ modalTitle, modalText, onClose, show }) => {
    if (!show) {
        return null;
    } else {
        setTimeout(() => {
            onClose();
        }, 2000);

        return (
            <div className="modal">
                {modalTitle && <header className="modal__header">{modalTitle}</header>}
                {modalText && <main className="modal__body">{modalText}</main>}
                {/* <footer className="modal__footer"><button onClick={onClose}>Close</button></footer> */}
            </div>
        );
    }
};

export default Modal;
