import styled from "styled-components";
import {device} from "../styles/theme";

interface InnerContainerProps {
    direction?: "row" | "column";
    justifyContent?: "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly";
    alignItems?: "flex-start" | "flex-end" | "center";
    gap?: number;
    position?: "relative" | "absolute" | "fixed" | "sticky";
}

interface FlexContainer {
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
  min-height: calc(100vh - 194px);
  margin: 0 auto;
  padding: 20px 0;
  display: flex;
  gap: ${({gap}) => gap ? `${gap}px` : "20px"};
  flex-direction: ${({direction}) => direction ? direction : "column"};
  justify-content: ${({justifyContent}) => justifyContent ? justifyContent : undefined};
  align-items: ${({alignItems}) => alignItems ? alignItems : undefined};
  overflow-x: auto;
  position: ${({position}) => position ? position : null};

  @media only screen and ${device.desktopL} {
    max-width: 1920px;
    margin: 0 auto;
  }

  @media only screen and ${device.laptop} {
    min-height: calc(100vh - 192px);
  }

  @media only screen and ${device.mobileL} {
    min-height: calc(100vh - 172px);
  }
`

export const Flex = styled.div<FlexContainer>`
  width: ${({width}) => width ? `${width}px` : "100%"};
  display: flex;
  flex-direction: ${({direction}) => direction ? direction : "column"};
  align-items: ${({align}) => align ? align : "center"};
  justify-content: ${({justify}) => justify ? justify : "space-between"};
  gap: ${({gap}) => gap ? `${gap}px` : null};
  padding: ${({padding}) => padding ? `${padding}px` : null};
`

export const H1 = styled.h1`
  width: 100%;
  font-size: 38px;
  text-align: center;

  @media only screen and ${device.laptop} {
    font-size: 28px;
  }

  @media only screen and ${device.mobileL} {
    font-size: 25px;
  }

  @media only screen and ${device.mobileM} {
    font-size: 20px;
  }
`

export const H2 = styled.h2<{ color?: string }>`
  width: 100%;
  font-size: 32px;
  text-align: center;
  color: ${({color}) => color ? color : "inherit"};

  @media only screen and ${device.laptop} {
    font-size: 28px;
  }

  @media only screen and ${device.mobileL} {
    font-size: 22px;
  }

  @media only screen and ${device.mobileM} {
    font-size: 20px;
  }
`

export const H3 = styled.h3`
  width: 100%;
  font-size: 28px;
  text-align: center;

  @media only screen and ${device.laptop} {
    font-size: 22px;
  }

  @media only screen and ${device.mobileL} {
    font-size: 20px;
  }

  @media only screen and ${device.mobileM} {
    font-size: 18px;
  }
`

export const H4 = styled.h4<{ color?: string }>`
  color: ${({color}) => color ? color : null};
  width: 100%;
  font-size: 25px;
  text-align: center;

  @media only screen and ${device.laptop} {
    font-size: 20px;
  }

  @media only screen and ${device.mobileL} {
    font-size: 18px;
  }

  @media only screen and ${device.mobileM} {
    font-size: 16px;
  }
`

export const P1 = styled.p<{ color?: string, fontWeight?: 400 | 500 | 600, textAlign?: "center" | "justify" | "start" | "end" }>`
  font-size: 20px;
  line-height: 30px;
  text-align: ${({textAlign}) => textAlign ? textAlign : "inherit"};
  color: ${({color}) => color ? color : "inherit"};
  font-weight: ${({fontWeight}) => fontWeight ? fontWeight : "inherit"};

  @media only screen and ${device.laptop} {
    font-size: 18px;
    line-height: 24px;
  }
`

export const Link = styled.a`
  color: ${({theme}) => theme.buttons.primary};
  font-size: inherit;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`

export const UL = styled.ul`
  font-size: 20px;
  list-style: disc inside !important;

  @media only screen and ${device.laptop} {
    font-size: 18px;
  }
`

export const LI = styled.li`
  padding: 10px;
`

export const Spinner = styled.div<{ size?: number }>`
  animation: 1.5s linear infinite spinner;
  animation-play-state: inherit;
  border: solid 5px #cfd0d1;
  border-bottom-color: ${({theme}) => theme.buttons.primary};
  border-radius: 50%;
  height: ${({size}) => size ? `${size}px` : "20px"};
  width: ${({size}) => size ? `${size}px` : "20px"};
  will-change: transform;

  @keyframes spinner {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`