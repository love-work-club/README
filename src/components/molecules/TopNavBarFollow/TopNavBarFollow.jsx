import React from 'react';
import styled from 'styled-components';
import defaultTheme from '../../../commons/style/themes/default';
import { TopNavBarWrapBg } from '../../atoms/TopNavBarWrap/TopNavBarWrap';
import BackBtn from '../../atoms/BackBtn/BackBtn';

const TopNavBarWrapBgModi = styled(TopNavBarWrapBg)`
    justify-content: flex-start;
`;

const NavBarTitle = styled.strong`
    font-size: ${defaultTheme.fontSize.base};
    font-weight: bolder;
`;

export default function TopNavBarFollow({ children }) {
    return (
        <TopNavBarWrapBgModi>
            <BackBtn />
            <NavBarTitle>{children}</NavBarTitle>
        </TopNavBarWrapBgModi>
    );
}
