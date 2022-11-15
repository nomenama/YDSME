import styled from "styled-components";
import {PrimaryButton} from "../Header.styles";

export const MobileNavContainer = styled.nav`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding: 20px;
  align-items: center;
  gap: 20px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
  background-color: ${({theme}) => theme.colors.primary};
  overflow: hidden;
`

export const MobileNavButton = styled(PrimaryButton)`
  width: 100%;
`