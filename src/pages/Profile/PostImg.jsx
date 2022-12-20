import React from 'react';
import styled from 'styled-components';
import ImgPost from '../../assets/images/post-img.png';
import defaultTheme from '../../commons/style/themes/default';

const PostImgWrapper = styled.div`
    display: grid;
    grid-template-rows: repeat(auto, 1fr);
    grid-template-columns: repeat(3, 1fr);
    gap: 8px;
`;

const ImgBox = styled.img`
    width: 100%;
    aspect-ratio: 1;
`;

export default function PostImg() {
    return (
        <PostImgWrapper>
            <ImgBox src={ImgPost} />
            <ImgBox src={ImgPost} />
            <ImgBox src={ImgPost} />
            <ImgBox src={ImgPost} />
            <ImgBox src={ImgPost} />
            <ImgBox src={ImgPost} />
            <ImgBox src={ImgPost} />
            <ImgBox src={ImgPost} />
            <ImgBox src={ImgPost} />
        </PostImgWrapper>
    );
}
