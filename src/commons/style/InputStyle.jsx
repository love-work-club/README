import styled from 'styled-components';


export const StyledInput = styled.input`
    border: none;
    border-bottom: 1px solid black;
    width: 100%;
    margin-bottom: 16px;
    &:focus {
        outline: none; 
    }
`

export const StyledLabel = styled.label`
    ont-size: 12px;
    align-self: start;
    margin-bottom: 6px;
`

export const ErrorMessage = styled.span`
    font-size: 12px;
    color: #EB5757;
    align-self: start;
    margin-top: 5px;
    margin-bottom: 30px;
` 
