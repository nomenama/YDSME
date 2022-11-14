import styled from "styled-components";
import {device, theme} from "../../styles/theme";

export const AnnouncementContainer = styled.div`
  padding-right: 30vw;
`

export const Span = styled.span`
  font-family: 'Roboto', sans-serif;
  text-align: center;
  -webkit-text-stroke: 1px ${theme.colors.primary};
  white-space: nowrap;
  height: 100%;
  line-height: 30px;
  font-size: 2rem;

  @media only screen and ${device.laptop} {
    font-size: 1.8rem;
  }

  @media only screen and ${device.mobileL} {
    font-size: 1.6rem;
  }

  @media only screen and ${device.mobileM} {
    font-size: 1.4rem;
  }
`