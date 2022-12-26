import React, { useState } from 'react';
import styled from 'styled-components';
import defaultTheme from '../../../commons/style/themes/default';
import Button from '../Button/Button';

const UserListItemWrapper = styled.li`
    height: 50px;
    margin: 16px;
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
    min-width: 56px;
    margin: 0;
    && {
        margin-left: auto;
        align-self: center;
    }

    &.select {
        background-color: white;
    }
`;

const UserDsc = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
`;

export default function UserListItem({ follower }) {
    const API_HOST = 'https://mandarin.api.weniv.co.kr/';

    // 팔로우 클릭 시 취소
    const [isFollow, setIsFollow] = useState(follower.isFollow);
    const [color, setColor] = useState('black');

    return (
        <UserListItemWrapper>
            <UserImg src={API_HOST + follower.image} alt="팔로워 리스트 프로필" />
            <UserDsc>
                <UserNickname>{follower.accountname}</UserNickname>
                <UserIntroduction>{follower.intro}</UserIntroduction>
            </UserDsc>
            <FollowBtn
                size="small"
                children={isFollow ? '취소' : '팔로우'}
                onClick={() => {
                    setIsFollow(!isFollow);
                }}
            />
        </UserListItemWrapper>
    );
}
