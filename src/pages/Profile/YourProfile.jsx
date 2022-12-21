import React from 'react';
import styled from 'styled-components';
import ProfileYourOrg from '../../components/organisms/YourProfile/ProfileYourOrg';
import TopNavBarBasic from '../../components/molecules/TopNavBarBasic/TopNavBarBasic';
import { Empty } from './Empty';
import OnSale from './OnSale';
import PostList from './PostList';
import BottomNavBarBasic from '../../components/molecules/BottomNavBarBasic/BottomNavBarBasic';

const YourProfileWrapper = styled.div``;

export default function YourProfile() {
    return (
        <YourProfileWrapper>
            <TopNavBarBasic />
            <ProfileYourOrg />
            <OnSale />
            <PostList />
            <BottomNavBarBasic />
        </YourProfileWrapper>
    );
}
