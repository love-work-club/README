import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import defaultTheme from '../../../commons/style/themes/default';
import AuthContext from '../../../store/auth-context';
import Button from '../Button/Button';

const UserListItemWrapper = styled.li`
    height: 50px;
    margin: 16px;
    display: flex;
    background-color: #fff;
`;

const UserImg = styled.img`
    margin-right: 12px;
    width: 50px;
    object-fit: cover;
    border-radius: 70%;
`;

const UserNickname = styled.strong`
    margin: 6px 12px;
`;

const UserIntroduction = styled.p`
    margin: 6px 12px;
    max-width: 200px;
`;

const FollowBtn = styled(Button)`
    background-color: ${props => props.backgroundColor}
    min-width: 56px;
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

export default function UserListItem({ follower }) {
    // 팔로잉,언팔로잉 기능 구현
    const API_HOST = process.env.REACT_APP_BASE_URL;
    const token = useContext(AuthContext).token;
    const [isFollow, setIsFollow] = useState(follower.isfollow);

    const followConfig = {
        method: 'post',
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-type': 'application/json',
        },
        url: `${API_HOST}/profile/${follower.accountname}/follow`,
        data: {},
    };

    const unfollowConfig = {
        method: 'delete',
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-type': 'application/json',
        },
        url: `${API_HOST}/profile/${follower.accountname}/unfollow`,
        data: {},
    };

    async function followReq() {
        try {
            let res = '';

            if (isFollow) {
                res = await axios(unfollowConfig);
            } else {
                res = await axios(followConfig);
            }

            console.log(res);
        } catch (err) {
            console.error(err);
        }
    }

    return (
        <UserListItemWrapper>
            <UserImg src={`${follower.image}`} alt="팔로워 리스트 프로필" />
            <UserDsc>
                <UserNickname>{follower.accountname}</UserNickname>
                <UserIntroduction>{follower.intro}</UserIntroduction>
            </UserDsc>
            <FollowBtn
                size="small"
                children={isFollow ? '취소' : '팔로우'}
                backgroundColor={isFollow ? defaultTheme.palette.gray : defaultTheme.palette.black}
                onClick={() => {
                    setIsFollow(!isFollow);
                    followReq();
                }}
            />
        </UserListItemWrapper>
    );
}
