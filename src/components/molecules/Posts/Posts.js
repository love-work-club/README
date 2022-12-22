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

const PostBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding-top: 4px;
`;

const PostWrapper = styled.div`
    display: flex;
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
    padding-top: 16px;
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

const HeartSvg = styled(HeartIcon)`
    margin-right: 6px;
`;

const CommentSvg = styled(CommentIcon)`
    margin: 0 6px 0 16px;
`;

const DateDiv = styled.div`
    font-size: 10px;
    line-height: 12px;
    color: ${defaultTheme.palette.gray3};
    padding-top: 2.5px;
`;

export default function Posts({ nickname, userId, children, date, imgSrc }) {
    return (
        <>
            <PostList>
                <ProfileLogo />
                <PostBox>
                    <PostWrapper>
                        <PostDiv>
                            <UserName>{nickname}</UserName>
                            <UserId>{userId}</UserId>
                        </PostDiv>
                    </PostWrapper>
                    <ContentWrapper>
                        {<PostImg src={imgSrc} />}
                        {children}
                    </ContentWrapper>
                    <LikeComment>
                        <HeartSvg />
                        <CommentSvg />
                    </LikeComment>
                    <DateDiv>{date}</DateDiv>
                </PostBox>
            </PostList>
        </>
    );
}
