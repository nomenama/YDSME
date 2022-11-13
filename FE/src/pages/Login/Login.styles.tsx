import styled from "styled-components";
import {device} from "styles/theme";

export const LoginForm = styled.form`
  width: 100%;
  max-width: 500px;
  background-color: ${({theme}) => theme.colors.white};
  box-shadow: rgba(50, 50, 93, 0.25) 0 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
  border-radius: 3px;
  padding: 20px;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
`

export const GroupContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export const Label = styled.label`
  font-size: 18px;
  color: ${({theme}) => theme.colors.primary};

  @media only screen and ${device.laptop} {
    font-size: 16px;
  }
`

export const Input = styled.input`
  font-family: inherit;
  padding: 5px;
  border-radius: 2px;
  border: 1px solid #ced4da;
  outline-color: ${({theme}) => theme.buttons.primary};
  font-size: 18px;

  @media only screen and ${device.laptop} {
    font-size: 16px;
  }
`

export const SecondaryButton = styled.button`
  font-family: inherit;
  font-size: 18px;
  background-color: ${({theme}) => theme.buttons.primary};
  color: ${({theme}) => theme.colors.white};
  border: 1px solid ${({theme}) => theme.buttons.primary};
  border-radius: 2px;
  padding: 5px 10px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  outline-color: ${({theme}) => theme.buttons.secondary};

  @media only screen and ${device.laptop} {
    font-size: 16px;
  }

  &:disabled {
    opacity: 0.5;
    cursor: default;
  }
`