import React from 'react';
import styled from 'styled-components';
import UserList from '../../components/atoms/UserList/UserList';
import TopNavBarFollow from '../../components/molecules/TopNavBarFollow/TopNavBarFollow';

const FollowingsWrapper = styled.div`
    width: 100%;
`;

export default function Followings() {
    return (
        <FollowingsWrapper>
            <TopNavBarFollow children="Followings" />
            <UserList urlPath="following" />
        </FollowingsWrapper>
    );
}
