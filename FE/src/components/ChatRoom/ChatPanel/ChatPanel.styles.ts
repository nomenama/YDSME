import styled from "styled-components";
import {IoMdImages} from "react-icons/io";
import {CgAttachment} from "react-icons/cg";
import {device} from "styles/theme";

export const ChatPanelContent = styled.section`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #c1cae3;
`

export const ChatHeader = styled.div`
  width: 100%;
  height: 100%;
  max-height: 60px;
  background-color: #514ba8;
  padding: 20px;
  font-size: 20px;
  color: ${({theme}) => theme.colors.white};
  position: relative;
`

export const ChatFooter = styled.div`
  width: 100%;
  height: max-content;
  display: flex;
  background-color: lightgrey;
  justify-content: space-between;
  align-items: center;
  gap: 15px;
  padding: 10px;
`

export const ChatInput = styled.input`
  flex: 1;
  width: 100%;
  border: none;
  background-color: lightgrey;
  outline: none;
  font-size: 18px;

  &::placeholder {
    font-size: 16px;
    color: #3f3d3d;

    @media only screen and ${device.tablet} {
      font-size: 14px;
    }

    @media only screen and ${device.mobileM} {
      font-size: 12px;
    }

  }

  @media only screen and ${device.tablet} {
    font-size: 16px;
  }

  @media only screen and ${device.mobileM} {
    font-size: 12px;
  }
`

export const AttachmentIcon = styled(CgAttachment)`
  color: darkgray;

  @media only screen and ${device.tablet} {
    width: 20px !important;
    height: 20px !important;
  }
`

export const ImageIcon = styled(IoMdImages)`
  color: darkgray;

  @media only screen and ${device.tablet} {
    width: 20px !important;
    height: 20px !important;
  }
`

export const ChatEnterButton = styled.button`
  background-color: ${({theme}) => theme.buttons.primary};
  color: ${({theme}) => theme.colors.white};
  border: none;
  padding: 10px 15px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;

  @media only screen and ${device.tablet} {
    font-size: 12px;
    padding: 5px 10px;
  }
`

