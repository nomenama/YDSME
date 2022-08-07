import styled, { css } from "styled-components";
import {theme} from "../../styles/theme";

export const Container = styled.div`
  position: relative;
  display: block;
  width: 100%;
  height: 50px;
  overflow: hidden;
`

export const Marquee = styled.div`
  position: absolute;
  display: block;
  margin: auto auto;
  white-space: nowrap;
  overflow: hidden;
  min-width: 100%;
  height: 100%;
`

export const Span = styled.span`
  display: inline-block;
  padding-left: 100%;
  font-family: 'Roboto', sans-serif;
  text-align: center;
  -webkit-text-stroke: 1px ${theme.colors.primary};
  white-space: nowrap;
  min-width: 100%;
  height: 100%;
  line-height: 50px;
  font-size: 2rem;
  animation: marquee 20s linear infinite;
  
  @keyframes marquee {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(-100%, 0);
    }
  }
`