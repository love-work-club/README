import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import FollowCount from '../../../molecules/FollowCount/FollowCount';
import ProfileDsc from '../../../molecules/ProfileDsc/ProfileDsc';
import ProfileImg from '../../../molecules/ProfileImg/ProfileImg';
import ButtonGroupYour from '../../../molecules/ButtonGroupYour/ButtonGroupYour';

const ProfileYourWrapper = styled.div`
    width: 390px;
    padding-top: 30px;
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

export default function ProfileYourOrg() {
    // 상대 프로필 가져오기
    const [profile, setProfile] = useState({});
    const API_HOST = 'https://mandarin.api.weniv.co.kr/';
    const token =
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzOWM0MjViMTdhZTY2NjU4MWM2NTE4MCIsImV4cCI6MTY3Njc4NDU4NiwiaWF0IjoxNjcxNjAwNTg2fQ.-iJYh4ugLMcsAfzft3y2U6DyO2O3MVwYRG3Pq_DePto';

    const config = {
        method: 'get',
        url: `${API_HOST}profile/dotory`,
        headers: {
            'Content-type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
    };

    useEffect(() => {
        axios(config)
            .then(res => {
                setProfile(res.data.profile);
                console.log(res.data.profile);
            })
            .catch(err => {
                console.log(err);
            });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <ProfileYourWrapper>
            <CounterDiv>
                <FollowCount count={profile.followerCount} kind="follower" />
                <ProfileImg src={API_HOST + profile.image} alt="ProfileImg" />
                <FollowCount count={profile.followingCount} kind="following" />
            </CounterDiv>
            <ProfileDsc username={profile.username} userId={profile.accountname} userDesc={profile.intro} />
            <ButtonGroupYour />
        </ProfileYourWrapper>
    );
}
