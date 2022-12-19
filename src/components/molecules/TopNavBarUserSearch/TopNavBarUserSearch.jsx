import React from 'react';
import styled from 'styled-components';
import defaultTheme from '../../../commons/style/themes/default';
import { TopNavBarWrapBg } from '../../atoms/TopNavBarWrap/TopNavBarWrap';
import BackBtn from '../../atoms/BackBtn/BackBtn';

const InputUserInfo = styled.input`
    width: 100%;
    height: 30px;
    border-radius: 14px;
    border: none;
    background-color: #f2f2f2;
    padding: 8px 16px;
    font-size: ${defaultTheme.fontSize.sm};
`;

function TopNavBarUserSearch() {
    return (
        <TopNavBarWrapBg>
            <BackBtn />
            <InputUserInfo placeholder="계정 검색" />
        </TopNavBarWrapBg>
    );
}

export default TopNavBarUserSearch;
