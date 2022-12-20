import React from 'react';
import styled from 'styled-components';
import Button from '../../components/atoms/Button/Button';
import { ErrorMessage } from '../Join/InputStyle';

export const LoginWrapper = styled.div`
    &.login-wrap {
        width: 390px;
        height: 844px;
        margin: 0 auto;
        padding: 33px 34px;
        text-align: center;
    }
`;

export const TitleText = styled.h2`
    &.title {
        font-size: 21px;
        margin-bottom: 47px;
    }
`;

export const InputForm = styled.div`
    width: 322px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 18px;
    text-align: left;
`;

export const Label = styled.label`
    color: #767676;
    font-size: 12px;
`;

export const Input = styled.input`
    height: 34px;
    border: none;
    border-bottom: 1px solid #dbdbdb;
    transition: all 0.3s;

    &:focus {
        border-color: #362e31;
        outline: none;
    }
`;

export const LoginBtn = styled.button`
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

export const EmailJoinLink = styled.a`
    color: #767676;
    font-size: 12px;
    text-decoration: underline;
    display: block;
    margin-top: 22px;
`;

function EmailLogin() {
    const submitHandler = e => {
        e.preventDefault();
    };

    return (
        <LoginWrapper className="login-wrap">
            <TitleText className="title">로그인</TitleText>
            <form onSubmit={submitHandler}>
                <InputForm>
                    <Label forName="email">이메일</Label>
                    <Input type="email" id="email" />
                </InputForm>
                <InputForm>
                    <Label forName="pw">비밀번호</Label>
                    <Input type="password" id="pw" />
                    <ErrorMessage>* 이메일 또는 비밀번호가 일치하지 않습니다.</ErrorMessage>
                </InputForm>
                <Button size="large" type={'submit'}>
                    로그인
                </Button>
            </form>
            <EmailJoinLink href="#">이메일로 회원가입</EmailJoinLink>
        </LoginWrapper>
    );
}

export default EmailLogin;
