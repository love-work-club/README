import React from 'react';
import styled from 'styled-components';
import TopNavBarFeedTitle from '../../components/molecules/TopNavBarFeedTitle/TopNavBarFeedTitle';
import ChatUserProfileimg from '../../assets/images/default_profile_feed.svg';

const ChatUserName = styled.p`
    font-size: 14px;
    line-height: 18px;
    display: flex;
    align-items: flex-end;
    color: #000000;
`;

const ChatRoom = styled.section`
    background: #f2f2f2;
`;
const ChatUserProfile = styled.img`
    background-image: url(${ChatUserProfileimg});
`;
const ChatUserText = styled.p``;
const ChatReply = styled.p``;
const ReplyImage = styled.button``;
const ReplyText = styled.input`
    &.reply::placeholder {
    }
`;
const ReplySend = styled.button``;

export default function ChatRooomPage() {
    return (
        <>
            <TopNavBarFeedTitle />
            <ChatUserName />
            <ChatRoom>
                <ChatUserProfile />
                <ChatUserText></ChatUserText>
                <ChatReply />
                <ReplyImage />
                <ReplyText className="reply" />
                <ReplySend />
            </ChatRoom>
        </>
    );
}
