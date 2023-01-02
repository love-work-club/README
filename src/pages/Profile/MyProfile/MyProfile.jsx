import React, { useContext } from 'react';
import styled from 'styled-components';
import AuthContext from '../../../store/auth-context';
import BottomNavBarBasic from '../../../components/molecules/BottomNavBarBasic/BottomNavBarBasic';
import TopNavBarBasic from '../../../components/molecules/TopNavBarBasic/TopNavBarBasic';
import ProfileMyOrg from '../../../components/organisms/Profile/MyProfile/ProfileMyOrg';
import PostList from '../../../components/organisms/PostList/PostList';
import OnSale from '../../../components/organisms/Sale/OnSale';

const MyProfileWrapper = styled.div``;

export default function MyProfile() {
    const accountName = useContext(AuthContext).accountName;

    return (
        <MyProfileWrapper>
            <TopNavBarBasic />
            <ProfileMyOrg />
            <OnSale accountName={accountName} />
            <PostList accountName={accountName} />
            <BottomNavBarBasic type="profile" />
        </MyProfileWrapper>
    );
}
