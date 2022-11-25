import styled from "styled-components";
import {device} from "styles/theme";

export interface ContainerProps {
    gap?: number;
    direction?: "row" | "column";
    justify?: "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly";
    align?: "flex-start" | "flex-end" | "center";
}

export const MemberPage = styled.div`
  width: 100%;
  min-height: calc(100vh - 180px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media only screen and ${device.desktop} {
    max-width: 1920px;
    margin: 0 auto;
  };

  @media only screen and ${device.laptop} {
    min-height: calc(100vh - 148px);
  };

  @media only screen and ${device.mobileL} {
    min-height: calc(100vh - 128px);
  };
`

export const MainContainer = styled.main<ContainerProps>`
  flex: 1;
  width: 90%;
  margin: 0 auto;
  padding: 20px 0;
  display: flex;
  gap: ${({gap}) => gap ? `${gap}px` : "20px"};
  flex-direction: ${({direction}) => direction ? direction : "column"};
  justify-content: ${({justify}) => justify ? justify : "center"};
  align-items: ${({align}) => align ? align : "center"};
  overflow-x: hidden;
  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 5px;
  }

  ::-webkit-scrollbar-track {
    background: #e0eeee;
  }

  ::-webkit-scrollbar-thumb {
    background-color: #f2f2f5;
    border-radius: 20px;
    border: 3px solid #42abcc;
  }
`

export const Greeting = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 5px;
`