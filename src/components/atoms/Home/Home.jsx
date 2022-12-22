import React from 'react';
import styled from 'styled-components';
import defaultTheme from '../../../commons/style/themes/default';
import IconHome from '../../../assets/icons/nav-home.svg';

const HomeBtnIcon = styled.button`
    width: 84px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: transparent;
    cursor: pointer;
`;

const MenuDsc = styled.span`
    align-self: center;
    margin-top: 7px;
    font-size: ${defaultTheme.fontSize.sm};
    color: ${defaultTheme.palette.gray3};
`;

export default function Home() {
    return (
        <HomeBtnIcon>
            <img src={IconHome} alt="뒤로가기 버튼" />
            <MenuDsc>홈</MenuDsc>
        </HomeBtnIcon>
    );
}
