import React, { useState, useEffect } from 'react';
import BackBtn from '../../atoms/BackBtn/BackBtn';
import { TopNavBarHeader } from '../../atoms/TopNavBarWrap/TopNavBarWrap';
import { SearchUserForm, SearchUserInput } from './TopNavBarUserSearchStyle';

function TopNavBarUserSearch({ handleKeyword }) {
    const [keyword, setKeyword] = useState('');
    // const [searchData, setSearchData] = useState([]);
    // const AuthCtx = useContext(AuthContext);

    const handleInputUserSearch = e => {
        setKeyword(e.target.value);
    };

    // const handleOnClick = () => {
    //     console.log('나와라');
    // };

    useEffect(() => {
        handleKeyword(keyword);
    }, [keyword]);

    return (
        <TopNavBarHeader>
            <SearchUserForm>
                <BackBtn />
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
