import styled from "styled-components";

interface InnerContainerProps {
    direction?: "row" | "column";
    justifyContent?: "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly";
    alignItems?: "flex-start" | "flex-end" | "center";
    gap?: number;
}

export const PageContainer = styled.div`
  width: 100%;
  height: 100%;
  overflow-x: auto;
`

export const InnerContainer = styled.div<InnerContainerProps>`
  width: 100%;
  height: 100%;
  max-width: 1920px;
  margin: 0 auto;
  display: flex;
  gap: ${({gap}) => gap ? `${gap}px` : undefined};
  flex-direction: ${({direction}) => direction ? direction : "row"};
  justify-content: ${({justifyContent}) => justifyContent ? justifyContent : undefined};
  align-items: ${({alignItems}) => alignItems ? alignItems : undefined};
  overflow-x: auto;
`