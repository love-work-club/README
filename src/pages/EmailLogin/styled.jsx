import styled from 'styled-components';
import defaultTheme from '../../commons/style/themes/default';

const LoginWrapper = styled.div`
    &.login-wrap {
        width: 390px;
        height: 844px;
        margin: 0 auto;
        padding: 33px 34px;
        text-align: center;
    }
`;

const TitleText = styled.h2`
    &.title {
        font-size: 21px;
        margin-bottom: 47px;
    }

    &.profileTitle {
        font-size: 21px;
        margin-bottom: 17px;
    }
`;

const SubTitleText = styled.p`
    &.subTitle {
        font-size: 12px;
        margin-bottom: 18px;
    }
`;

const InputForm = styled.div`
    width: 322px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 18px;
    text-align: left;
`;

const Label = styled.label`
    color: ${defaultTheme.palette.gray3};
    font-size: ${defaultTheme.fontSize.sm};
`;

const Input = styled.input`
    height: 34px;
    border: none;
    border-bottom: 1px solid ${defaultTheme.palette.gray};
    transition: all 0.3s;

    &:focus {
        border-color: ${defaultTheme.palette.primary};
        outline: none;
    }
`;

const LoginBtn = styled.button`
    width: 100%;
    height: 44px;
    background-color: ${defaultTheme.palette.disable};
    border-radius: 22px;
    border: none;
    color: ${defaultTheme.palette.white};
    cursor: pointer;
    margin: 12px 0 5px;
    transition: all 0.3s;

    &:hover {
        background-color: ${defaultTheme.palette.primary};
    }

    &:active {
        background-color: ${defaultTheme.palette.black};
    }
`;

const EmailJoinLink = styled.a`
    color: ${defaultTheme.palette.gray3};
    font-size: ${defaultTheme.fontSize.sm};
    text-decoration: underline;
`;

const ErrorP = styled.p`
    color: ${defaultTheme.palette.gray3};
    /* color: #eb5757; */
    font-size: ${defaultTheme.fontSize.xs};
    padding-top: 4px;
`;

// join profileSetting
const ImageForm = styled.div`
    width: 110px;
    height: 110px;
    position: relative;
    margin: 0 auto 30px;
`;
const ProfileImage = styled.img`
    width: 100%;
    height: 100%;
    cursor: pointer;
    border-radius: 50%;
    background-color: pink;
`;

export {
    LoginWrapper,
    TitleText,
    SubTitleText,
    InputForm,
    Label,
    Input,
    LoginBtn,
    EmailJoinLink,
    ErrorP,
    ImageForm,
    ProfileImage,
};
