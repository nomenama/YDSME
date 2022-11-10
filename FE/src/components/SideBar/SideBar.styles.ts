import styled from "styled-components";

export const SideBar = styled.div<{ width?: number }>`
  width: ${({width}) => width ? `${width}px` : "100%"} !important;
  padding: 20px;
  border: 1px solid grey;
  border-radius: 2px;
  box-shadow: rgba(0, 0, 0, 0.05) 0 6px 24px 0, rgba(0, 0, 0, 0.08) 0 0 0 1px;

  &.isSticky {
    width: ${({width}) => width ? `${width}px` : "100%"} !important;
    position: fixed;
    top: 10px;
    z-index: 999;
  }
`