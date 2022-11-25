import styled from "styled-components";
import {device} from "styles/theme";

export const NoticeBoardContainer = styled.section`
  width: 100%;
  height: 100%;
  padding: 20px;
  min-height: calc(100vh - 220px);
  max-height: calc(100vh - 220px);
  border: 1px solid white;
  border-radius: 4px;
  background-color: rgba(0, 0, 0, 0.3);
  overflow-x: hidden;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;

  @media only screen and ${device.laptop} {
    min-height: calc(100vh - 188px);
    max-height: calc(100vh - 188px);
  }

  @media only screen and ${device.mobileL} {
    min-height: calc(100vh - 168px);
    max-height: calc(100vh - 168px);
  }
`