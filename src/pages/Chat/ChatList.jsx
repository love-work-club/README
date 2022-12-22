import React from 'react';
import styled from 'styled-components';
import TopNavBarBasic from '../../components/molecules/TopNavBarBasic/TopNavBarBasic';
import BottomNavBarBasic from '../../components/molecules/BottomNavBarBasic/BottomNavBarBasic';
import ChatUserProfileimg from '../../assets/images/default_profile_feed.svg';

const Chat = styled.section``;
const ChatBoard = styled.ul`
    display: flex;
    flex-direction: column;
    padding: 20px 16px;
`;
const ChatList = styled.li`
    font-size: 14px;
    line-height: 18px;
    display: flex;
    flex-direction: row;
    cursor: pointer;
    &.newChat::after {
        content: '';
        position: absolute;
        width: 12px;
        height: 12px;
        border-radius: 6px;
        background-color: #c55854;
        top: 75px;
    }
`;

const ChatProfile = styled.img`
    background-image: url(${ChatUserProfileimg});
    width: 42px;
    height: 42px;
    border-radius: 21px;
    align-self: center;
    flex-grow: 0;
`;
const ChatWrap = styled.div`
    display: flex;
    flex-direction: column;
    padding: 12px;
    flex-grow: 1;
`;
const ChatUserName = styled.strong`
    font-size: 14px;
    line-height: 18px;
`;
const ChatPreview = styled.p`
    font-size: 12px;
    line-height: 15px;
    color: #767676;
`;
const ChatDate = styled.p`
    flex-grow: 0;
    padding: 12px;
    align-self: flex-end;
    font-size: 10px;
    line-height: 13px;
    color: #dbdbdb;
`;

export default function ChatListPage() {
    return (
        <>
            <TopNavBarBasic />
            <Chat>
                <ChatBoard>
                    <ChatList className="newChat">
                        <ChatProfile />
                        <ChatWrap>
                            <ChatUserName>리듬이</ChatUserName>
                            <ChatPreview>책 주세요</ChatPreview>
                        </ChatWrap>
                        <ChatDate>2022.12.25</ChatDate>
                    </ChatList>
                    <ChatList>
                        <ChatProfile />
                        <ChatWrap>
                            <ChatUserName>뽐내기 좋아하는 사자</ChatUserName>
                            <ChatPreview>모던 자바스크립트 구매원합니다</ChatPreview>
                        </ChatWrap>
                        <ChatDate>2022.12.24</ChatDate>
                    </ChatList>
                    <ChatList>
                        <ChatProfile />
                        <ChatWrap>
                            <ChatUserName>Egg Drop</ChatUserName>
                            <ChatPreview>hey~ How much is it?</ChatPreview>
                        </ChatWrap>
                        <ChatDate>2022.12.21</ChatDate>
                    </ChatList>
                    <ChatList>
                        <ChatProfile />
                        <ChatWrap>
                            <ChatUserName>백구스</ChatUserName>
                            <ChatPreview>구구구...꽥!</ChatPreview>
                        </ChatWrap>
                        <ChatDate>2022.12.12</ChatDate>
                    </ChatList>
                    <ChatList>
                        <ChatProfile />
                        <ChatWrap>
                            <ChatUserName>춘식</ChatUserName>
                            <ChatPreview>고구마</ChatPreview>
                        </ChatWrap>
                        <ChatDate>2022.12.11</ChatDate>
                    </ChatList>
                    <ChatList>
                        <ChatProfile />
                        <ChatWrap>
                            <ChatUserName>빡태</ChatUserName>
                            <ChatPreview>시강이 뭔가요??</ChatPreview>
                        </ChatWrap>
                        <ChatDate>2022.12.10</ChatDate>
                    </ChatList>
                    <ChatList>
                        <ChatProfile />
                        <ChatWrap>
                            <ChatUserName>밍디</ChatUserName>
                            <ChatPreview>밍디 와쪄염 뿌우</ChatPreview>
                        </ChatWrap>
                        <ChatDate>2022.12.09</ChatDate>
                    </ChatList>
                </ChatBoard>
            </Chat>
            <BottomNavBarBasic />
        </>
    );
}
