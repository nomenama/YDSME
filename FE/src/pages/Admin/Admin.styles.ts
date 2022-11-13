import styled from "styled-components";
import {device} from "styles/theme";
import {Label as Label_, Input as Input_} from "../Login/Login.styles";

export const Form = styled.form`
  width: 100%;
  border: 1px solid ${({theme}) => theme.colors.primary};
  border-radius: 2px;
`

export const FieldSet = styled.fieldset`
  width: 100%;
  border: none;
  border-radius: 2px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`

export const Label = styled(Label_)`
  width: 100%;
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: space-between;
`

export const Input = styled(Input_)`
  width: 90%;

  @media only screen and ${device.laptop} {
    width: 80%;
  }
`

export const Select = styled.div`
  width: 90%;

  @media only screen and ${device.laptop} {
    width: 80%;
  }
`

export const CheckboxLabel = styled(Label_)`
  display: flex;
  justify-content: flex-start;
  gap: 30px;
`

export const ButtonGroup = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  gap: 20px;
`