import React from 'react';
import styled from 'styled-components';
import Button from '../Button/Button';

function UserList({ className }) {
    // const UserImg = styled.img``;

    return (
        <UserListItem>
            <UserImg />
            <div>
                <UserNickname>애월읍 한라봉 최고 맛집</UserNickname>
                <UserIntroduction>정성을 다해 농사짓는 한라봉</UserIntroduction>
            </div>
            <FollowBtn className={className} size="small">
                팔로우
            </FollowBtn>
        </UserListItem>
    );
}

export default UserList;

const UserListItem = styled.li`
    width: 390px;
    height: 50px;
    margin: 8px 0;
    display: flex;
    background-color: orange;
`;

const UserImg = styled.img`
    /* width: 50px;
    height: 50px;
    background-color: #333;
    border-radius: 50%; */
    margin-right: 12px;
`;

const UserNickname = styled.strong``;

const UserIntroduction = styled.p``;

const FollowBtn = styled(Button)`
    margin: 0;
    && {
        margin-left: auto;
        align-self: center;
    }
`;
