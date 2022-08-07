import styled from "styled-components";
import {device} from "../styles/theme";

interface InnerContainerProps {
    direction?: "row" | "column";
    justifyContent?: "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly";
    alignItems?: "flex-start" | "flex-end" | "center";
    gap?: number;
    position?: "relative" | "absolute" | "fixed" | "sticky";
}

interface Flex {
    width?: number;
    direction?: "row" | "column";
    align?: "center" | "flex-start" | "flex-end";
    justify?: "space-between" | "center" | "flex-start" | "flex-end" | "space-around" | "space-evenly";
    gap?: number;
    padding?: number;
}

export const PageContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  height: 100%;
  overflow: hidden;
`

export const InnerContainer = styled.div<InnerContainerProps>`
  width: 90%;
  height: 100%;
  margin: 0 auto;
  padding: 20px 0;
  display: flex;
  gap: ${({gap}) => gap ? `${gap}px` : undefined};
  flex-direction: ${({direction}) => direction ? direction : "row"};
  justify-content: ${({justifyContent}) => justifyContent ? justifyContent : undefined};
  align-items: ${({alignItems}) => alignItems ? alignItems : undefined};
  overflow-x: auto;
  position: ${({position}) => position ? position : null};

  @media only screen and ${device.desktopL} {
    max-width: 1920px;
    margin: 0 auto;
  }
`

export const Flex = styled.div<Flex>`
  width: ${({width}) => width ? `${width}px` : "100%"};
  display: flex;
  align-items: ${({align}) => align ? align : "center"};
  justify-content: ${({justify}) => justify ? justify : "space-between"};
  gap: ${({gap}) => gap ? `${gap}px` : null};
  padding: ${({padding}) => padding ? `${padding}px` : "20px"};
`