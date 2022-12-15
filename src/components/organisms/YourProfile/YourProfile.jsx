import React from 'react';
import styled from 'styled-components';
import FeedComment from '../../../assets/icons/message-btn.svg';
import ProfileShare from '../../../assets/icons/share-btn.svg';
import ProfileImage from '../../../assets/profileImg.png';
import Button from '../../atoms/Button/Button';
import FollowCount from './FollowCountStyle';
import ProfileDesc from './ProfileDescStyle';
import ProfileImg from './ProfileImgStyle';

const YourProfileWrapper = styled.div`
    width: 390px;
    height: 314px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
`;

export default function YourProfile() {
    return (
        <YourProfileWrapper>
            <FollowCount count={5000} kind="follower"></FollowCount>
            <ProfileImg src={ProfileImage} alt="ProfileImg" />
            <FollowCount count={2920} kind="follow"></FollowCount>
            <ProfileDesc username="단발의 최양락" userId="README_Yangrak" userDesc="~~~~~~"></ProfileDesc>
            <a href="/comment">
                <img src={FeedComment} alt="" />
            </a>
            <Button size="mediumSmall">팔로우</Button>
            <a href="/profile">
                <img src={ProfileShare} alt="profileShare" />
            </a>
        </YourProfileWrapper>
    );
}
