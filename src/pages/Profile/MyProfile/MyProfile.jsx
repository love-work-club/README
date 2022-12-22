import React from 'react';
import styled from 'styled-components';
import BottomNavBarBasic from '../../../components/molecules/BottomNavBarBasic/BottomNavBarBasic';
import TopNavBarBasic from '../../../components/molecules/TopNavBarBasic/TopNavBarBasic';
import ProfileMyOrg from '../../../components/organisms/Profile/MyProfile/ProfileMyOrg';
import PostList from '../../../components/organisms/PostList/PostList';
import OnSale from '../../../components/organisms/Sale/OnSale';

const MyProfileWrapper = styled.div``;

export default function MyProfile() {
    return (
        <MyProfileWrapper>
            <TopNavBarBasic />
            <ProfileMyOrg />
            <OnSale />
            <PostList />
            <BottomNavBarBasic />
        </MyProfileWrapper>
    );
}
