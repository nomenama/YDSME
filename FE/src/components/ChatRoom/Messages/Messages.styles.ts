import styled, {css} from "styled-components";

export const ChatBody = styled.div`
  width: 100%;
  height: 100%;
  flex: 1;
  padding: 5px 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  overflow-y: auto;
  overflow-x: hidden;
  scroll-behavior: smooth;

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-track {
    background: ${({theme}) => theme.colors.white};
  }

  &::-webkit-scrollbar-thumb {
    background-color: #3e3c61;
    border: 3px solid #a7bcff;
    border-radius: 2px;
  }
`

export const MessageContent = styled.div<{ sender: "self" | "other" }>`
  display: flex;
  flex-direction: column;
  max-width: 90%;
  align-items: ${({sender}) => sender === "self" ? "flex-end" : "flex-start"};

  ${({sender}) => sender === "self" && css`
    align-self: flex-end;
  `};
`

export const Message = styled.div<{ sender: "self" | "other" }>`
  padding: 10px;
  font-size: 16px;
  border-radius: 0 10px 10px 10px;
  margin-bottom: 7px;
  line-height: 24px;
  max-width: max-content;

  ${({sender}) => sender === "self" && css`
    border-radius: 10px 0 10px 10px;
    background-color: #8da4f1;
    color: ${({theme}) => theme.colors.white};
  `};

  ${({sender}) => sender === "other" && css`
    background-color: ${({theme}) => theme.colors.white};
    color: ${({theme}) => theme.colors.primary};
  `};
`

export const ChatSpan = styled.span<{ fontWeight?: number, sender: "self" | "other" }>`
  font-size: 12px;
  font-weight: ${({fontWeight}) => fontWeight ? fontWeight : 400};
  display: flex;
  gap: 10px;

  ${({sender}) => sender === "self" && css`
    flex-direction: row-reverse;
  `};
`

export const BotChat = styled.p`
  font-size: 14px;
  color: ${({theme}) => theme.colors.primary};
`