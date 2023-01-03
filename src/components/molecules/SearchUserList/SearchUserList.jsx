import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { SearchUserUl } from './SearchUserListStyle';
import SearchUserListItem from '../../molecules/SearchUserListItem/SearchUserListItem';

// 검색해온 배열 데이터를 map으로 뽑아줘야할텐데 왜 안나오느널까?
function SearchUserList({ searchResult }) {
    const navigate = useNavigate();

    return (
        <SearchUserUl>
            {searchResult.map((user, index) => (
                <SearchUserListItem
                    key={index}
                    name={user.username}
                    id={`@${user.accountname}`}
                    onClick={() => navigate(`/yourprofile/${user.accountname}`)}
                />
            ))}
        </SearchUserUl>
    );
}

export default SearchUserList;
