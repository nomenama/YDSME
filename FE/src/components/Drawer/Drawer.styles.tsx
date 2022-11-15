import styled from "styled-components";
import {AiOutlineCloseSquare} from "react-icons/ai";
import {SecondaryButton} from 'pages/Login/Login.styles';
import {Link} from "react-router-dom";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 1000;
`

export const DrawerContainer = styled.div`
  width: 100%;
  max-width: 400px;
  height: 100vh;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: space-between;
  background-color: lightgrey;
  box-shadow: rgba(60, 64, 67, 0.3) 0 1px 2px 0, rgba(60, 64, 67, 0.15) 0 2px 6px 2px;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 1000;
`

export const CloseButton = styled(AiOutlineCloseSquare)`
  color: ${({theme}) => theme.buttons.primary};
  cursor: pointer;
  align-self: flex-end;


  &:hover {
    transform: scale(1.2);
  }
`

export const DrawerButton = styled(SecondaryButton)`
  width: 100%;
  outline: 0;

  &:hover {
    transform: scale(1.02);
  }
`

export const DrawerGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export const AnchorTag = styled(Link)`
  min-width: 100% !important;
  outline: 0;
  text-decoration: none;
`