import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import defaultTheme from '../../../commons/style/themes/default';
import { BottomNavBarWrap } from '../../atoms/BottomNavBarWrap/BottomNavBarWrap';
import HomeIcon from '../../atoms/Home/HomeIcon';
import ChatIcon from '../../atoms/Chat/ChatIcon';
import UploadIcon from '../../atoms/Upload/UploadIcon';
import Profile from '../../atoms/Profile/Profile';

const StyledNavLink = styled(NavLink)`
    color: ${defaultTheme.palette.gray3};
    &.active {
        color: red;
    }
`;

export default function BottomNavBarBasic() {
    return (
        <BottomNavBarWrap>
            <StyledNavLink to="/home">
                <HomeIcon />
            </StyledNavLink>
            <StyledNavLink to="/chat">
                <ChatIcon />
            </StyledNavLink>
            <StyledNavLink to="/upload">
                <UploadIcon />
            </StyledNavLink>
            <StyledNavLink to="/myprofile">
                <Profile />
            </StyledNavLink>
        </BottomNavBarWrap>
    );
}
