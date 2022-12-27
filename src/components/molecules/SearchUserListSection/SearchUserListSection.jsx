import React from 'react';
import { MainSection, SearchUserUl } from './SearchUserListSectionStyle';
import SearchUserListItem from '../SearchUserListItem/SearchUserListItem';

function SearchUserListSection({ searchResultData, username, accountname }) {
    return (
        <MainSection>
            <SearchUserUl>
                <SearchUserListItem username={username} accountname={accountname} />
            </SearchUserUl>
        </MainSection>
    );
}

export default SearchUserListSection;
