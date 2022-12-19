import React from 'react';
import styled from 'styled-components';
import IconMoreOption from '../../../assets/icons/feed-more-option.svg';

export const OptionBtnIcon = styled.button`
    border: none;
    background-color: transparent;
    cursor: pointer;
    margin-top: 2px;
`;

function OptionBtn() {
    return (
        <OptionBtnIcon>
            <img src={IconMoreOption} alt="더보기 버튼" />
        </OptionBtnIcon>
    );
}

export default OptionBtn;
