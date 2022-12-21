import React from 'react';
import styled from 'styled-components';
import defaultTheme from '../../../commons/style/themes/default';

const StyledArticle = styled.article`
    width: 150px;
    margin: 5px;
`;

const StyledImg = styled.img`
    width: 140px;
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

export default function ProductItem({ itemName, price, imgSrc }) {
    return (
        <StyledArticle>
            <StyledImg src={imgSrc} alt="상품 이미지" />
            <TitleDiv>{itemName}</TitleDiv>
            <StyledStrong>{price}원</StyledStrong>
        </StyledArticle>
    );
}
