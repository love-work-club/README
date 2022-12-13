import React from 'react'
// import Button from './components/atoms/Button/Button'
import { LoginWrapper, TitleText, InputForm, Label, Input, LoginBtn, EmailJoinLink } from '../Login/styled';


function App() {
    // return (
    //     <Button size="mediumSmall" type={'submit'}>
    //         다음
    //     </Button>
    // );
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
                <LoginBtn type="button">로그인</LoginBtn>
            </form>
            <EmailJoinLink href="#">이메일로 회원가입</EmailJoinLink>
        </LoginWrapper>
    );
}

export default App;