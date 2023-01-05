import React, { useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as ProfileLogo } from '../../../assets/icons/profile_sm.svg';
import MoreIcon from '../../../assets/icons/feed-more-option.svg';
import defaultTheme from '../../../commons/style/themes/default';

const CommentsWrap = styled.li`
    display: flex;
    padding: 16px;
    border-top: 1px solid ${defaultTheme.palette.gray};
`;

const UserIcon = styled.img`
    height: 36px;
    min-width: 36px;
    border-radius: 100%;
`;

const ProfileBadge = styled(ProfileLogo)`
    min-width: 36px;
`;

const CommentWrap = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    padding: 0 12px;
    gap: 16px;
`;

const CommentStrong = styled.strong`
    font-family: 'Pretendard_Medium';
    line-height: 18px;
`;

const CommentTime = styled.p`
    font-size: ${defaultTheme.fontSize.xs};
    line-height: 13px;
    padding: 2px 0;
`;

const CommentContent = styled.div`
    color: ${defaultTheme.palette.content};
`;

const CommentUser = styled.div`
    display: flex;
    gap: 6px;
`;

const MoreBtn = styled.button`
    cursor: pointer;
    position: absolute;
    right: 20px;
`;

export default function CommentList({ userIcon, userName, userTime, children }) {
    const [modal, setModal] = useState(false);

    const handleModal = () => {
        setModal(true);
    };

    const handleBackdrop = e => {
        const clicked = e.target.closest('.postmodal');

        if (!clicked) {
            setModal(false);
        }
    };

    const commentDate = date => {
        const nowDate = new Date();
        const newDate = new Date(date);
        const commentedDate = Math.floor((nowDate.getTime() - newDate.getTime()) / 1000 / 60);

        if (commentedDate < 1) return '방금 전';
        if (commentedDate < 60) return `${commentedDate}분 전`;

        const commentedDateHour = Math.floor(commentedDate / 60);

        if (commentedDateHour < 24) return `${commentedDateHour}시간 전`;

        const commentedDateDay = Math.floor(commentedDate / 60 / 24);

        if (commentedDateDay < 365) return `${commentedDateDay}일 전`;

        return `${Math.floor(commentedDateDay / 365)}년 전`;
    };

    return (
        <>
            {/* {modal && <Modal onBack={handleBackdrop} onModal="" />} */}
            <CommentsWrap>
                {userIcon ? <UserIcon src={userIcon} /> : <ProfileBadge />}
                <CommentWrap>
                    <CommentUser>
                        <CommentStrong>{userName}</CommentStrong>
                        <CommentTime>{commentDate(userTime)}</CommentTime>
                    </CommentUser>
                    <MoreBtn onClick={handleModal}>
                        <img src={MoreIcon} alt="더보기" />
                    </MoreBtn>
                    <CommentContent>{children}</CommentContent>
                </CommentWrap>
            </CommentsWrap>
        </>
    );
}
