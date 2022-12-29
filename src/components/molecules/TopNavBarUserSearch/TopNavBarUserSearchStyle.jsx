import React from 'react';
import styled from 'styled-components';
import defaultTheme from '../../../commons/style/themes/default';

export const SearchUserForm = styled.form`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 50px;
    box-sizing: border-box;
`;

export const SearchUserInput = styled.input`
    width: 90%;
    height: 32px;
    border-radius: 16px;
    border: none;
    background-color: #f2f2f2;
    padding: 8px 16px;
    font-size: ${defaultTheme.fontSize.sm};
    box-sizing: border-box;
`;
