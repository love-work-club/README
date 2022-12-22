import React, { useState, useEffect } from 'react';
import axios from 'axios';
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
    // 팔로워 리스트 가져오기
    const [followers, setFollowers] = useState([]);
    const API_HOST = 'https://mandarin.api.weniv.co.kr/';
    const token =
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYTI5MmNjMTdhZTY2NjU4MWRiMWQxMiIsImV4cCI6MTY3Njg4MTQxMSwiaWF0IjoxNjcxNjk3NDExfQ.lsrw_vhChVfvwJNXy3OxpOPttQV0mZ8I831GkbRNWqs';

    const config = {
        method: 'get',
        url: `${API_HOST}profile/dotory/follower`,
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-type': 'application/json',
        },
    };

    useEffect(() => {
        axios(config)
            .then(res => {
                setFollowers(res.data);
                console.log(res.data);
            })
            .then(err => console.log(err));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            {followers.length
                ? followers.map((follower, i) => (
                      <UserListItem key={i}>
                          <UserImg src={API_HOST + follower.image} alt="팔로워 리스트 프로필" />
                          <UserDsc>
                              <UserNickname>{follower.accountname}</UserNickname>
                              <UserIntroduction>{follower.intro}</UserIntroduction>
                          </UserDsc>
                          <FollowBtn size="small" children="팔로우" />
                      </UserListItem>
                  ))
                : null}
            {/* <UserListItem>
                <UserImg src={imgSrc} alt="팔로워 리스트 프로필" />
                <UserDsc>
                    <UserNickname>{children}</UserNickname>
                    <UserIntroduction>{intro}</UserIntroduction>
                </UserDsc>
                <FollowBtn size="small" children="팔로우" />
            </UserListItem> */}
        </>
    );
}
