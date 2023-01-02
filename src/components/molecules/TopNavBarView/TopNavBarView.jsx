import React from 'react';
import styled from 'styled-components';
import { TopNavBarWrapBg } from '../../atoms/TopNavBarWrap/TopNavBarWrap';
import FeedList from '../../atoms/FeedList/FeedList';
import FeedPhoto from '../../atoms/FeedPhoto/FeedPhoto';

const TopNavBarWrapBgModi = styled(TopNavBarWrapBg)`
    justify-content: flex-end;
    position: relative;
`;

export default function TopNavBarView({ childToParent, isList }) {
    return (
        <TopNavBarWrapBgModi>
            <FeedList childToParent={childToParent} isList={isList} />
            <FeedPhoto childToParent={childToParent} isList={isList} />
        </TopNavBarWrapBgModi>
    );
}
