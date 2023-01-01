import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router';
import { TopNavBarHeader } from '../../atoms/TopNavBarWrap/TopNavBarWrap';
import { SearchUserForm, SearchUserInput } from './TopNavBarUserSearchStyle';
import IconBack from '../../../assets/icons/icon-back.svg';

export const BackBtnIcon = styled.button`
    border: none;
    margin-right: 14px;
    background-color: transparent;
    cursor: pointer;
    margin-top: 2px;
`;

function TopNavBarUserSearch({ handleKeyword }) {
    const [keyword, setKeyword] = useState('');
    const navigate = useNavigate();

    const handleInputUserSearch = e => {
        setKeyword(e.target.value);
    };

    useEffect(() => {
        handleKeyword(keyword);
    }, [keyword]);

    return (
        <TopNavBarHeader>
            <SearchUserForm>
                <BackBtnIcon onClick={() => navigate({ pathname: '/home' })}>
                    <img src={IconBack} alt="뒤로가기 버튼" />
                </BackBtnIcon>
                <SearchUserInput
                    type="text"
                    placeholder="계정 검색"
                    id="keyword"
                    value={keyword}
                    onChange={handleInputUserSearch}
                />
            </SearchUserForm>
        </TopNavBarHeader>
    );
}

export default TopNavBarUserSearch;
