import React from 'react';
import {
    SearchUserLi,
    SearchUserListInfo,
    UserProfileName,
    UserAccountId,
} from '../SearchUserListSection/SearchUserListSectionStyle';

function SearchUserListItem({ searchUserImg, username, accountname }) {
    return (
        <SearchUserLi>
            <img src={searchUserImg} alt="" />
            <SearchUserListInfo>
                <UserProfileName>유저 이름: {username}</UserProfileName>
                <UserAccountId>유저 계정: {accountname}</UserAccountId>
            </SearchUserListInfo>
        </SearchUserLi>
    );
}

export default SearchUserListItem;
