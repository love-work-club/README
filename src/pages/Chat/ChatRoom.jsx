import React from 'react';
import styled from 'styled-components';
import TopNavBarFeedTitle from '../../components/molecules/TopNavBarFeedTitle/TopNavBarFeedTitle';
import ChatUserProfileimg from '../../assets/images/default_profile_feed.svg';
import ReplyButton from '../../assets/images/chat-upload-photo.svg';
import Replyimg from '../../assets/images/chat-img.svg';

const ChatUserName = styled.p`
    font-size: 14px;
    line-height: 18px;
    display: flex;
    align-items: flex-end;
    color: #000000;
`;

const ChatRoom = styled.section`
    padding-top: 200px;
    background: #f2f2f2;
`;
const ChatReceive = styled.div`
    display: flex;
    flex-direction: row;
    padding: 4.5px 16px;
`;
const ChatUserProfile = styled.img`
    background-image: url(${ChatUserProfileimg});
    width: 42px;
    min-width: 42px;
    height: 42px;
    border-radius: 21px;
    flex-grow: 0;
`;
const ChatUserText = styled.p`
    background-color: #ffffff;
    font-size: 14px;
    border: 1px solid #c4c4c4;
    border-radius: 0 10px 10px;
    margin: 0 6px 0 12px;
    padding: 12px;
    flex-grow: 0;
`;
const ChatTime = styled.p`
    align-self: flex-end;
    font-size: 10px;
    line-height: 13px;
    color: #767676;
    flex-grow: 0;
`;
const ChatReply = styled.div`
    display: flex;
    flex-direction: row-reverse;
    padding: 4.5px 16px;
`;
const ReplyText = styled.p`
    background-color: #c55854;
    color: #ffffff;
    font-size: 14px;
    flex-grow: 0;
    border: 1px solid #c55854;
    border-radius: 10px 0 10px 10px;
    margin: 0 6px 0 12px;
    padding: 12px;
`;
const ReplyImage = styled.img`
    background-image: url(${Replyimg});
    width: 240px;
    min-width: 240px;
    height: 240px;
    border-radius: 10px;
    margin: 0 6px 0 12px;
    flex-grow: 0;
`;
const Reply = styled.p`
    margin-top: 20px;
    height: 60.5px;
    width: 100vw;
    background-color: #ffffff;
    padding: 13px 16px 12px;
    border-top: 0.5px solid #dbdbdb;
    display: flex;
`;

const ReplyInputImage = styled.button`
    background-image: url(${ReplyButton});
    width: 36px;
    height: 36px;
    cursor: pointer;
    flex-grow: 0;
`;
const ReplyInputText = styled.input`
    &::placeholder {
        color: #c4c4c4;
    }
    padding: 18px;
    flex-grow: 1;
`;
const ReplySend = styled.button`
    color: #c4c4c4;
    cursor: pointer;
    flex-grow: 0;
`;

export default function ChatRooomPage() {
    return (
        <>
            <TopNavBarFeedTitle />
            <ChatUserName />
            <ChatRoom>
                <ChatReceive>
                    <ChatUserProfile />
                    <ChatUserText>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad aliquid eveniet libero placeat
                        sequi adipisci consequuntur impedit? Eos autem provident quae ab similique, quibusdam incidunt
                        ipsa perspiciatis? Obcaecati, animi libero!
                    </ChatUserText>
                    <ChatTime>12:48</ChatTime>
                </ChatReceive>
                <ChatReceive>
                    <ChatUserProfile />
                    <ChatUserText>딥다이브 구매 원합니다</ChatUserText>
                    <ChatTime>12:49</ChatTime>
                </ChatReceive>
                <ChatReply>
                    <ReplyText>딥다이브는 만오천냥~</ReplyText>
                    <ChatTime>13:02</ChatTime>
                </ChatReply>
                <ChatReply>
                    <ReplyImage />
                    <ChatTime>13:03</ChatTime>
                </ChatReply>
                <Reply>
                    <ReplyInputImage />
                    <ReplyInputText type="text" placeholder="메세지 입력하기..." />
                    <ReplySend>전송</ReplySend>
                </Reply>
            </ChatRoom>
        </>
    );
}
