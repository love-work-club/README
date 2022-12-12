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
  font-size: 0.8rem;
`

const ErrorMessage = styled.span`
  font-size: 0.8rem;
  color: #EB5757;
` 

export {StyledInput, StyledLabel, ErrorMessage}