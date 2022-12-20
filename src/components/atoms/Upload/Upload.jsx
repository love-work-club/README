import React from 'react';
import styled from 'styled-components';
import defaultTheme from '../../../commons/style/themes/default';
import IconUpload from '../../../assets/icons/nav-upload.svg';

const UploadBtnIcon = styled.button`
    width: 84px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: transparent;
    cursor: pointer;
`;

const MenuDsc = styled.span`
    align-self: center;
    margin-top: 7px;
    font-size: ${defaultTheme.fontSize.sm};
    color: ${defaultTheme.palette.gray3};
`;

export default function Upload() {
    return (
        <UploadBtnIcon>
            <img src={IconUpload} alt="게시물 작성 버튼" />
            <MenuDsc>게시물 작성</MenuDsc>
        </UploadBtnIcon>
    );
}
