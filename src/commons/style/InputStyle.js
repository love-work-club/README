import styled from 'styled-components';


const StyledInput = styled.input`
  border: none;
  border-bottom: 1px solid black;
  width: 100%;
  &:focus {
    outline: none;
  }
`

const StyledLabel = styled.label`
  font-size: 12px;
`

const ErrorMessage = styled.span`
  font-size: 14px;
  color: #EB5757;
  margin-bottom: 10px;
` 

export {StyledInput, StyledLabel, ErrorMessage}