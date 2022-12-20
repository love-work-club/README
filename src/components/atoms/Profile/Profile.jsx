import React from 'react';
import styled from 'styled-components';
import defaultTheme from '../../../commons/style/themes/default';
import IconProfile from '../../../assets/icons/nav-profile.svg';

const ProfileBtnIcon = styled.button`
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

export default function Profile() {
    return (
        <ProfileBtnIcon>
            <img src={IconProfile} alt="프로필 버튼" />
            <MenuDsc>프로필</MenuDsc>
        </ProfileBtnIcon>
    );
}
