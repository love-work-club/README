import styled from 'styled-components';
import Logo from '../../assets/logo/README_black.png';
import defaulttheme from '../../commons/style/themes/default';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
`;

const LogoImg = styled.img`
    height: 150px;
    width: 150px;
    margin: 40px;
`;

const StyledH1 = styled.h1`
    font-family: 'Pretendard_Bold';
    font-size: 50px;
    color: ${defaulttheme.palette.primary};
`;

export default function Splash() {
    return (
        <>
            <Wrapper>
                <LogoImg src={Logo} alt="README 로고" />
                <StyledH1>READ ME</StyledH1>
            </Wrapper>
        </>
    );
}
