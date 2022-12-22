import React from 'react';
import styled from 'styled-components';
import UserList from '../../components/atoms/UserList/UserList';
import TopNavBarFollowers from '../../components/molecules/TopNavBarFollowers/TopNavBarFollowers';

const FollowersWrapper = styled.div`
    width: 100%;
`;

export default function Followers() {
    return (
        <FollowersWrapper>
            <TopNavBarFollowers />
            <UserList />
        </FollowersWrapper>
    );
}
