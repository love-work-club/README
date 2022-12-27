import React from 'react';
import styled from 'styled-components';
import { ReactComponent as ProfileLogo } from '../../../assets/icons/profile_sm.svg';
import { ReactComponent as HeartIcon } from '../../../assets/icons/icon-heart.svg';
import { ReactComponent as CommentIcon } from '../../../assets/icons/message-circle.svg';
import defaultTheme from '../../../commons/style/themes/default';

const PostList = styled.li`
    display: flex;
    gap: 12px;
    margin-bottom: 30px;
`;

const ImgProfileLogo = styled.img`
    height: 36px;
    border-radius: 100%;
`;

const PostBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding-top: 4px;
`;

const PostWrapper = styled.div`
    display: flex;
    gap: 16px;
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

const HeartSvg = styled(HeartIcon)``;

const Count = styled.p`
    margin-left: 8px;
    font-size: ${defaultTheme.fontSize.sm};
    line-height: ${defaultTheme.fontSize.sm};
    padding: 4px 0;
    color: ${defaultTheme.palette.gray3};
`;

const CommentSvg = styled(CommentIcon)`
    margin: 0 0 0 16px;
`;

const DateDiv = styled.div`
    font-size: 10px;
    line-height: 12px;
    color: ${defaultTheme.palette.gray3};
    padding-top: 2.5px;
`;

const postDate = date => {
    const newDate = new Date(date);
    const postedDate = `${newDate.getFullYear()}년 ${newDate.getMonth() + 1}월 ${newDate.getDate()}일`;

    return postedDate;
};

export default function Posts({ userIcon, nickname, userId, children, date, imgSrc, heartsCount, commentsCount }) {
    return (
        <>
            <PostList>
                {userIcon ? <ImgProfileLogo src={userIcon} /> : <ProfileLogo />}
                <PostBox>
                    <PostWrapper>
                        <PostDiv>
                            <UserName>{nickname}</UserName>
                            <UserId>{`@${userId}`}</UserId>
                        </PostDiv>
                    </PostWrapper>
                    <ContentWrapper>{children}</ContentWrapper>
                    {<PostImg src={imgSrc} />}
                    <LikeComment>
                        <HeartSvg />
                        <Count>{heartsCount}</Count>
                        <CommentSvg />
                        <Count>{commentsCount}</Count>
                    </LikeComment>
                    <DateDiv>{postDate(date)}</DateDiv>
                </PostBox>
            </PostList>
        </>
    );
}
