import styled from 'styled-components';

export const StyledInput = styled.input`
    border: none;
    border-bottom: 1px solid black;
    margin: 5px 0 16px;
    width: 100%;
    padding: 5px 0;

    &:focus {
        outline: none;
    }
`;

export const StyledLabel = styled.label`
    position: relative;
    width: 100%;
    font-size: 12px;
    align-self: start;
    margin-bottom: 10px;
`;

export const ErrorMessage = styled.span`
    font-size: 12px;
    color: #eb5757;
    align-self: start;
    position: absolute;
    width: 100%;
    left: 0;
    bottom: 0;
    visibility: hidden;
`;
