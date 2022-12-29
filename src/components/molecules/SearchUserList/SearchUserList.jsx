import React from 'react';
import { SearchUserUl } from './SearchUserListStyle';
import SearchUserListItem from '../../molecules/SearchUserListItem/SearchUserListItem';

// 검색해온 배열 데이터를 map으로 뽑아줘야할텐데 왜 안나오느널까?
function SearchUserList({ searchResult }) {
    return (
        <SearchUserUl>
            {searchResult.map((user, index) => (
                <SearchUserListItem key={index} name={user.username} id={`@${user.accountname}`} />
            ))}
        </SearchUserUl>
    );
}

export default SearchUserList;
