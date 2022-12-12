import React from 'react';
import LoginWrapper from './styled';


function Login() {
  return (
    <LoginWrapper>
      <div className='login-wrap'>
        <h2 className='title'>로그인</h2>
        <form action="">
          <div className='input-form'>
            <label for="email">이메일</label>
            <input type="email" id="email" />
          </div>
          <div className='input-form'>
            <label for="pw">비밀번호</label>
            <input type="password" id="pw" />
          </div>
          <button type="button" className='login-btn'>로그인</button>
        </form>
        <a href='#' className='email-join-link'>이메일로 회원가입</a>
      </div>
    </LoginWrapper>
  )
}

export default Login;