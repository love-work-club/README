import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { ReactComponent as ProfileLogo } from '../../../assets/icons/profile_sm.svg';
import { ReactComponent as HeartIcon } from '../../../assets/icons/icon-heart.svg';
import { ReactComponent as CommentIcon } from '../../../assets/icons/message-circle.svg';
import MoreIcon from '../../../assets/icons/feed-more-option.svg';
import defaultTheme from '../../../commons/style/themes/default';
import Modal from '../Modal/Modal';

const PostList = styled.li`
    width: 100%;
    display: flex;
    gap: 12px;
`;

const ImgProfileLogo = styled.img`
    height: 42px;
    border-radius: 100%;
    min-width: 42px;
`;

const PostBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding-top: 4px;
`;

const PostWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;

const PostDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
`;

const UserName = styled.strong`
    font-family: 'Pretendard_Medium';
    line-height: 18px;
`;

const UserId = styled.div`
    font-size: 12px;
    color: ${defaultTheme.palette.gray3};
`;

const ContentWrapper = styled.div`
    line-height: 18px;
    display: flex;
    flex-direction: column;
    padding-top: ${props => (props.imgSrc ? '16px' : 0)};
`;

const PostImg = styled.img`
    width: 304px;
    border-radius: 10px;
    object-fit: contain;
    visibility: ${props => (props.imgSrc ? true : 'none')};
`;

const LikeComment = styled.div`
    display: flex;
`;

const HeartSvg = styled(HeartIcon)`
    margin-right: 6px;
`;

const CommentSvg = styled(CommentIcon)`
    margin: 0 6px 0 16px;
`;

const ProfileBadge = styled(ProfileLogo)`
    min-width: 36px;
`;

const MoreBtn = styled.button`
    cursor: pointer;
    position: absolute;
    right: 16px;
`;

const DateDiv = styled.div`
    font-size: 10px;
    line-height: 12px;
    color: ${defaultTheme.palette.gray3};
    padding-top: 2.5px;
`;

const Count = styled.p`
    font-size: ${defaultTheme.fontSize.sm};
    line-height: ${defaultTheme.fontSize.sm};
    padding: 4px 0;
    color: ${defaultTheme.palette.gray3};
`;

// 얘도 빼서 쓸 예정..
const postDate = date => {
    const newDate = new Date(date);
    const postedDate = `${newDate.getFullYear()}년 ${newDate.getMonth() + 1}월 ${newDate.getDate()}일`;

    return postedDate;
};

export default function Posts({
    id,
    userIcon,
    nickname,
    userId,
    children,
    date,
    imgSrc,
    heartsCount,
    commentsCount,
    onComment,
}) {
    const [modal, setModal] = useState(false);
    const navigate = useNavigate();

    const handleModal = () => {
        setModal(true);
    };

    const handleBackdrop = e => {
        const clicked = e.target.closest('.postmodal');

        if (!clicked) {
            setModal(false);
        }
    };

    const handleDetail = e => navigate(`/post/${id}`);

    return (
        <>
            {/* {modal && <Modal onBack={handleBackdrop} onModal="post" />} */}
            <PostList onClick={handleDetail}>
                {userIcon ? <ImgProfileLogo src={userIcon} /> : <ProfileBadge />}
                <PostBox>
                    <PostWrapper>
                        <PostDiv>
                            <UserName>{nickname}</UserName>
                            <UserId>{`@${userId}`}</UserId>
                        </PostDiv>
                        <MoreBtn onClick={handleModal}>
                            <img src={MoreIcon} alt="더보기" />
                        </MoreBtn>
                    </PostWrapper>
                    <ContentWrapper>{children}</ContentWrapper>
                    {<PostImg src={imgSrc} />}
                    <LikeComment>
                        <HeartSvg />
                        <Count>{heartsCount}</Count>
                        <div className="commentClick" onClick={onComment}>
                            <CommentSvg />
                        </div>
                        <Count>{commentsCount}</Count>
                    </LikeComment>
                    <DateDiv>{postDate(date)}</DateDiv>
                </PostBox>
            </PostList>
        </>
    );
}
