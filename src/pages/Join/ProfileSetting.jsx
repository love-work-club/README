import React from 'react'
import {ErrorMessage, StyledInput, StyledLabel} from '../../commons/style/InputStyle'
import {TitleText, SubTitleText} from '../../commons/style/TitleTextStyle'


export default function ProfileSetting() {
  return (
    <div>
      <TitleText class="profile">프로필 설정</TitleText>
      <SubTitleText>나중에 언제든지 변경할 수 있습니다.</SubTitleText>
      <div class="img-modi">
        <img class="profile-img" src="" alt="프로필 화면" />
        <button class="file-select">
          <img src="../assets/test_2.png" alt="파일선택"/>
        </button> 
      </div>
      <StyledLabel htmlFor="userName">사용자 이름</StyledLabel><br/>
      <StyledInput type="text" id='userName' required/><br/>
      <StyledLabel htmlFor="userEmail">계정 ID</StyledLabel><br/>
      <StyledInput type="text" id='userEmail' required/><br/>
      <ErrorMessage>* 영문,숫자,밑줄 및 마침표만 사용할 수 있습니다.</ErrorMessage><br />
      <ErrorMessage>* 이미 사용 중인 ID입니다.</ErrorMessage><br />
      <StyledLabel htmlFor="intro">소개</StyledLabel><br/>
      <StyledInput type="text" id='intro'/>
    </div>
  )
}
