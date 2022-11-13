import styled from "styled-components";

export const SearchBarContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 20px;
`

export const SearchInput = styled.input.attrs({type: "search"})`
  width: 100%;
  height: 32px;
  max-width: 400px;
  padding: 5px;
  border-radius: 3px;
  border: 1px solid ${({theme}) => theme.colors.primary};
  outline-color: ${({theme}) => theme.buttons.primary};
`