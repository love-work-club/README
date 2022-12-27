import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import AuthContext from '../../../store/auth-context';
import BackBtn from '../../atoms/BackBtn/BackBtn';
import { TopNavBarHeader } from '../../atoms/TopNavBarWrap/TopNavBarWrap';
import { SearchUserForm, SearchUserInput } from './TopNavBarUserSearchStyle';

function TopNavBarUserSearch({ userSearching, defaultValue }) {
    const [keyword, setKeyword] = useState('');
    const [searchData, setSearchData] = useState([]);
    // const AuthCtx = useContext(AuthContext);

    const handleInputUserSearch = e => {
        setKeyword(e.target.value);
    };

    const handleSubmit = async () => {
        // e.preventDefault();
        // userSearching(keyword);
        if (keyword !== '') {
            await axios
                .get(`https://mandarin.api.weniv.co.kr/user/searchuser/?keyword=${keyword}`, {
                    headers: {
                        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzOWZmNmM5MTdhZTY2NjU4MWM3ODIwMSIsImV4cCI6MTY3NzIwNDY3OCwiaWF0IjoxNjcyMDIwNjc4fQ.QHbCaTnyqdUqTkOmVfOuliHMrB2JGLPlkbVDdaXyE4g`,
                        'Content-type': 'application/json',
                    },
                })
                .then(res => {
                    setSearchData(res.data);
                    // console.log('데이터', searchData);
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

    const handleOnClick = () => {
        console.log('나와라');
    };

    // KeyPress 이벤트 함수
    const handleOnKeyPress = e => {
        if (e.key === 'Enter') {
            handleOnClick(); // enter 입력이 되면 클릭 이벤트 실행
        }
    };

    useEffect(() => {
        handleSubmit();
    }, [keyword]);
    console.log('데이터', searchData);

    return (
        <TopNavBarHeader>
            <SearchUserForm onSubmit={handleSubmit}>
                <BackBtn />
                <SearchUserInput
                    type="text"
                    placeholder="계정 검색"
                    id="keyword"
                    value={keyword}
                    // defaultValue={defaultValue}
                    onChange={handleInputUserSearch}
                    onKeyPress={handleOnKeyPress}
                />
            </SearchUserForm>
        </TopNavBarHeader>
    );
}

export default TopNavBarUserSearch;
