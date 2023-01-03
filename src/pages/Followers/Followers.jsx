import React from 'react';
import styled from 'styled-components';
import UserList from '../../components/atoms/UserList/UserList';
import TopNavBarFollow from '../../components/molecules/TopNavBarFollow/TopNavBarFollow';

const FollowersWrapper = styled.div`
    width: 100%;
`;

export default function Followers() {
    return (
        <FollowersWrapper>
            <TopNavBarFollow children="Followers" />
            <UserList urlPath="follower" />
        </FollowersWrapper>
    );
}
