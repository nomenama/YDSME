import styled from "styled-components";

export const List = styled.a`
  width: 100%;
  color: ${({theme}) => theme.buttons.primary};
  background-color: #3f3d3d;
  border-radius: 3px;
  overflow: hidden;
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  transition: color 300ms ease, background-color 300ms ease;

  &:hover {
    color: lightgrey;
    background-color: ${({theme}) => theme.buttons.primary};
  }
`