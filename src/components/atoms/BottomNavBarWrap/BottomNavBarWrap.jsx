import styled from 'styled-components';
import defaultTheme from '../../../commons/style/themes/default';

export const BottomNavBarWrap = styled.div`
    width: 100%;
    height: 60px;
    padding: 10px 10px;
    background-color: ${defaultTheme.palette.white};
    border-top: 1px solid ${defaultTheme.palette.primary};
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    position: fixed;
    bottom: 0;
`;
