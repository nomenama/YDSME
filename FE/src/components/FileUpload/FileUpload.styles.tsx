import styled from "styled-components";

export const FileUploadContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`

export const UploadForm = styled.form`
  border: 3px dotted lightgrey;
  border-radius: 2px;
  min-height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: grey;
  cursor: pointer;
`

export const DragNDrop = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  padding: 20px;
  gap: 20px;
`

export const FileArray = styled.div`
  width: 100%;
  max-height: 200px;
  background-color: transparent;
  font-size: 18px;
  overflow-x: hidden;
  overflow-y: auto;
`

export const FileName = styled.button`
  width: 100%;
  background-color: transparent;
  border: none;
  color: ${({theme}) => theme.colors.primary};
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: flex-start;
  border-radius: 2px;

  &:hover {
    background-color: ${({theme}) => theme.colors.primary};
    color: ${({theme}) => theme.colors.white}
  }
`