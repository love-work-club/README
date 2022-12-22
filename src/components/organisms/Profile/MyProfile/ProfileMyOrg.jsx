import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import ProfileImage from '../../../../assets/images/default_profile_user.svg';
import FollowCount from '../../../molecules/FollowCount/FollowCount';
import ProfileDsc from '../../../molecules/ProfileDsc/ProfileDsc';
import ProfileImg from '../../../molecules/ProfileImg/ProfileImg';
import ButtonGroupMy from '../../../molecules/ButtonGroupMy/ButtonGroupMy';

const ProfileMyWrapper = styled.div`
    width: 390px;
    height: 314px;
    margin: 0 auto;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

const CounterDiv = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`;

export default function ProfileMyOrg() {
    // 나의 프로필 정보 가져오기
    const [profile, setProfile] = useState([]);
    const API_HOST = 'https://mandarin.api.weniv.co.kr/';
    const token =
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYTQxNjkxMTdhZTY2NjU4MWVkZGRlYiIsImV4cCI6MTY3Njg4MjEyMSwiaWF0IjoxNjcxNjk4MTIxfQ.kOmzsz-l1wU5bZ0bl4R30u5SooaO22Xp8MgI2zJK82k';

    const config = {
        method: 'get',
        url: `${API_HOST}user/myinfo`,
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-type': 'application/json',
        },
    };

    useEffect(() => {
        axios(config)
            .then(res => {
                setProfile(res.data.user);
                console.log(res.data.user);
            })
            .then(err => console.log(err));
    }, []);

    return (
        <ProfileMyWrapper>
            <CounterDiv>
                <FollowCount count={profile.followerCount} kind="follower" />
                <ProfileImg src={API_HOST + profile.image} alt="ProfileImg" />
                <FollowCount count={profile.followingCount} kind="following" />
            </CounterDiv>
            <ProfileDsc username={profile.username} userId={profile.accountname} userDesc={profile.intro} />
            <ButtonGroupMy />
        </ProfileMyWrapper>
    );
}
