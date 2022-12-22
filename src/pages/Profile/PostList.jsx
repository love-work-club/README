import React from 'react';
import styled from 'styled-components';
import TopNavBarView from '../../components/molecules/TopNavBarView/TopNavBarView';
import { Empty } from './Empty';
import Posts from '../../components/molecules/Posts/Posts';
import PostImg from './PostImg';

const PostListWrapper = styled.div`
    height: 100%;
`;

const PostWrapper = styled.div`
    padding: 16px;
`;

const PhotoWrapper = styled.div`
    padding: 16px;
`;

export default function PostList() {
    return (
        <PostListWrapper>
            <TopNavBarView />

            {/* FeedList */}
            <PostWrapper>
                <Posts
                    nickname="단발의 최양락"
                    userId="@ README_Yangrak"
                    date="2022년 12월 20일"
                    children="게시글 내용~"
                />
            </PostWrapper>
            {/* /FeedList */}

            {/* photoList */}
            <PhotoWrapper>
                <PostImg />
            </PhotoWrapper>
            {/* /photoList */}
        </PostListWrapper>
    );
}
