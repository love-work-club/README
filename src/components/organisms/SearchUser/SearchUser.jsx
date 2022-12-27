import React, { useState, useEffect } from 'react';
import TopNavBarUserSearch from '../../molecules/TopNavBarUserSearch/TopNavBarUserSearch';
import SearchUserListSection from '../../molecules/SearchUserListSection/SearchUserListSection';

// 검색한 유저 정보 불러오기
export default function SearchUser() {
    return (
        <>
            <TopNavBarUserSearch />
            <SearchUserListSection />
        </>
    );
}
