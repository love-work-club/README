import React from 'react';
import styled from 'styled-components';
import Logo from '../../assets/logo/404.png';
import defaulttheme from '../../commons/style/themes/default';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
`;

const NotFoundImg = styled.img`
    height: 150px;
    width: 150px;
    margin: 40px;
`;

const NotFoundH1 = styled.h1`
    font-family: 'Pretendard_Bold';
    font-size: 50px;
    color: ${defaulttheme.palette.primary};
`;

export default function NotFound() {
    return (
        <>
            <Wrapper>
                <NotFoundImg src={Logo} alt="Not Found" />
                <NotFoundH1>Not Found</NotFoundH1>
            </Wrapper>
        </>
    );
}
