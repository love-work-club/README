import React from 'react';
import { Link } from 'react-router-dom';
import FeedComment from '../../assets/icons/feed-comment.png';
import ProfileShare from '../../assets/icons/profile-share.png';
import ProfileImage from '../../assets/profileImg.png';
import { YourProfileWrapper } from './style';
import Button from '../atoms/Button/Button';

export default function MyProfile() {
    return (
        <YourProfileWrapper>
            <span>2950</span>
            <span>followers</span>
            <img src={ProfileImage} alt="" />
            <span>128</span>
            <span>followings</span>
            <p>사용자 이름~~~~~~~~~~~~</p>
            <p>@README_ID</p>
            <p>내 서재 ~~~~~~~~~~~~~~</p>
            <button>
                <img src={FeedComment} alt="" />
            </button>
            <Button size="mediumSmall">팔로우</Button>
            <button>
                <img src={ProfileShare} alt="" />
            </button>
        </YourProfileWrapper>
    );
}
