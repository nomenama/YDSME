import styled from "styled-components";
import {device} from "styles/theme";

export const ChatRoomContainer = styled.section`
  width: 100%;
  height: 100%;
  min-height: calc(100vh - 220px);
  max-height: calc(100vh - 220px);
  border: 1px solid white;
  border-radius: 4px;
  background-color: rgba(0, 0, 0, 0.3);
  overflow: hidden;
  position: relative;
  display: flex;

  @media only screen and ${device.laptop} {
    min-height: calc(100vh - 188px);
    max-height: calc(100vh - 188px);
  }

  @media only screen and ${device.mobileL} {
    min-height: calc(100vh - 168px);
    max-height: calc(100vh - 168px);
  }

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
  background-color: darkgray;
`