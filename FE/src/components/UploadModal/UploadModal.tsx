import React from 'react';
import ReactDOM from "react-dom";
import {Overlay} from "../Drawer/Drawer.styles";
import {ModalContainer} from './UploadModal.styles';
import UploadWidget from "../UploadWidget/UploadWidget";
import {UploadWidgetProps} from "../../types";

interface ModalProps extends UploadWidgetProps {
    onClose: () => void;
}

const UploadModal = ({onClose, uploadPreset}: ModalProps) => {
    return ReactDOM.createPortal(
        <>
            <Overlay onClick={onClose}/>
            <ModalContainer>
                <UploadWidget uploadPreset={uploadPreset} onModalClose={onClose}/>
            </ModalContainer>

        </>,
        document.getElementById("portal") as Element
    );
};

export default UploadModal;