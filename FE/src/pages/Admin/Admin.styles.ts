import styled from "styled-components";
import {device} from "styles/theme";
import {Label as Label_, Input as Input_} from "../Login/Login.styles";

export const FormContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
`

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
  width: 80%;

  @media only screen and ${device.laptop} {
    width: 70%;
  }
`

export const Select = styled.div`
  width: 80%;

  @media only screen and ${device.laptop} {
    width: 70%;
  }
`

export const CheckboxLabel = styled(Label_)`
  display: flex;
  justify-content: flex-start;
  gap: 30px;
`

export const ButtonGroup = styled.div<{ direction?: "row" | "column" }>`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: ${({direction}) => direction ? direction : "row"};
  gap: 20px;
`