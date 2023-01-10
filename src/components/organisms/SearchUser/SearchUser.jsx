import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import AuthContext from '../../../store/auth-context';
import TopNavBarUserSearch from '../../molecules/TopNavBarUserSearch/TopNavBarUserSearch';
import SearchUserList from '../../molecules/SearchUserList/SearchUserList';

// searchResult 내가 키워드 입력해서 얻어온 유저 데이터를 갖고있을 것이다.
function SearchUser() {
    const [searchResult, setSearchResult] = useState([]);

    const [keyword, setKeyword] = useState('');
    const token = useContext(AuthContext).token;

    const [timer, setTimer] = useState(0); // 디바운싱 타이머

    const handleKeyword = userInput => {
        // 검색한 키워드에 대한 디바운싱 처리
        if (timer) {
            clearTimeout(timer);
        }

        const newTimer = setTimeout(async () => {
            try {
                await setKeyword(userInput);
            } catch (e) {
                console.log('error', e);
            }
        }, 800);

        setTimer(newTimer);

        // if (event.keyCode === 13) {
        //     event.preventDefault();
        // }
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
                    // 이곳에서 검색한 결과에 대한 요청을 받아와서 searchResult에 전달해서 화면에 렌더링해준다.
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
            {/* 검색결과로 username, accountname 리스트 렌더링하기 */}
            <SearchUserList keyword={keyword} searchResult={searchResult} />
        </>
    );
}

export default SearchUser;
