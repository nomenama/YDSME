import React from 'react';
import {AnchorTag, CloseButton, DrawerButton, DrawerContainer, DrawerGroup, Overlay} from "./Drawer.styles";
import ReactDOM from "react-dom";
import {useDevice} from "../../hooks/useDevice";
import {P1} from "../../common/index.styles";
import {useTheme} from "styled-components";
import useUser from "../../hooks/useUser";

export interface DrawerProps {
    onClose: () => void;
    handleLogout: () => void;
}

const Drawer = ({onClose, handleLogout}: DrawerProps) => {
    const {isDesktop} = useDevice();
    const theme = useTheme();
    const {user, isEditor, isAdmin} = useUser();


    return ReactDOM.createPortal(
        <>
            <Overlay onClick={onClose}/>
            <DrawerContainer>
                <DrawerGroup>
                    <P1 color={theme.colors.primary} textAlign="center" fontWeight={500}>Welcome, {user.firstName}</P1>
                    <CloseButton size={isDesktop ? 25 : 20} onClick={onClose}/>

                    <AnchorTag to="/editor">
                        <DrawerButton onClick={onClose} disabled={!isEditor}>Editor</DrawerButton>
                    </AnchorTag>

                    <AnchorTag to="/admin">
                        <DrawerButton onClick={onClose} disabled={!isAdmin}>Admin</DrawerButton>
                    </AnchorTag>

                </DrawerGroup>

                <DrawerGroup>
                    <AnchorTag to="/setting">
                        <DrawerButton disabled>Setting</DrawerButton>
                    </AnchorTag>
                    <DrawerButton onClick={() => {
                        handleLogout();
                        onClose();
                    }}>Logout</DrawerButton>
                </DrawerGroup>
            </DrawerContainer>
        </>,
        document.getElementById("portal") as Element
    );
};

export default Drawer;