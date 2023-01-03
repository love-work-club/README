import styled from 'styled-components';
import SplashLogo from '../../assets/logo/README_splash_logo.svg';

const SplashWrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
`;

const H1 = styled.h1`
    margin-bottom: 30px;
`;

const Strong = styled.strong`
    font-size: 42px;
    color: #362e31;
`;

const Img = styled.img``;

export default function Splash() {
    return (
        <>
            <SplashWrap>
                <H1>
                    <img src={SplashLogo} />
                </H1>
                <Strong>READ.ME</Strong>
            </SplashWrap>
        </>
    );
}
