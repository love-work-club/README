import React from 'react';
import styled from 'styled-components';
import IconFeedPhoto from '../../../assets/icons/feed-photo.png';
import IconFeedPhotoOn from '../../../assets/icons/feed-photo-on.png';

export const FeedPhotoIcon = styled.button`
    border: none;
    background-color: transparent;
    cursor: pointer;
    margin-top: 2px;
`;

export default function FeedPhoto() {
    return (
        <FeedPhotoIcon>
            <img src={IconFeedPhoto} alt="더보기 버튼" />
            {/* <img src={IconFeedPhotoOn} alt="더보기 버튼 활성화" /> */}
        </FeedPhotoIcon>
    );
}
