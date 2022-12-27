import React, { useState } from 'react';
import SearchApi from '../../../Api/SearchApi';
import TopNavBarUserSearch from '../../molecules/TopNavBarUserSearch/TopNavBarUserSearch';
import SearchUserListSection from '../../molecules/SearchUserListSection/SearchUserListSection';

// 1. 우선 검색한 유저 정보 리스트로 불러오기
// 2. 필터링해주기
// 3. 불러온 유저 정보 화면에 뿌려주기
function SearchUser(props) {
    const [username, setUsername] = useState([]);
    const [accountname, setAccountname] = useState([]);

    const handleKeyword = async keyword => {
        const result = await SearchApi(keyword);

        setUsername(result); // username안에 전달받은 데이터가 들어갈 것이다.
    };

    return (
        <>
            <TopNavBarUserSearch userSearching={handleKeyword} />
            <SearchUserListSection />
        </>
    );
}

export default SearchUser;
