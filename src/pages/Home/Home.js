import React, { useContext, useEffect, useLayoutEffect, useState } from 'react';
import styled from 'styled-components';
import TopNavBarFeedSearch from '../../components/molecules/TopNavBarFeedSearch/TopNavBarFeedSearch';
import Posts from '../../components/molecules/Posts/Posts';
import BottomNavBarBasic from '../../components/molecules/BottomNavBarBasic/BottomNavBarBasic';
import AuthContext from '../../store/auth-context';
import InitHomeFeed from '../../components/organisms/InitHomeFeed/InitHomeFeed';
import useAxios from '../../hooks/use-api';

const Wrapper = styled.div`
    width: 100%;
`;

const PostsWrapper = styled.div`
    padding: 60px 16px;
    display: flex;
    flex-direction: column;
    gap: 30px;
`;

const PostWrapper = styled.div``;

export default function Home() {
    const LoginCtx = useContext(AuthContext);

    const [homeFeed, setHomeFeed] = useState('');

    const { ResData, response, error } = useAxios({
        method: 'get',
        url: `${process.env.REACT_APP_BASE_URL}/post/feed`,
        headers: {
            Authorization: `Bearer ${LoginCtx.token}`,
            'Content-type': 'application/json',
        },
    });

    useEffect(() => {
        ResData();
    }, []);

    useLayoutEffect(() => {
        if (response !== null) {
            setHomeFeed(response.posts);
        }
    }, [response]);

    return (
        <Wrapper>
            <TopNavBarFeedSearch />
            <PostWrapper>
                {homeFeed.length ? (
                    <PostsWrapper>
                        {homeFeed.map((val, id) => (
                            <Posts
                                key={id}
                                id={val.id}
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
            <BottomNavBarBasic type="home" />
        </Wrapper>
    );
}
