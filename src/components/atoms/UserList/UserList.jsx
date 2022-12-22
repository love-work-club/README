import React from 'react';
import styled from 'styled-components';
import Button from '../Button/Button';
import UserListDefaultProfile from '../../../../src/assets/user_list_default_profile.png';

function UserList({ className }) {
    return (
        <UserListItem>
            <UserImg src={UserListDefaultProfile} alt="유저 리스트 디폴트 프로필" />
            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-around' }}>
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
    margin: 8px 12px;
    display: flex;
    background-color: #fff;
`;

const UserImg = styled.img`
    margin-right: 12px;
`;

const UserNickname = styled.strong``;

const UserIntroduction = styled.p`
    margin: 0;
`;

const FollowBtn = styled(Button)`
    margin: 0;
    && {
        margin-left: auto;
        align-self: center;
    }
`;
