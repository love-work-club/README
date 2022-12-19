import React from 'react';
import styled from 'styled-components';
import ProfileImage from '../../../assets/profileImg.png';
import FollowCount from './FollowCount';
import ProfileDsc from './ProfileDsc';
import ProfileImg from './ProfileImg';
import ButtonGroup from './ButtonGroup';

const YourProfileWrapper = styled.div`
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

export default function YourProfile() {
    return (
        <YourProfileWrapper>
            <CounterDiv>
                <FollowCount count={5000} kind="follower" />
                <ProfileImg src={ProfileImage} alt="ProfileImg" />
                <FollowCount count={2920} kind="follow" />
            </CounterDiv>
            <ProfileDsc
                username="단발의 최양락"
                userId="@ README_Yangrak"
                userDesc="안녕하세요안녕하세요안녕하세요안녕하세요안녕하세요"
            />
            <ButtonGroup />
        </YourProfileWrapper>
    );
}
