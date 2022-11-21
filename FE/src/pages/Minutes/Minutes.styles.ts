import styled from "styled-components";
import {device} from "styles/theme";

export const MinutesContainer = styled.main`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;

  @media only screen and ${device.mobileL} {
    justify-content: center;
    align-items: flex-start;
  }

`