import React from 'react';
import styled from 'styled-components';
import defaultTheme from '../../../commons/style/themes/default';

export const TopNavBarWrapBg = styled.div`
    width: 100%;
    height: 48px;
    padding: 10px 20px 8px;
    background-color: ${defaultTheme.palette.white};
    border-bottom: 1px solid ${defaultTheme.palette.primary};
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;
    position: fixed;
`;

function TopNavBarWrap() {
    return <TopNavBarWrapBg></TopNavBarWrapBg>;
}

export default TopNavBarWrap;
