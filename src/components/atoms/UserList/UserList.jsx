/* eslint-disable no-unused-expressions */
import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import UserListItem from '../UserListItem/UserListItem';
import AuthContext from '../../../store/auth-context';

export default function UserList({ urlPath }) {
    // 팔로잉/팔로워 리스트 가져오기
    const { accountName } = useParams();
    const [followers, setFollowers] = useState([]);
    const token = useContext(AuthContext).token;
    const API_HOST = process.env.REACT_APP_BASE_URL;

    const config = {
        method: 'get',
        url: `${API_HOST}/profile/${accountName}/${urlPath}`,
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-type': 'application/json',
        },
    };

    async function followListReq() {
        try {
            const res = await axios(config);

            setFollowers(res.data);
            console.log(res.data);
        } catch {
            err => console.error(err);
        }
    }

    useEffect(() => {
        followListReq();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>{followers.length ? followers.map((follower, i) => <UserListItem follower={follower} key={i} />) : null}</>
    );
}
