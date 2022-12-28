import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import TopNavBarFeedSearch from '../../components/molecules/TopNavBarFeedSearch/TopNavBarFeedSearch';
import Posts from '../../components/molecules/Posts/Posts';
import BottomNavBarBasic from '../../components/molecules/BottomNavBarBasic/BottomNavBarBasic';
import AuthContext from '../../store/auth-context';
import InitHomeFeed from '../../components/organisms/InitHomeFeed/InitHomeFeed';

const Wrapper = styled.div`
    width: 100%;
`;

const PostsWrapper = styled.div`
    padding: 60px 16px;
`;

const PostWrapper = styled.div``;

export default function Home() {
    const LoginCtx = useContext(AuthContext);
    const navigate = useNavigate();

    const [homeFeed, setHomeFeed] = useState('');

    useEffect(() => {
        async function isFollowed() {
            try {
                await axios
                    .get(`${process.env.REACT_APP_BASE_URL}/post/feed/?limit=15&skip=0`, {
                        headers: {
                            Authorization: `Bearer ${LoginCtx.token}`,
                            'Content-type': 'application/json',
                        },
                    })
                    .then(res => {
                        setHomeFeed(res.data.posts);
                    });
            } catch (error) {
                navigate('/notfound');
            }
        }

        isFollowed();
    }, [LoginCtx.token]);

    return (
        <Wrapper>
            <TopNavBarFeedSearch />
            <PostWrapper>
                {homeFeed.length ? (
                    <PostsWrapper>
                        {homeFeed.map((val, id) => (
                            <Posts
                                key={id}
                                userIcon={val.author.image}
                                nickname={val.author.username}
                                userId={val.author.accountname}
                                children={val.content}
                                date={val.createdAt}
                                imgSrc={val.image}
                                heartsCount={val.heartCount}
                                commentsCount={val.comments.length}
                            />
                        ))}
                    </PostsWrapper>
                ) : (
                    <InitHomeFeed />
                )}
            </PostWrapper>
            <BottomNavBarBasic />
        </Wrapper>
    );
}
