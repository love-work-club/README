import React, { useContext, useEffect, useLayoutEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import useAxios from '../../hooks/use-api';
import AuthContext from '../../store/auth-context';
import Posts from '../../components/molecules/Posts/Posts';
import TopNavBarBasic from '../../components/molecules/TopNavBarBasic/TopNavBarBasic';
import CommentBar from '../../components/molecules/Comment/CommentBar';
import CommentList from '../../components/molecules/Comment/CommentList';

const PostLists = styled.div`
    width: 100%;
    margin: 0 auto;
    padding: 12px 16px 20px 16px;
`;

const CommentsList = styled.ul``;

export default function DetailPosts() {
    const [post, setPost] = useState('');
    const [comment, setComment] = useState('');
    const [writeComment, setWriteComment] = useState(false);
    const params = useParams();
    const AuthCtx = useContext(AuthContext);
    const navigate = useNavigate();

    const { ResData, response, error } = useAxios({
        method: 'get',
        url: `${process.env.REACT_APP_BASE_URL}/post/${params.id}`,
        headers: {
            Authorization: `Bearer ${AuthCtx.token}`,
            'Content-type': 'application/json',
        },
    });

    // 나중에 분리합시다,,
    // const { response: commentResponse, error: commentError } = useAxios({
    //     method: 'get',
    //     url: `${process.env.REACT_APP_BASE_URL}/post/${params.id}/comments`,
    //     headers: {
    //         Authorization: `Bearer ${AuthCtx.token}`,
    //         'Content-type': 'application/json',
    //     },
    // });

    const {
        ResData: deletedResData,
        response: deletedRes,
        error: deletedError,
    } = useAxios({
        method: 'delete',
        url: `${process.env.REACT_APP_BASE_URL}/post/${params.id}/unheart`,
        headers: {
            Authorization: `Bearer ${AuthCtx.token}`,
            'Content-type': 'application/json',
        },
    });

    const {
        ResData: heartedResData,
        response: heartedRes,
        error: heartedError,
    } = useAxios({
        method: 'post',
        url: `${process.env.REACT_APP_BASE_URL}/post/${params.id}/heart`,
        headers: {
            Authorization: `Bearer ${AuthCtx.token}`,
            'Content-type': 'application/json',
        },
    });

    const getComments = async () => {
        await axios
            .get(`${process.env.REACT_APP_BASE_URL}/post/${params.id}/comments`, {
                headers: {
                    Authorization: `Bearer ${AuthCtx.token}`,
                    'Content-type': 'application/json',
                },
            })
            .then(res => {
                setComment(res.data.comments);
            })
            .catch(err => navigate('/notfound'));
    };

    useEffect(() => {
        ResData();
    }, []);

    useEffect(() => {
        if (response !== null) {
            setPost(response.post);
            getComments();
        }
    }, [response]);

    const handleCommentBar = () => {
        setWriteComment(!writeComment);
    };

    const handleDeleteHeart = e => {
        e.preventDefault();
        deletedResData();
        ResData();
    };

    const handlePostHeart = e => {
        e.preventDefault();
        heartedResData();
        ResData();
    };

    return (
        <>
            <TopNavBarBasic />
            <PostLists>
                {post && (
                    <Posts
                        id={post.id}
                        userIcon={post.author.image}
                        nickname={post.author.username}
                        userId={post.author.accountname}
                        children={post.content}
                        date={post.createdAt}
                        imgSrc={post.image}
                        hearted={post.hearted}
                        deleteHeart={handleDeleteHeart}
                        postHeart={handlePostHeart}
                        heartsCount={post.heartCount}
                        commentsCount={post.comments.length}
                        onComment={handleCommentBar}
                    />
                )}
            </PostLists>
            {comment.length ? (
                <CommentsList>
                    {comment.map((val, id) => (
                        <CommentList
                            key={id}
                            userIcon={val.author.image}
                            userName={val.author.username}
                            userTime={val.createdAt}
                            children={val.content}
                        />
                    ))}
                </CommentsList>
            ) : (
                <></>
            )}
            {!writeComment ? <></> : <CommentBar getComments={getComments} />}
        </>
    );
}
