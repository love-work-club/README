import React from 'react'

export default function JoinMembership() {
  return (
    <div>
      <h3 class="profile">프로필 설정</h3>
      <p>나중에 언제든지 변경할 수 있습니다.</p>
      <div class="img-modi">
        <img class="profile-img" src="" alt="프로필 화면" />
        <button class="file-select">
          <img src="../assets/test_2.png" alt="파일선택"/>
        </button>
      </div>
      <label htmlFor="userName">사용자 이름</label>
      <input type="text" d='userName'/>
    </div>
  )
}
