import styled from 'styled-components';

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
    color: #767676;
    font-size: 12px;
`;

const Input = styled.input`
    height: 34px;
    border: none;
    border-bottom: 1px solid #dbdbdb;
    transition: all 0.3s;

    &:focus {
        border-color: #362e31;
        outline: none;
    }
`;

const LoginBtn = styled.button`
    width: 100%;
    height: 44px;
    background-color: #d2cbce;
    border-radius: 22px;
    border: none;
    color: #fff;
    cursor: pointer;
    margin: 12px 0 5px;
    transition: all 0.3s;

    &:hover {
        background-color: #362e31;
    }

    &:active {
        background-color: #000;
    }
`;

const EmailJoinLink = styled.a`
    color: #767676;
    font-size: 12px;
    text-decoration: underline;
`;

export { LoginWrapper, TitleText, InputForm, Label, Input, LoginBtn, EmailJoinLink };
