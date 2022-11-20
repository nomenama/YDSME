import React from 'react';
import ReactDOM from "react-dom";
import {Overlay} from "../Drawer/Drawer.styles";
import {ModalContainer} from './Modal.styles';

interface ModalProps {
    onClose: () => void;
    children: JSX.Element;
}

const Modal = ({children, onClose}: ModalProps) => {
    return ReactDOM.createPortal(
        <>
            <Overlay onClick={onClose}/>
            <ModalContainer>
                {children}
            </ModalContainer>

        </>,
        document.getElementById("portal") as Element
    );
};

export default Modal;