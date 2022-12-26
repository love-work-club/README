import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserListItem from '../UserListItem/UserListItem';

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
        <>{followers.length ? followers.map((follower, i) => <UserListItem follower={follower} key={i} />) : null}</>
    );
}
