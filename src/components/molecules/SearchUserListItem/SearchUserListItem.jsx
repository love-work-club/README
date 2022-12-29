import React from 'react';
import { SearchUserLi, SearchUserListInfo, UserName, UserAccountId } from '../SearchUserList/SearchUserListStyle';
import defaultProfileImg from '../../../assets/images/default_profile_user_list.svg';

// name: 유저 네임
// id: 계정 이름
function SearchUserListItem({ name, id, image, type }) {
    return (
        <SearchUserLi>
            <img src={defaultProfileImg} alt="" />
            <SearchUserListInfo>
                <UserName>{name}</UserName>
                <UserAccountId>{id}</UserAccountId>
            </SearchUserListInfo>
        </SearchUserLi>
    );
}

export default SearchUserListItem;
