import React from 'react';
import styled from 'styled-components';
import IconFeedList from '../../../assets/icons/feed-list.png';
import IconFeedListOn from '../../../assets/icons/feed-list-on.png';

export const FeedListIcon = styled.button`
    border: none;
    margin-right: 14px;
    background-color: transparent;
    cursor: pointer;
    margin-top: 2px;
`;

export default function FeedList({ childToParent, isList }) {
    return (
        <FeedListIcon
            onClick={() => {
                childToParent(true);
            }}
        >
            <img src={isList ? IconFeedListOn : IconFeedList} alt="리스트 보기 아이콘 활성화" />
        </FeedListIcon>
    );
}
