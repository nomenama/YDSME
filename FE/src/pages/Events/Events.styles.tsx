import styled from "styled-components";
import {device} from "styles/theme";

export const EventContainer = styled.main<{ column?: boolean }>`
  width: 100%;
  display: grid;
  grid-template-columns: ${({column}) => column === true ? "1fr 1fr" : "1fr"};
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
  border: 0.5px solid ${({theme}) => theme.colors.primary};
`