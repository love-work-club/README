import React from 'react';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import defaultTheme from '../../../commons/style/themes/default';
import { TopNavBarWrapBg } from '../../atoms/TopNavBarWrap/TopNavBarWrap';
import IconSearchBtn from '../../../assets/icons/icon-search.svg';

const AppTitle = styled.h2`
    font-family: 'Pretendard_Bold';
    font-size: ${defaultTheme.fontSize.lg};
`;

const SearchBtn = styled.button`
    border: none;
    background-color: transparent;
    cursor: pointer;
`;

function TopNavBarFeedSearch() {
    const navigate = useNavigate();
    const handleBack = () => {
        navigate('/');
    };

    return (
        <TopNavBarWrapBg>
            <AppTitle>리드미북 피드</AppTitle>
            <Link to="/search">
                <SearchBtn onClick={handleBack}>
                    <img src={IconSearchBtn} alt="" />
                </SearchBtn>
            </Link>
        </TopNavBarWrapBg>
    );
}

export default TopNavBarFeedSearch;
