import styled from 'styled-components';
import defaultTheme from '../../../commons/style/themes/default';

export const PostModalUl = styled.ul`
    width: 100%;
    padding: 36px 0 28px;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    background-color: ${defaultTheme.palette.white};
    position: fixed;
    bottom: 0;
    right: 0;
    z-index: 11;

    &::after {
        content: '';
        position: absolute;
        top: 16px;
        left: 50%;
        transform: translateX(-50%);
        width: 50px;
        height: 4px;
        border-radius: 2px;
        background-color: ${defaultTheme.palette.gray};
    }
`;

export const PostModalList = styled.li`
    padding: 16px 26px;
    cursor: pointer;
    font-size: ${defaultTheme.fontSize.sm};
    background-color: ${defaultTheme.palette.white};
`;
