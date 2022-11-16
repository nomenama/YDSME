import styled from "styled-components";
import {device} from "styles/theme";

export const FormModalContainer = styled.div`
  width: 100%;
  max-width: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1000;
`

export const EventForm = styled.form`
  width: 100%;
  max-width: 600px;
  border: 1px solid ${({theme}) => theme.colors.primary};
  display: flex;
  flex-direction: column;
  gap: 20px;
  background-color: ${({theme}) => theme.colors.white};
  margin: 0 20px;
  padding: 20px;
  border-radius: 2px;
`

export const SelectDropDown = styled.select`
  width: 80%;
  padding: 5px;
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  border: 1px solid lightgrey;
  border-radius: 2px;
  outline: ${({theme}) => theme.buttons.primary};

  @media only screen and ${device.laptop} {
    width: 70%;
  }
`

export const SelectOption = styled.option`
  font-family: "Roboto", sans-serif;
  font-weight: 500;
  font-size: 16px;
`