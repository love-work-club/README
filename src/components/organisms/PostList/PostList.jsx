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

export default function PostList({ accountName, ...props }) {
    // accountName의 게시글 가져오기
    const [posts, setPosts] = useState([]);
    const token = useContext(AuthContext).token;
    const API_HOST = process.env.REACT_APP_BASE_URL;

    const config = {
        method: 'get',
        url: `${API_HOST}/post/${accountName}/userpost?limit=200`,
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
            .catch(err => console.error(err));
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
                                        id={post.id}
                                        userIcon={post.author.image}
                                        nickname={post.author.username}
                                        userId={post.author.accountname}
                                        date={post.createdAt}
                                        children={post.content}
                                        // 이미지가 있는지 없는지 확인 후 있을 때만 보여지게(* 삼항연산자가 없을 경우 이미지가 없는 게시물에도 이미지 액박이 나옴)
                                        imgSrc={post.image ? post.image : null}
                                    />
                                ))}
                            </PostWrapper>
                        ) : (
                            <PhotoWrapper>
                                {posts.map((post, i) => (post.image ? <PostImg key={i} imgSrc={post.image} /> : null))}
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
