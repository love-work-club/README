import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import IconBack from '../../../assets/icons/icon-back.svg';

export const BackBtnIcon = styled.button`
    border: none;
    margin-right: 14px;
    background-color: transparent;
    cursor: pointer;
    margin-top: 2px;
`;

function BackBtn() {
    const navigate = useNavigate();

    return (
        <BackBtnIcon onClick={() => navigate(-1)}>
            <img src={IconBack} alt="뒤로가기 버튼" />
        </BackBtnIcon>
    );
}

export default BackBtn;
