import styled from "styled-components";

export const TileContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 2fr;
`

export const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${({theme}) => theme.colors.white};
  background-color: ${({theme}) => theme.colors.primary};
  padding: 20px;
  box-shadow: rgba(0, 0, 0, 0.35) 0 5px 15px;
  border-bottom-left-radius: 2px;
  border-top-left-radius: 2px;
`

export const RightSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  box-shadow: rgba(0, 0, 0, 0.35) 0 5px 15px;
  position: relative;
  background-color: white;
  border-bottom-right-radius: 2px;
  border-top-right-radius: 2px;
`

export const TimeSection = styled.span`
  max-width: 100px;
  font-size: 16px;
  color: ${({theme}) => theme.colors.white};
  background-color: ${({theme}) => theme.colors.primary};
  border-radius: 25px;
  padding: 5px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 15px;

`