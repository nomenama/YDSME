import styled from "styled-components";
import {theme} from "../../styles/theme";

export const AnnouncementContainer = styled.div`
  padding-right: 30vw;
`

export const Span = styled.span`
  font-family: 'Roboto', sans-serif;
  text-align: center;
  -webkit-text-stroke: 1px ${theme.colors.primary};
  white-space: nowrap;
  height: 100%;
  line-height: 50px;
  font-size: 2rem;
`