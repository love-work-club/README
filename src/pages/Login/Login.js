import React from 'react';
import styled from 'styled-components';

export default function Login() {
    const LoginSection = styled.section`
        display: flex;
        height: 100vh;
        background-color: #362E31;
        color: #ffffff ;
        font-size: 35px;
        text-align: center ;
        flex-direction: column;
        justify-content: center;
    `;

    const LogihH1 = styled.h1`
        margin-bottom: 213px ;
    `;

    const LoginForm = styled.form`
        position: fixed;
        width: 100%;
        background-color: #ffffff;
        border-radius: 30px 30px 0 0;
        bottom: 0;
        padding: 50px 34px 85px 34px;
        font-size: 14px;
    `;

    const SocialLogin = styled.div`
        display: flex;
        flex-direction: column;
        gap: 10px;
    `;

    const SocialBtn = styled.button`
        border: none;
        background-color: #fff;
        cursor: pointer;
        padding: 13px 87px;
        border-radius: 44px;
        &.kt{
            border: 1px solid #F2C94C;
        }
        &.gg{
            border: 1px solid #767676;
        }
        &.fb{
            border: 1px solid #2D9CDB;
        }
    `;

    const EmailDiv = styled.div`
        display: flex;
        padding-top: 20px;
        justify-content: center;
        gap: 32px;
        .btnEmailLogin::after {
            content: '';
            background-color: #C4C4C4;
            width: 0.8px;
            height: 11px;
            position: absolute;
            margin: 5px 22px;
        }
    `;

    const EmailButton = styled.button`
    border: none;
    background-color: #fff;
    color: #767676;
    cursor: pointer;
    `; 

    return (
        <>
            <LoginSection>
                <LogihH1>READ.ME</LogihH1>
                <LoginForm>
                    <SocialLogin>
                        <SocialBtn className='kt'>카카오톡 계정으로 로그인</SocialBtn>
                        <SocialBtn className="gg">구글 계정으로 로그인</SocialBtn>
                        <SocialBtn className="fb">페이스북 계정으로 로그인</SocialBtn>
                    </SocialLogin>
                    <EmailDiv className="btnEmailLogin-Join">
                        <EmailButton className="btnEmailLogin">이메일로 로그인</EmailButton>
                        <EmailButton className="btnJoinLogin">회원가입</EmailButton>
                    </EmailDiv>
                </LoginForm>
            </LoginSection>
        </>
    );
}