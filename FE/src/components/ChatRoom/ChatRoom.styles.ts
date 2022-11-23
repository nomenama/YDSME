import styled from "styled-components";

export const ChatRoomContainer = styled.section`
  width: 100%;
  height: 100%;
  max-height: 60vh;
  min-height: 60vh;
  border: 1px solid white;
  border-radius: 4px;
  background-color: white;
  overflow: hidden;
  position: relative;
  display: flex;
`

export const SignInContainer = styled.div`
  min-width: 100%;
  min-height: 100%;
  border-radius: 2px;
`

export const EnterNameContainer = styled.div`
  width: 80%;
  max-width: 400px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 40px;
  box-shadow: rgba(0, 0, 0, 0.05) 0 6px 24px 0, rgba(0, 0, 0, 0.08) 0 0 0 1px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 2px;
  background-color: ${({theme}) => theme.colors.primary_10};
`