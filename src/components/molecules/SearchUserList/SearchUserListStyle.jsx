import React from 'react';
import styled from 'styled-components';
import defaultTheme from '../../../commons/style/themes/default';

// main 태그 역할 - 공통 메인
// export const MainSection = styled.main`
//     padding-top: 48px;
// `;

export const SearchUserUl = styled.ul`
    padding: 66px 0 16px;
    overflow: hidden;
`;

export const SearchUserLi = styled.li`
    width: 100%;
    height: 54px;
    display: flex;
    align-items: center;
    column-gap: 14px;
    margin: 10px 0;
    padding: 2px 16px;
    cursor: pointer;
    &:hover {
        background-color: #f0f0f0;
    }
    transition: all 0.3s;
    box-sizing: border-box;
`;

export const SearchUserListInfo = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
`;

export const UserName = styled.strong`
    font-size: ${defaultTheme.fontSize.sm};
`;

export const UserAccountId = styled.p`
    font-size: ${defaultTheme.fontSize.xs};
    color: #767676;
`;
