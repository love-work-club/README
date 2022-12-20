import React from 'react';
import styled from 'styled-components';
import { ReactComponent as ProfileLogo } from '../../../assets/icons/profile_sm.svg';
import defaultTheme from '../../../commons/style/themes/default';

export default function CommentBar({ type, comment, disabled }) {
    const CommentForm = styled.form`
        display: flex;
        width: 390px;
        height: 61px;
        padding: 13px 16px 12px 16px;
    `;

    const CommentInput = styled.input`
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
            cursor: default;
            color: ${defaultTheme.palette.gray2};
        }
    `;

    const onSubmit = e => {
        e.preventDefault();
    };

    const onChange = e => {};

    return (
        <>
            <CommentForm onSubmit={onSubmit}>
                <ProfileLogo />
                <CommentInput type="text" placeholder="댓글 입력하기..." value={comment} onChange={onChange} />
                <CommentBtn type={type || 'button'} disabled={disabled}>
                    게시
                </CommentBtn>
            </CommentForm>
        </>
    );
}
