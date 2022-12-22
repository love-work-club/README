import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserList from '../../components/atoms/UserList/UserList';
import TopNavBarFollowers from '../../components/molecules/TopNavBarFollowers/TopNavBarFollowers';

export default function Followers() {
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
            <TopNavBarFollowers />
            {followers.length
                ? followers.map((follower, i) => (
                      <UserList
                          imgSrc={API_HOST + follower.image}
                          children={follower.accountname}
                          intro={follower.intro}
                      />
                  ))
                : null}
        </>
    );
}
