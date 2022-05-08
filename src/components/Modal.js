import ReactDOM from 'react-dom';
import "../styles/Modal.css";

function Modal({ children }) {
    return ReactDOM.createPortal(
        <div className='modal-popup'>
            <div className='modal-content'>
                { children }
            </div>
        </div>,
        document.getElementById('modal')
    )
}

export { Modal }