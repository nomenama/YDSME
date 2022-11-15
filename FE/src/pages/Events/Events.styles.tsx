import styled from "styled-components";
import {device} from "styles/theme";

export const EventContainer = styled.main`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;

  @media only screen and ${device.tablet} {
    grid-template-columns: 1fr;
  };
`

export const Column = styled.article`
  display: flex;
  flex-direction: column;
  gap: 20px;
  box-shadow: rgba(0, 0, 0, 0.35) 0 5px 15px;
  border-radius: 2px;
  padding: 20px;
  border: 1px solid ${({theme}) => theme.colors.primary};
`