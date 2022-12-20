import React from 'react';
import styled from 'styled-components';
import defaultTheme from '../../../commons/style/themes/default';
import IconChat from '../../../assets/icons/nav-chatting.svg';

const ChatBtnIcon = styled.button`
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

export default function Chat() {
    return (
        <ChatBtnIcon>
            <img src={IconChat} alt="채팅 버튼" />
            <MenuDsc>채팅</MenuDsc>
        </ChatBtnIcon>
    );
}
