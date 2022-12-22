import React from 'react';
import styled from 'styled-components';
import defaultTheme from '../../../commons/style/themes/default';
import { TopNavBarWrapBg } from '../../atoms/TopNavBarWrap/TopNavBarWrap';
import BackBtn from '../../atoms/BackBtn/BackBtn';

const TopNavBarWrapBgModi = styled(TopNavBarWrapBg)`
    justify-content: flex-start;
`;

const FollowerList = styled.strong`
    font-size: ${defaultTheme.fontSize.base};
    font-weight: bolder;
`;

export default function TopNavBarFollowers() {
    return (
        <TopNavBarWrapBgModi>
            <BackBtn />
            <FollowerList>Followers</FollowerList>
        </TopNavBarWrapBgModi>
    );
}
