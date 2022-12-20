import React from 'react';
import styled from 'styled-components';
import ProductItem from '../../components/molecules/ProductItem/ProductItem';
import SellingImg from '../../assets/images/selling-img.png';
import defaultTheme from '../../commons/style/themes/default';

const OnSaleWrapper = styled.div`
    padding: 20px;
    padding-right: 0;
`;

const ProductItemWrapper = styled.div`
    width: 100vw;
    margin: 0 auto;
    display: flex;
    overflow: scroll;

    &::-webkit-scrollbar {
    display: none;
`;

const TitleText = styled.h3`
    font-size: ${defaultTheme.fontSize.lg};
    margin-bottom: 12px;
    font-weight: bolder;
`;

export default function OnSale() {
    return (
        <OnSaleWrapper>
            <TitleText>판매 중인 상품</TitleText>
            <ProductItemWrapper>
                <ProductItem url={SellingImg} price="25,000원" />
                <ProductItem url={SellingImg} price="11,500원" />
                <ProductItem url={SellingImg} price="30,000원" />
                <ProductItem url={SellingImg} price="24,000원" />
                <ProductItem url={SellingImg} price="33,500원" />
            </ProductItemWrapper>
        </OnSaleWrapper>
    );
}
