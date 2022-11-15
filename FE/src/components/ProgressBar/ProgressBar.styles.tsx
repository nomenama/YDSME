import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
`

export const ProgressBarContainer = styled.div`
  width: 100%;
  background-color: ${({theme}) => theme.colors.white};
  border-radius: 3px;
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, .2);
  position: relative;
`

export const Progress = styled.div<{ progress: number }>`
  display: block;
  height: 20px;
  width: ${({progress}) => `${progress}%`};
  background-color: ${({theme}) => theme.buttons.primary};
  border-radius: 3px;
`

export const Percentage = styled.div`
  font-size: 12px;
  position: absolute;
  left: 20px;
  top: 50%;
  transform: translate(0, -50%);
  color: ${({theme}) => theme.colors.white};
`

