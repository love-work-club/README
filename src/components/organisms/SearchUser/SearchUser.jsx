import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import AuthContext from '../../../store/auth-context';
import TopNavBarUserSearch from '../../molecules/TopNavBarUserSearch/TopNavBarUserSearch';
import SearchUserList from '../../molecules/SearchUserList/SearchUserList';

// 1. 우선 검색한 유저 정보 리스트로 불러오기
// 2. 필터링해주기
// 3. 불러온 유저 정보 화면에 뿌려주기

// searchResult 내가 키워드 입력해서 얻어온 유저 데이터를 갖고있을 것이다.
// 그럼 searchResult가 배열 값 모아두니까 이게 map으로 데이터 뽑아내야하는디 왜 안되지,,?
function SearchUser() {
    const [searchResult, setSearchResult] = useState([]);

    const [keyword, setKeyword] = useState('');
    const token = useContext(AuthContext).token;

    const handleKeyword = userInput => {
        setTimeout(() => {
            setKeyword(userInput);
        }, 1200);
        // console.log(keyword);
        // console.log('여긴가: ', searchResult(keyword));
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
                    // 이곳에서 검색한 결과에 대한 요청을 받아와서 searchResult 에 전달해서 화면에 렌더링해준다.
                    setSearchResult(response.data);
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
    };

    // searchUserData가 내가 keyword 입력할 때마다 서버로부터 해당 검색 키워드와 일치하는 유저 데이터를 받아온다.
    useEffect(() => {
        searchUserData(keyword);
    }, [keyword]);

    return (
        <>
            {/* 내가 인풋창에 keyword 검색하면 username 불러오기 */}
            <TopNavBarUserSearch handleKeyword={handleKeyword} />
            {/* 검색결과로 username 불러오기 */}
            <SearchUserList keyword={keyword} searchResult={searchResult} />
        </>
    );
}

export default SearchUser;
