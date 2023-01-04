import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import FollowCount from '../../../molecules/FollowCount/FollowCount';
import ProfileDsc from '../../../molecules/ProfileDsc/ProfileDsc';
import ProfileImg from '../../../molecules/ProfileImg/ProfileImg';
import AuthContext from '../../../../store/auth-context';
import ButtonGroupYour from '../../../molecules/ButtonGroupYour/ButtonGroupYour';

const ProfileYourWrapper = styled.div`
    width: 390px;
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
    padding-top: 30px;
`;

export default function ProfileYourOrg({ accountName, ...props }) {
    // 상대 프로필 가져오기
    const [profile, setProfile] = useState({});
    const API_HOST = process.env.REACT_APP_BASE_URL;
    const token = useContext(AuthContext).token;

    const config = {
        method: 'get',
        url: `${API_HOST}/profile/${accountName}`,
        headers: {
            'Content-type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
    };

    useEffect(() => {
        axios(config)
            .then(res => {
                setProfile(res.data.profile);
                console.log(res.data);
            })
            .catch(err => {
                console.log(err);
            });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <ProfileYourWrapper>
            <CounterDiv>
                <FollowCount count={profile.followerCount} kind="followers" accountName={profile.accountname} />
                <ProfileImg src={profile.image} alt="ProfileImg" />
                <FollowCount count={profile.followingCount} kind="followings" accountName={profile.accountname} />
            </CounterDiv>
            <ProfileDsc username={profile.username} userId={profile.accountname} userDesc={profile.intro} />
            <ButtonGroupYour profile={profile} />
        </ProfileYourWrapper>
    );
}
