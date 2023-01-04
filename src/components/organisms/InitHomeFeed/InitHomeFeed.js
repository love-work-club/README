import React from 'react';
import styled from 'styled-components';
import SearchBg from '../../../assets/images/searchBg.png';

const SearchWrap = styled.div`
    width: 100%;
    height: 712px;
`;

const SearchDiv = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
`;

const SearchImg = styled.img`
    width: 100px;
    height: 100px;
    margin-bottom: 26px;
`;

const SearchText = styled.p`
    color: #767676;
`;

export default function InitHomeFeed() {
    return (
        <SearchWrap>
            <SearchDiv>
                <SearchImg src={SearchBg} alt="" />
                <SearchText>유저를 검색해 팔로우 해보세요!</SearchText>
            </SearchDiv>
        </SearchWrap>
    );
}
