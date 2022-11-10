import styled from "styled-components";

export const Divider = styled.main`
  display: flex;
  flex-direction: row;
  gap: 20px;
`

export const Content = styled.section<{ width: string }>`
  width: ${({width}) => width};
  display: flex;
  flex-direction: column;
  gap: 20px;
`