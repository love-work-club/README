import styled, { css } from 'styled-components';
import defaultTheme from '../../../commons/style/themes/default';

const StyledButton = styled.button`
    text-align: center;
    margin: 0 auto;
    border: none;
    background-color: ${props => props.backgroundColor || defaultTheme.palette.primary};
    color: ${defaultTheme.palette.white};
    cursor: pointer;
    &:active:not(:disabled) {
        background: ${defaultTheme.palette.white};
        color: ${defaultTheme.palette.active};
        border: 0px solid ${defaultTheme.palette.gray};
    }
    &:disabled {
        background: ${defaultTheme.palette.disable};
        cursor: default;
    }
    ${props =>
        props.size === 'large' &&
        css`
            width: 322px;
            padding: 18px 0;
            border-radius: 44px;
            font-size: ${defaultTheme.fontSize.base};
        `}
    ${props =>
        props.size === 'medium' &&
        css`
            width: 120px;
            padding: 8px 0;
            border-radius: 30px;
            font-size: ${defaultTheme.fontSize.base};
        `}
    ${props =>
        props.size === 'mediumSmall' &&
        css`
            width: 90px;
            padding: 7px 0;
            border-radius: 32px;
            font-size: ${defaultTheme.fontSize.base};
        `}
    ${props =>
        props.size === 'small' &&
        css`
            width: 56px;
            padding: 7px 0;
            border-radius: 26px;
            font-size: ${defaultTheme.fontSize.sm};
        `}
`;

export default function Button({ disabled, size, onClick, type, children, className, backgroundColor }) {
    return (
        <StyledButton
            className={className}
            disabled={disabled}
            size={size}
            onClick={onClick}
            type={type || 'button'}
            backgroundColor={backgroundColor}
        >
            {children}
        </StyledButton>
    );
}
