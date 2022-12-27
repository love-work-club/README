import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import TopNavBarView from '../../molecules/TopNavBarView/TopNavBarView';
import Posts from '../../molecules/Posts/Posts';
import AuthContext from '../../../store/auth-context';
import PostImg from '../../molecules/PostImg/PostImg';
import { Empty } from '../../molecules/Empty/Empty';

const PostListWrapper = styled.div`
    height: 100%;
`;

const PostWrapper = styled.div`
    padding: 16px;
`;

const PhotoWrapper = styled.div`
    margin-bottom: 50px;
    padding: 16px;
    display: grid;
    grid-template-rows: repeat(auto, 1fr);
    grid-template-columns: repeat(3, 1fr);
    gap: 8px;
`;

export default function PostList() {
    // 상대 게시글 가져오기
    const [posts, setPosts] = useState([]);
    const token = useContext(AuthContext).token;
    const API_HOST = process.env.REACT_APP_BASE_URL;

    const config = {
        method: 'get',
        url: `${API_HOST}/post/dotory/userpost`,
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-type': 'application/json',
        },
    };

    useEffect(() => {
        axios(config)
            .then(res => {
                setPosts(res.data.post);
                console.log(res.data.post);
            })
            .catch(err => console.log(err));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // 피드형 버튼 누르면 피드형 리스트 보여주고, 사진형 버튼 누르면 사진형 리스트 보여주기(기본형은 피드형)
    const [isList, setIsList] = useState(true);

    function childToParent(val) {
        setIsList(val);
    }

    return (
        <>
            {posts.length ? (
                <PostListWrapper>
                    <TopNavBarView childToParent={childToParent} isList={isList} />
                    <>
                        {isList ? (
                            <PostWrapper>
                                {posts.map((post, i) => (
                                    <Posts
                                        key={i}
                                        nickname={post.author.username}
                                        userId={post.author.accountname}
                                        date={post.createdAt}
                                        children={post.content}
                                        imgSrc={post.image ? `${API_HOST}/${post.image}` : null}
                                    />
                                ))}
                            </PostWrapper>
                        ) : (
                            <PhotoWrapper>
                                {posts.map((post, i) =>
                                    post.image ? <PostImg key={i} imgSrc={`${API_HOST}/${post.image}`} /> : null
                                )}
                            </PhotoWrapper>
                        )}
                    </>
                </PostListWrapper>
            ) : (
                <Empty />
            )}
        </>
    );
}
