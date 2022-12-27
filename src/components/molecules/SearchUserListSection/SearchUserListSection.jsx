import React from 'react';
import styled from 'styled-components';
import defaultTheme from '../../../commons/style/themes/default';
import SearchUserListDefaultProfile from '../../../assets/images/default_profile_user_list.svg';

// main 태그 역할 - 공통 메인
const MainSection = styled.main`
    padding-top: 48px;
`;

const SearchUserUl = styled.ul`
    padding: 16px 0;
    overflow: hidden;
`;

const SearchUserLi = styled.li`
    width: 100%;
    height: 54px;
    display: flex;
    align-items: center;
    column-gap: 14px;
    margin: 10px 0;
    padding: 2px 16px;
    cursor: pointer;
    &:hover {
        background-color: #f0f0f0;
    }
    transition: all 0.3s;
    box-sizing: border-box;
`;

const SearchUserListInfo = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
`;

const UserProfileName = styled.strong`
    font-size: ${defaultTheme.fontSize.sm};
`;

const UserAccountId = styled.p`
    font-size: ${defaultTheme.fontSize.xs};
    color: #767676;
`;

function SearchUserListSection() {
    return (
        <MainSection>
            <SearchUserUl>
                <SearchUserLi>
                    <img src={SearchUserListDefaultProfile} alt="" />
                    <SearchUserListInfo>
                        <UserProfileName>리드미 위드미</UserProfileName>
                        <UserAccountId>@ README_WITHME</UserAccountId>
                    </SearchUserListInfo>
                </SearchUserLi>
                <SearchUserLi>
                    <img src={SearchUserListDefaultProfile} alt="" />
                    <SearchUserListInfo>
                        <UserProfileName>책 수집가</UserProfileName>
                        <UserAccountId>@ Book_Collector</UserAccountId>
                    </SearchUserListInfo>
                </SearchUserLi>
                <SearchUserLi>
                    <img src={SearchUserListDefaultProfile} alt="" />
                    <SearchUserListInfo>
                        <UserProfileName>단발의 최양락</UserProfileName>
                        <UserAccountId>@ shortCutHairMan</UserAccountId>
                    </SearchUserListInfo>
                </SearchUserLi>
            </SearchUserUl>
        </MainSection>
    );
}

export default SearchUserListSection;
