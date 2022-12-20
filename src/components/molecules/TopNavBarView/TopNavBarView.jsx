import React from 'react';
import styled from 'styled-components';
import { TopNavBarWrapBg } from '../../atoms/TopNavBarWrap/TopNavBarWrap';
import FeedList from '../../atoms/FeedList/FeedList';
import FeedPhoto from '../../atoms/FeedPhoto/FeedPhoto';

const TopNavBarWrapBgModi = styled(TopNavBarWrapBg)`
    justify-content: flex-end;
`;

export default function TopNavBarView() {
    return (
        <TopNavBarWrapBgModi>
            <FeedList />
            <FeedPhoto />
        </TopNavBarWrapBgModi>
    );
}
