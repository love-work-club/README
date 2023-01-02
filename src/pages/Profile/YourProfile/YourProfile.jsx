import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import ProfileYourOrg from '../../../components/organisms/Profile/YourProfile/ProfileYourOrg';
import TopNavBarBasic from '../../../components/molecules/TopNavBarBasic/TopNavBarBasic';
import OnSale from '../../../components/organisms/Sale/OnSale';
import PostList from '../../../components/organisms/PostList/PostList';
import BottomNavBarBasic from '../../../components/molecules/BottomNavBarBasic/BottomNavBarBasic';

const YourProfileWrapper = styled.div``;

export default function YourProfile() {
    const { accountName } = useParams();

    return (
        <YourProfileWrapper>
            <TopNavBarBasic />
            <ProfileYourOrg accountName={accountName} />
            <OnSale accountName={accountName} />
            <PostList accountName={accountName} />
            <BottomNavBarBasic />
        </YourProfileWrapper>
    );
}
