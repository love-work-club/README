import React from 'react';
import Button from '../../components/atoms/Button/Button';
import { LoginWrapper, TitleText, InputForm, Label, Input, LoginBtn } from '../Login/styled';


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
                </InputForm>
                <Button size="large" type={'submit'}>
                    로그인
                </Button>
            </form>

        </LoginWrapper>
    );
}

export default EmailLogin;