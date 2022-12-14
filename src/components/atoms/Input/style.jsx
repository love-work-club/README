import styled from 'styled-components';
import defaultTheme from '../../../commons/style/themes/default';

export const StyledInput = styled.input`
    border: none;
    border-bottom: ${props => props.borderWidth || '1px'} solid ${defaultTheme.palette.gray};
    width: ${props => props.width || '100%'};
    font-size: ${defaultTheme.fontSize.base};
    line-height: 1.4;

    &:focus {
        outline: none;
        border-color: ${defaultTheme.palette.active};
    }

    &::placeholder {
        font-size: 14px;
        line-height: 1;
        color: ${defaultTheme.palette.gray};
    }

    ::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }
`;
