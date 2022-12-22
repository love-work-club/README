import React from 'react';
import styled from 'styled-components';

const ImgBox = styled.img`
    width: 100%;
    aspect-ratio: 1;
    // visibility: ${props => (props.imgSrc ? true : 'none')};
`;

export default function PostImg({ imgSrc }) {
    return (
        <>
            <ImgBox src={imgSrc} />
        </>
    );
}
