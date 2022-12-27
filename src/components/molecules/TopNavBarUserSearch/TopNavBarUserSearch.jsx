import React, { useState } from 'react';
import styled from 'styled-components';
import defaultTheme from '../../../commons/style/themes/default';
import BackBtn from '../../atoms/BackBtn/BackBtn';
import { TopNavBarHeader } from '../../atoms/TopNavBarWrap/TopNavBarWrap';

const SearchUserForm = styled.form`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 50px;
    box-sizing: border-box;
`;

const SearchUserInput = styled.input`
    width: 90%;
    height: 32px;
    border-radius: 16px;
    border: none;
    background-color: #f2f2f2;
    padding: 8px 16px;
    font-size: ${defaultTheme.fontSize.sm};
    box-sizing: border-box;
`;

export default function TopNavBarUserSearch(searchingUserName) {
    // state로 검색 인풋 관리
    const [inputUserName, setInputUserName] = useState('');

    const token =
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzOWM0MjViMTdhZTY2NjU4MWM2NTE4MCIsImV4cCI6MTY3Njc5NTU0OCwiaWF0IjoxNjcxNjExNTQ4fQ.JJiFJ4Zvh_BphSMgWnQIcHv-E8qouG6539f2XJq5QNA';

    const API_HOST = 'https://mandarin.api.weniv.co.kr/';

    const config = {
        method: 'GET',
        URL: `${API_HOST}user/searchuser/?keyword=keyword`,
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-type': 'application/json',
        },
    };

    const handleInputUserName = e => {
        setInputUserName(e.target.value);
        console.log(e.target.value);
    };

    const handleSubmit = e => {
        e.preventDefault();
        searchingUserName(inputUserName);
    };

    return (
        <TopNavBarHeader>
            <SearchUserForm onSubmit={handleSubmit}>
                <BackBtn />
                <SearchUserInput type="text" placeholder="계정 검색" onChange={handleInputUserName} />
            </SearchUserForm>
        </TopNavBarHeader>
    );
}
