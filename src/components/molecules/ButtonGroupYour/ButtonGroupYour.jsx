import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import FeedComment from '../../../assets/icons/message-btn.svg';
import ProfileShare from '../../../assets/icons/share-btn.svg';
import AuthContext from '../../../store/auth-context';
import Button from '../../atoms/Button/Button';
import defaultTheme from '../../../commons/style/themes/default';

const ButtonDiv = styled.div`
    display: flex;
    justify-content: center;
`;

export default function ButtonGroupYour({ profile, ...props }) {
    // 팔로잉,언팔로잉 기능 구현
    const API_HOST = process.env.REACT_APP_BASE_URL;
    const token = useContext(AuthContext).token;
    const [isFollow, setIsFollow] = useState(profile.isfollow);

    const followConfig = {
        method: 'post',
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-type': 'application/json',
        },
        url: `${API_HOST}/profile/${profile.accountname}/follow`,
        data: {},
    };

    const unfollowConfig = {
        method: 'delete',
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-type': 'application/json',
        },
        url: `${API_HOST}/profile/${profile.accountname}/unfollow`,
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
        <ButtonDiv>
            <Link to="/comment">
                <img src={FeedComment} alt="" style={{ marginLeft: '91px' }} />
            </Link>
            <Button
                size="medium"
                backgroundColor={isFollow ? defaultTheme.palette.gray : defaultTheme.palette.black}
                children={isFollow ? '취소' : '팔로우'}
                onClick={() => {
                    setIsFollow(!isFollow);
                    followReq();
                }}
            />
            <Link to="/profile">
                <img src={ProfileShare} alt="profileShare" style={{ marginRight: '91px' }} />
            </Link>
        </ButtonDiv>
    );
}
