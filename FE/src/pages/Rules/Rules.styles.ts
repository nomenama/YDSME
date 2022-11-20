import styled from "styled-components";
import {device} from "styles/theme";
import {PrimaryButton} from "../../components/Header/Header.styles";

export const PDFContainer = styled.iframe`
  height: calc(100vh - 234px);
  overflow: auto;

  @media only screen and ${device.laptop} {
    height: calc(100vh - 202px);
  }

  @media only screen and ${device.mobileL} {
    height: calc(100vh - 212px);
  }
`

export const FloatingButton = styled(PrimaryButton)`
  width: 100%;
  max-width: 100px;
  position: absolute;
  right: 90px;
  bottom: 20px;

  @media only screen and ${device.laptop} {
    bottom: 40px;
    right: 40px;
  }

  @media only screen and ${device.tablet} {
    bottom: 20px;
    right: 40px;
  }

  @media only screen and ${device.mobileL} {
    bottom: 20px;
  }
`
