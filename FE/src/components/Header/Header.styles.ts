import styled, {css} from "styled-components";
import {device} from "../../styles/theme";
import {IoMdClose} from "react-icons/io";
import {GiHamburgerMenu} from "react-icons/gi";

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

  @media only screen and ${device.laptop} {
    height: 80px;
  }

  @media only screen and ${device.mobileL} {
    height: 60px;
  }
`

export const InnerContainer = styled.div`
  width: 90%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  gap: 20px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  @media only screen and ${device.desktopL} {
    max-width: 1920px;
    margin: 0 auto;
  }
`

export const NavContainer = styled.nav`
  display: flex;
  gap: 25px;
  align-items: center;

  @media only screen and ${device.laptop} {
    gap: 15px;
  }

  @media only screen and ${device.tablet} {
    display: none;
  }
`

export const Logo = styled.img`
  width: 100%;
  max-width: 80px;
  height: 100%;
  max-height: 80px;
  border-radius: 50%;
  cursor: pointer;

  @media only screen and ${device.laptop} {
    max-width: 60px;
    max-height: 60px;
  }

  @media only screen and ${device.mobileL} {
    max-width: 40px;
    max-height: 40px;
  }
`

export const DrawerHamburger = styled(GiHamburgerMenu)`
  color: ${({theme}) => theme.colors.white};
  transition: color 200ms ease-in-out;
  cursor: pointer;

  &:hover {
    color: ${({theme}) => theme.buttons.primary};
  }
`

export const CloseNavBar = styled(IoMdClose)<{ onClick: () => void }>``

export const Hamburger = styled(GiHamburgerMenu)<{ onClick: () => void }>`
  display: none;
  cursor: pointer;
  color: ${({theme}) => theme.colors.white};
  transition: color 200ms ease-in-out;

  &:hover {
    color: ${({theme}) => theme.buttons.primary};
  }

  @media only screen and ${device.tablet} {
    display: block;
  }
`

export const Button = styled.button<ButtonProps>`
  padding: 10px 0;
  font-family: Roboto, sans-serif;
  font-size: 2rem;
  font-weight: bold;
  color: ${({color, theme}) => color ? color : theme.colors.white};
  background-color: ${({backgroundColor}) => backgroundColor ? backgroundColor : "transparent"};
  border: none;
  border-bottom: 3px solid transparent;
  cursor: pointer;
  transition: border-bottom-color 300ms ease-in-out,
  color 300ms ease-in-out,
  font-size 300ms ease-in-out;

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

  @media only screen and ${device.laptop} {
    font-size: 1.6rem;
  }

  @media only screen and ${device.tablet} {
    font-size: 2rem;
  }
`

export const PrimaryButton = styled.button`
  padding: 2px 15px;
  font-family: Roboto, sans-serif;
  font-size: 2rem;
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

  @media only screen and ${device.laptop} {
    font-size: 1.6rem;
  }

  @media only screen and ${device.tablet} {
    font-size: 2rem;
  }
`