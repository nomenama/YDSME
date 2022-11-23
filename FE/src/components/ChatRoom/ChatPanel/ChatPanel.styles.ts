import styled from "styled-components";

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
  background-color: #6b85f5;
  padding: 20px;
  font-size: 20px;
  color: ${({theme}) => theme.colors.white};
  position: relative;
`

export const ChatFooter = styled.div`
  width: 100%;
  height: max-content;
  position: relative;
`

export const ChatInput = styled.input`
  width: 100%;
  padding: 20px;
  border: none;
  background-color: lightgrey;
  outline: none;
  font-size: 18px;

  &::placeholder {
    font-size: 16px;
    color: darkgray;
  }
`

export const ChatEnterButton = styled.button`
  background-color: ${({theme}) => theme.buttons.primary};
  color: ${({theme}) => theme.colors.white};
  position: absolute;
  top: 50%;
  right: 10px;
  transform: translate(0, -50%);
  border: none;
  padding: 10px 15px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
`

