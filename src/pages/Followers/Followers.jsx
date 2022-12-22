import React from 'react';
import UserList from '../../components/atoms/UserList/UserList';
import TopNavBarFollowers from '../../components/molecules/TopNavBarFollowers/TopNavBarFollowers';

export default function Followers() {
    return (
        <>
            <TopNavBarFollowers />
            <UserList />
        </>
    );
}
