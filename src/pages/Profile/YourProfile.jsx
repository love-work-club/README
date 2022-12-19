import React from 'react';
import styled from 'styled-components';
import ProfileYourOrg from '../../components/organisms/YourProfile/ProfileYourOrg';
import TopNavBarBasic from '../../components/molecules/TopNavBarBasic/TopNavBarBasic';

const YourProfileWrapper = styled.div`
    width: 50%;
    margin: 0 auto;
`;

export default function YourProfile() {
    return (
        <YourProfileWrapper>
            <TopNavBarBasic />
            <ProfileYourOrg />
        </YourProfileWrapper>
    );
}
