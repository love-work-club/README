import React from 'react';
import styled from 'styled-components';
import Button from '../Button/Button';

const UserListItem = styled.li`
    width: 390px;
    height: 50px;
    margin: 12px 12px;
    display: flex;
    background-color: #fff;
`;

const UserImg = styled.img`
    margin-right: 12px;
    border-radius: 70%;
`;

const UserNickname = styled.strong`
    margin: 6px 12px;
`;

const UserIntroduction = styled.p`
    margin: 6px 12px;
`;

const FollowBtn = styled(Button)`
    margin: 0;
    && {
        margin-left: auto;
        align-self: center;
    }
`;

const UserDsc = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;

export default function UserList({ imgSrc, children, intro }) {
    return (
        <>
            <UserListItem>
                <UserImg src={imgSrc} alt="팔로워 리스트 프로필" />
                <UserDsc>
                    <UserNickname>{children}</UserNickname>
                    <UserIntroduction>{intro}</UserIntroduction>
                </UserDsc>
                <FollowBtn size="small" children="팔로우" />
            </UserListItem>
        </>
    );
}
