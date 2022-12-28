import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import AuthContext from '../../../store/auth-context';
import TopNavBarUserSearch from '../../molecules/TopNavBarUserSearch/TopNavBarUserSearch';
import SearchUserListSection from '../../molecules/SearchUserListSection/SearchUserListSection';

// 1. 우선 검색한 유저 정보 리스트로 불러오기
// 2. 필터링해주기
// 3. 불러온 유저 정보 화면에 뿌려주기

// SearchUser가 내가 키워드 입력해서 얻어온 유저 데이터를 갖고있을 것이다.
function SearchUser() {
    const [searchResult, setSearchResult] = useState([]);
    const [keyword, setKeyword] = useState('');
    const token = useContext(AuthContext).token;

    const handleKeyword = userInput => {
        setTimeout(() => {
            setKeyword(userInput);
        }, 1000);
        console.log(keyword);
    };

    const searchUserData = async () => {
        if (keyword !== '') {
            await axios
                .get(`https://mandarin.api.weniv.co.kr/user/searchuser/?keyword=${keyword}`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        'Content-type': 'application/json',
                    },
                })

                .then(response => {
                    console.log(response.data);
                })
                .catch(error => {
                    if (error.response) {
                        console.log(error.response.data);
                        console.log(error.response.status);
                        console.log(error.response.headers);
                    } else if (error.request) {
                        console.log(error.request);
                    } else {
                        console.log('Error', error.message);
                    }
                    console.log(error.config);
                });
        }
        // console.log('뭐가나올까: ', token);
    };

    // searchUserData가 내가 keyword 입력할 때마다 서버로부터 해당 검색 키워드와 일치하는 유저 데이터를 받아온다.
    useEffect(() => {
        searchUserData(keyword);
        // console.log('뭐가나올까: ', keyword);
    }, [keyword]);

    return (
        <>
            {/* 내가 인풋창에 keyword 검색하면 username 불러오기 */}
            <TopNavBarUserSearch handleKeyword={handleKeyword} />
            {/* username과 accountname 불러오기 */}
            <SearchUserListSection searchResult={searchResult} />
        </>
    );
}

export default SearchUser;
