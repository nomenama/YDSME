import styled from "styled-components";
import {device} from "styles/theme";

export const PageContainer = styled.div`
  width: 100%;
  min-height: calc(100vh - 180px);
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media only screen and ${device.desktop} {
    max-width: 1920px;
    margin: 0 auto;
  };

  @media only screen and ${device.laptop} {
    height: calc(100vh - 148px);
  };

  @media only screen and ${device.mobileL} {
    height: calc(100vh - 128px);
  };
`

export const MainContainer = styled.main`
  width: 90%;
  margin: 0 auto;
  padding: 20px 0;

`

export const Greeting = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 5px;
`