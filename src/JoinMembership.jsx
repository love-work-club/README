import React from 'react'

export default function JoinMembership() {
  return (
    <div>
      <h2>이메일로 회원가입</h2>
      <label htmlFor="userMail">이메일</label>
      <input type="text" id='userMail'/><br/><br/>
      <label htmlFor="userPassword">비밀번호</label>
      <input type="text" id='userPassword'/><br/><br/>
      <button>다음</button>
    </div>
  )
}
