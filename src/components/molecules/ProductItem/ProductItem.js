import React from 'react';
import styled from 'styled-components';
import defaultTheme from '../../../commons/style/themes/default';

const StyledArticle = styled.article`
    width: 140px;
`;

const StyledImg = styled.img`
    height: 90px;
    object-fit: cover;
    border-radius: 8px;
`;
const TitleDiv = styled.div`
    padding: 6px 2px 4px;
    line-height: 18px;
`;
const StyledStrong = styled.strong`
    color: ${defaultTheme.palette.icon};
    font-family: 'Pretendard_Bold';
    font-size: 12px;
    line-height: 15px;
    padding: 0 2px;
`;

export default function ProductItem({ url, children, price }) {
    return (
        <StyledArticle>
            <StyledImg src={url} alt="상품 이미지" />
            <TitleDiv>{children}</TitleDiv>
            <StyledStrong>{price}</StyledStrong>
        </StyledArticle>
    );
}
