import styled from 'styled-components';
import defaultTheme from '../../../commons/style/themes/default';

export const PostModalUl = styled.ul`
    width: 390px;
    padding: 36px 0 28px;
    border-radius: 8px;
    background-color: ${defaultTheme.palette.white};
    position: relative;

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
