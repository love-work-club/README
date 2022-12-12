import styled from 'styled-components';


export const StyledInput = styled.input`
    border: none;
    border-bottom: 1px solid black;
    width: 100%;
    &:focus {
        outline: none; 
    }
`

export const StyledLabel = styled.label`
    ont-size: 12px;
    align-self: start;
`

export const ErrorMessage = styled.span`
    font-size: 12px;
    color: #EB5757;
    align-self: start;
    margin-top: 5px;
` 

