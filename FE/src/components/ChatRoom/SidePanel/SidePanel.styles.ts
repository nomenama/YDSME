import styled from "styled-components";
import {device} from "styles/theme";

export const ChatSidePanel = styled.section`
  flex: 1;
  max-width: 400px;
  background-color: #3e3c61;
  display: flex;
  flex-direction: column;

  @media only screen and ${device.tablet} {
    flex: 0.5;
    font-size: 14px;
  }

  @media only screen and ${device.mobileL} {
    display: none;
  }
`

export const SideBarHeader = styled.div`
  width: 100%;
  height: 100%;
  max-height: 60px;
  background-color: #2f2d52;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
`

export const AvatarContainer = styled.div`
  display: flex;
  gap: 10px;
`

export const Avatar = styled.div<{ size?: number }>`
  width: ${({size}) => size ? `${size}px` : "30px"};
  height: ${({size}) => size ? `${size}px` : "30px"};
  border-radius: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ChangeNameButton = styled.button`
  color: ${({theme}) => theme.colors.white};
  background-color: #5d5b8d;
  border: none;
  padding: 5px 10px;
  border-radius: 2px;
  cursor: pointer;
  font-size: 12px;
`

export const SideBarContent = styled.div`
  flex: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  overflow: auto;

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-track {
    background: #3e3c61;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #3e3c61;
    border: 3px solid #2f2d52;
  }
`

export const UserAvatar = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;
  cursor: pointer;
  transition: scale 300ms ease-in-out;

  &:hover {
    transform: scale(1.04);
  }
`