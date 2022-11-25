import styled from "styled-components";
import {device} from "styles/theme";
import {BsFileEarmarkPdf} from "react-icons/bs";

export const PDFContainer = styled.iframe`
  width: 100%;
  min-height: calc(100vh - 220px);
  overflow: auto;

  @media only screen and ${device.laptop} {
    min-height: calc(100vh - 202px);
  }

  @media only screen and ${device.mobileL} {
    min-height: calc(100vh - 212px);
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
