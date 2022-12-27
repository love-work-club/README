import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import defaultTheme from '../../../commons/style/themes/default';
import { TopNavBarWrapBg } from '../../atoms/TopNavBarWrap/TopNavBarWrap';
import IconSearchBtn from '../../../assets/icons/icon-search.svg';

const AppTitle = styled.h2`
    font-size: ${defaultTheme.fontSize.lg};
`;

const SearchBtn = styled.button`
    border: none;
    background-color: transparent;
    cursor: pointer;
`;

function TopNavBarFeedSearch() {
    return (
        <TopNavBarWrapBg>
            <AppTitle>리드미북 피드</AppTitle>
            <Link to="/search">
                <SearchBtn>
                    <img src={IconSearchBtn} alt="" />
                </SearchBtn>
            </Link>
        </TopNavBarWrapBg>
    );
}

export default TopNavBarFeedSearch;
