import styled from "styled-components";

export const BoilerContainer = styled.main`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
  gap: 20px;
  align-items: center;
  flex-wrap: wrap;
`


export const PDFContainer = styled.a`
  color: ${({theme}) => theme.buttons.primary};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
  gap: 20px;
  cursor: pointer;
  transition: color 300ms ease;
  text-decoration: none;

  &:hover {
    color: ${({theme}) => theme.colors.primary_10};
  }
`