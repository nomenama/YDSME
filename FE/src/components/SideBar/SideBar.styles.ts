import styled, {css} from "styled-components";
import {MdOutlineDeleteForever} from "react-icons/md";
import {device} from "styles/theme";

export const SideBar = styled.div<{ width?: number }>`
  width: ${({width}) => width ? `${width}px` : "100%"} !important;
  max-height: 80vh;
  padding: 20px;
  border: 1px solid grey;
  border-radius: 2px;
  box-shadow: rgba(0, 0, 0, 0.05) 0 6px 24px 0, rgba(0, 0, 0, 0.08) 0 0 0 1px;
  overflow-x: auto;

  &.isSticky {
    width: ${({width}) => width ? `${width}px` : "100%"} !important;
    position: fixed;
    top: 10px;
    z-index: 999;
  }

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-track {
    background: #e0eeee;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #f2f2f5;
    border-radius: 20px;
    border: 3px solid #42abcc;
  }
`

export const DeleteIcon = styled(MdOutlineDeleteForever)`
  color: ${({theme}) => theme.colors.negative};
  position: absolute;
  right: 0;
  top: 5px;
  cursor: pointer;

  &:hover {
    transform: scale(1.2);
  }
`

export const AnnouncementForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 10px 0;
  border: 1px solid ${({theme}) => theme.colors.primary};
  border-radius: 2px;
  padding: 10px;
`

export const AnnouncementInput = styled.input`
  width: 100%;
  font-family: inherit;
  padding: 5px;
  border-radius: 2px;
  border: 1px solid #ced4da;
  outline-color: ${({theme}) => theme.buttons.primary};
  font-size: 18px;

  @media only screen and ${device.laptop} {
    font-size: 16px;
  }
`

export const TextArea = styled.textarea`
  width: 80%;
  font-family: inherit;
  padding: 5px;
  border-radius: 2px;
  border: 1px solid #ced4da;
  outline-color: ${({theme}) => theme.buttons.primary};
  font-size: 18px;
  resize: none;

  @media only screen and ${device.laptop} {
    width: 70%;
    font-size: 16px;
  }
`

export const Divider = styled.div<{ authorised: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 20px 0;
  position: relative;

  ${({authorised}) => authorised && css`
    &:hover {
      box-shadow: rgba(0, 0, 0, 0.25) 0 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
      transform: scale(1.01);
      border-radius: 2px;
    }
  `}
`