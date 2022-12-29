import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { ReactComponent as ProfileLogo } from '../../../assets/icons/profile_sm.svg';
import defaultTheme from '../../../commons/style/themes/default';
import AuthContext from '../../../store/auth-context';
import useAxios from '../../../hooks/use-api';

const CommentForm = styled.form`
    display: flex;
    width: 100%;
    height: 61px;
    padding: 13px 20px 13px 16px;
    position: fixed;
    bottom: 0;
    border-top: 1px solid ${defaultTheme.palette.gray};
    background-color: ${defaultTheme.palette.white};
`;

const CommentInput = styled.input`
    flex-grow: 1;
    padding: 0 18px;
    font-size: 14px;
    line-height: 18px;
    &::placeholder {
        color: ${defaultTheme.palette.gray2};
    }
`;

const CommentBtn = styled.button`
    cursor: pointer;
    color: ${defaultTheme.palette.icon};
    &:disabled {
        cursor: none;
        color: ${defaultTheme.palette.disable};
    }
`;

export default function CommentBar({ type, getComments }) {
    const [comment, setComment] = useState('');
    const navigate = useNavigate();
    const params = useParams();
    const AuthCtx = useContext(AuthContext);

    const handleComment = e => {
        setComment(e.target.value);
    };

    let btnDisabled = false;

    if (!comment.trim()) {
        btnDisabled = true;
    }

    const content = {
        comment: {
            content: comment,
        },
    };

    const handleSubmit = async e => {
        e.preventDefault();

        await axios
            .post(`${process.env.REACT_APP_BASE_URL}/post/${params.id}/comments`, JSON.stringify(content), {
                headers: {
                    Authorization: `Bearer ${AuthCtx.token}`,
                    'Content-type': 'application/json',
                },
            })
            .then(res => {
                setComment('');
                getComments();
            });
    };

    return (
        <>
            <CommentForm onSubmit={handleSubmit}>
                <ProfileLogo />
                <CommentInput type="text" placeholder="댓글 입력하기..." value={comment} onChange={handleComment} />
                <CommentBtn disabled={btnDisabled} type={type || 'button'}>
                    게시
                </CommentBtn>
            </CommentForm>
        </>
    );
}
