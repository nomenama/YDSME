import styled, {css} from "styled-components";

interface ButtonProps {
    selected?: boolean;
    color?: string;
    backgroundColor?: string;
    borderColor?: string;
}

export const Container = styled.header`
  width: 100%;
  height: 100px;
  background-color: ${({theme}) => theme.colors.primary};
`

export const NavContainer = styled.nav`
  display: flex;
  gap: 25px;
`

export const Button = styled.button<ButtonProps>`
  padding: 10px 0;
  font-size: 2em;
  font-weight: bold;
  color: ${({color, theme}) => color ? color : theme.colors.white};
  background-color: ${({backgroundColor}) => backgroundColor ? backgroundColor : "transparent"};
  border: none;
  border-bottom: 3px solid transparent;
  cursor: pointer;
  transition: border-bottom-color 300ms ease-in-out,
  color 300ms ease-in-out, 
  font-size 300ms ease-in-out
;

  
  ${({selected}) => selected && css`
    border-bottom: ${({theme}) => `3px solid ${theme.buttons.primary}`};
  `};
  
    :hover {
      border-bottom: ${({theme}) => `3px solid ${theme.buttons.primary}`};
      transform: scale(1.1);
    }
  
  :disabled {
    opacity: 0.5;
  }
`

export const LoginButton = styled.button`
  padding: 2px 15px;
  font-size: 2em;
  font-weight: bold;
  color: ${({theme}) => theme.colors.white};
  background-color: ${({theme}) => theme.buttons.primary};
  border: ${({theme}) => `3px solid ${theme.buttons.primary}`};
  border-radius: 5px;
  transition: all 200ms ease-in-out;
  cursor: pointer;
  
  :hover {
    color: ${({theme}) => theme.buttons.primary};
    background-color: ${({theme}) => theme.colors.white};
    border: 3px solid transparent;
  }
`