import styled from 'styled-components';
import SplashLogo from '../../assets/logo/README_splash_logo.svg';

const SplashWrap = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
    opacity: 0;
    @keyframes fadeIn {
        from {
            opacity: 0;
        }

        to {
            opacity: 1;
        }
    }
    -webkit-animation: fadeIn 2s 1s infinite linear;
`;

const H1 = styled.h1`
    margin-bottom: 30px;
`;

const Img = styled.img`
    width: 100%;
`;

const Strong = styled.strong`
    font-size: 42px;
    color: #362e31;
`;

export default function Splash() {
    return (
        <>
            <SplashWrap className="fadeIn">
                <H1>
                    <Img src={SplashLogo} />
                </H1>
                <Strong>READ.ME</Strong>
            </SplashWrap>
        </>
    );
}
