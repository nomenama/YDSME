import styled from "styled-components";
import {device} from "../../styles/theme";

export const CardContainer = styled.main`
  width: 100%;
  max-width: 1090px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
  justify-content: center;

  @media only screen and ${device.laptop} {
    grid-template-columns: 1fr 1fr;
  };

  @media only screen and ${device.mobileL} {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  };
`

export const EmailTag = styled.a`
  overflow: hidden;
`