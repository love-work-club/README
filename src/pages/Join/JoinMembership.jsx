import React from 'react'
import { FullBtn } from '../../commons/style/Buttons'
import {ErrorMessage, StyledInput, StyledLabel} from '../../commons/style/InputStyle'
import {TitleText} from '../../commons/style/TitleTextStyle'




export default function JoinMembership() {
  return (
    <div>
      <TitleText>이메일로 회원가입</TitleText>
      <form action="submit">
        <StyledLabel htmlFor="userMail">이메일</StyledLabel><br />
        <StyledInput type="text" id='userMail' placeholder="이메일 주소를 입력해 주세요" required /><br/><br/>
        <ErrorMessage>* 이미 가입된 주소입니다.</ErrorMessage><br />
        <StyledLabel htmlFor="userPassword">비밀번호</StyledLabel><br />
        <StyledInput type="text" id='userPassword' placeholder="비밀번호를 설정해 주세요" required/><br/><br/>
        <ErrorMessage>* 비밀번호는 6자 이상이어야 합니다.</ErrorMessage><br />
        <FullBtn>다음</FullBtn>
      </form>
    </div>
  )
}
