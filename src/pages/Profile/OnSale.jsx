import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import ProductItem from '../../components/molecules/ProductItem/ProductItem';
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
    // 상품 리스트 불러오기
    const [products, setProducts] = useState([]);
    const API_HOST = 'https://mandarin.api.weniv.co.kr/';
    const token =
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzOWM0MjViMTdhZTY2NjU4MWM2NTE4MCIsImV4cCI6MTY3Njc4NDU4NiwiaWF0IjoxNjcxNjAwNTg2fQ.-iJYh4ugLMcsAfzft3y2U6DyO2O3MVwYRG3Pq_DePto';

    const config = {
        method: 'get',
        url: `${API_HOST}product/dotory`,
        headers: {
            Authorization: `Bearer ${token}`,
            'Content-type': 'application/json',
        },
    };

    useEffect(() => {
        axios(config)
            .then(res => {
                setProducts(res.data.product);
                console.log(res.data.product);
            })
            .catch(err => {
                console.log(err);
            });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            {products.length ? (
                <OnSaleWrapper>
                    <TitleText>판매 중인 상품</TitleText>
                    <ProductItemWrapper>
                        {products.length &&
                            products.map((product, i) => (
                                <ProductItem
                                    key={i}
                                    imgSrc={product.itemImage ? API_HOST + product.itemImage : null}
                                    price={product.price}
                                    itemName={product.itemName}
                                />
                            ))}
                    </ProductItemWrapper>
                </OnSaleWrapper>
            ) : null}
        </>
    );
}
