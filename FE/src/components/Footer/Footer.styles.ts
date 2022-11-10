import styled from "styled-components";
import {P1} from "common/index.styles";

export const Container = styled.footer`
  width: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  text-align: center;
  background-color: ${({theme}) => theme.colors.primary};
`

export const FooterText = styled(P1)`
  color: ${({theme}) => theme.colors.white};
`

export const SafetyLink = styled.a`
  color: #ffc107;
  text-decoration: none;
`