import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import ProductItem from '../../molecules/ProductItem/ProductItem';
import defaultTheme from '../../../commons/style/themes/default';
import AuthContext from '../../../store/auth-context';

const OnSaleWrapper = styled.div`
    padding: 20px;
    padding-right: 0;
`;

const ProductItemWrapper = styled.div`
    width: 100%;
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

export default function OnSale({ accountName, ...props }) {
    // 상품 리스트 불러오기
    const [products, setProducts] = useState([]);
    const API_HOST = process.env.REACT_APP_BASE_URL;
    const token = useContext(AuthContext).token;

    const config = {
        method: 'get',
        url: `${API_HOST}/product/${accountName}`,
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
                                    imgSrc={product.itemImage ? `${API_HOST}/${product.itemImage}` : null}
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
