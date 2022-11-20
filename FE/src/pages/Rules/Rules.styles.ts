import styled from "styled-components";
import {device} from "styles/theme";
import {PrimaryButton} from "../../components/Header/Header.styles";
import {BsFileEarmarkPdf} from "react-icons/bs";

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

export const Icon = styled(BsFileEarmarkPdf)`
  color: ${({theme}) => theme.buttons.primary};
`

export const PdfTag = styled.a`
  color: ${({theme}) => theme.buttons.primary};
  font-size: 20px;
  text-decoration: none;

  @media only screen and ${device.tablet} {
    font-size: 18px;
  }

  @media only screen and ${device.mobileM} {
    font-size: 16px;
  }
`

export const TagContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  transition: background-color 300ms ease-in-out;
  border-radius: 4px;

  &:hover {
    background-color: ${({theme}) => theme.colors.white};
  }
`
