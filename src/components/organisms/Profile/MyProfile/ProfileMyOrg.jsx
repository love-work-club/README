import React from 'react';
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
    return (
        <ProfileMyWrapper>
            <CounterDiv>
                <FollowCount count={5000} kind="follower" />
                <ProfileImg src={ProfileImage} alt="ProfileImg" />
                <FollowCount count={2920} kind="follow" />
            </CounterDiv>
            <ProfileDsc
                username="단발의 최양락"
                userId="@ README_Name"
                userDesc="안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요"
            />
            <ButtonGroupMy />
        </ProfileMyWrapper>
    );
}
