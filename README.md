# README

## 책으로 소통하는 SNS형 오픈 마켓 팀 프로젝트

## 개요
- 멋쟁이 사자처럼 프론트엔드스쿨 3기 팀 프로젝트입니다.
- Read.me 서비스는 읽은 책의 내용을 공유하며, 교환/판매할 수 있는 SNS입니다.
- 상품을 등록하지 않아도 일상을 공유하며 즐거운 SNS 활동을 할 수 있습니다. 글과 사진과 함께 게시물을 작성하여 자신의 일상을 공유할 수 있습니다.

## 🗓 일정
### 기간 : 2022. 12. 09.(금) ~ 2023. 01. 04.(수)
- 주간 회의 진행 및 데일리 스크럼 진행  🔗[회의록](https://han.gl/FlzeL)



## 팀원
|**FE 김민지**|**FE 박태원**|**FE 백승지**|**FE 이시현** |
| :------------------------------------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| <img width="180" alt="minji_profile_img" src="https://avatars.githubusercontent.com/u/91003855?v=4"> | <img width="180" alt="taewon_profile_img" src="https://avatars.githubusercontent.com/u/112356419?v=4"> | <img width="180" alt="baeggoose_jeon_profile_img" src="https://avatars.githubusercontent.com/u/105825302?v=4"> | <img width="180" alt="sihyeon_profile_img" src="https://avatars.githubusercontent.com/u/76866137?v=4"> |
|**GitHub**: [minzyee](https://github.com/minzyee)|**GitHub**: [taewonnn](https://github.com/taewonnn)|**GitHub**: [baeggoose](https://github.com/baeggoose)|**GitHub**: [hey210056](https://github.com/hey210056)|

## 개발환경 / 배포URL
`React` `Styled-Component` `JavaScript` `HTML/CSS`
`Git` `Github` `Github Issues` [`Notion`](https://han.gl/gjHkk) [`Figma`](https://han.gl/IqxvJ)

**[배포 URL]**
- URL : https://....

## 🔍 담당
### [👩‍💻김민지](https://github.com/minzyee)

- UI :  상단 내비게이션, 프로필 셋팅 및 수정, 모달, 검색 페이지
- 기능 : 회원가입 및 프로필 셋팅, 프로필 수정, 검색
- 디자인 담당

### [👨‍💻박태원](https://github.com/taewonnn)

- UI : 회원가입 페이지 / BottomNavBar / Input,Label / Profile
- 기능 : MyProfile/YourProfile, 팔로잉/팔로우 페이지
- 회의록 담당

### [👩‍💻백승지](https://github.com/baeggoose)

- UI : 채팅 / 채팅룸 페이지
- 기능 : 상품 등록 페이지
- 디자인 기획 / 회의록 담당

### [👩‍💻이시현](https://github.com/hey210056)

- UI : 피드, 게시글, Splash, modal, 댓글, 버튼
- 기능 : Splash, 로그인, 홈 피드, 상세 게시글, 댓글, 모달 창 페이지
- ContextAPI / customHook(유효성 검사, useAxios) 구현 / ESLint, Prettier 

## 🔍 기능 및 UI

|[splash](#splash)|[로그인](#로그인)|
| :------------------------------------------------------------------: | :------------------------------------------------------------------: |
| <img src="" width="250"/> | <img src="https://user-images.githubusercontent.com/112356419/210474373-26cd6ab0-de6c-43a7-864e-1a215a22d917.gif" width="250"/> |

|[회원가입](#회원가입)|[프로필 설정](#회원가입)|
| :------------------------------------------------------------------: | :------------------------------------------------------------------: |
| <img src="" width="250"/> | <img src="" width="250"/> |

|[홈 피드](#홈피드)|[검색](#검색)|
| :------------------------------------------------------------------: | :------------------------------------------------------------------: |
| <img src="https://user-images.githubusercontent.com/112356419/210474324-8ba276bc-4654-4949-8b15-fcaf8ef8b98d.gif" width="250"/> | <img src="" width="250"/> |

|[게시물 등록](#게시물등록)|[게시물 상세](#게시물상세)|
| :------------------------------------------------------------------: | :------------------------------------------------------------------: |
| <img src="https://user-images.githubusercontent.com/76866137/210515000-5767529b-c618-4229-84f2-c5a1bbace152.gif" width="250"/> | <img src="https://user-images.githubusercontent.com/112356419/210531058-db093611-2ace-4425-b38e-393040df44c5.gif" width="250"/> |

|[나의 프로필](#나의프로필)|[상대 프로필](#상대프로필)|
| :------------------------------------------------------------------: | :------------------------------------------------------------------: |
| <img src="https://user-images.githubusercontent.com/112356419/210529693-15702c6d-5029-4c35-a743-d5078f9d66f5.gif" width="250"/> | <img src="https://user-images.githubusercontent.com/112356419/210532480-52d6b712-c430-4ef6-b033-a6a34bcea7cc.gif" width="250"/> |

|[판매 상품 등록](#판매상품등록)|[사용자 프로필 수정](#사용자프로필수정)|
| :------------------------------------------------------------------: | :------------------------------------------------------------------: |
| <img src="" width="250"/> | <img src="" width="250"/> |

|[좋아요](#좋아요)|[팔로우/언팔로우](#팔로우_언팔로우)|
| :------------------------------------------------------------------: | :------------------------------------------------------------------: |
| <img src="" width="250"/> | <img src="https://user-images.githubusercontent.com/112356419/210532203-fa78fd24-5033-4deb-9b68-9a07085b536a.gif" width="250"/> |

|[채팅방](#채팅)|[로그아웃](#로그아웃)|
| :------------------------------------------------------------------: | :------------------------------------------------------------------: |
| <img src="https://user-images.githubusercontent.com/112356419/210474176-5c421850-b64a-47d8-a6e6-e51a8f6568eb.gif" width="250"/> | <img src="" width="250"/> |

## 📗 프로젝트 구조
```
📦src
 ┣ 📂assets
 ┣ 📂commons
 ┃ ┗ 📂style
 ┃ ┃ ┣ 📂themes
 ┃ ┃ ┃ ┗ 📜default.js
 ┃ ┃ ┗ 📜GlobalStyle.jsx
 ┣ 📂components
 ┃ ┣ 📂atoms
 ┃ ┃ ┣ 📂Alert
 ┃ ┃ ┃ ┗ 📜Alert.js
 ┃ ┃ ┣ 📂BackBtn
 ┃ ┃ ┃ ┗ 📜BackBtn.jsx
 ┃ ┃ ┣ 📂BottomNavBarItem
 ┃ ┃ ┃ ┗ 📜BottomNavBarItem.jsx
 ┃ ┃ ┣ 📂BottomNavBarWrap
 ┃ ┃ ┃ ┗ 📜BottomNavBarWrap.jsx
 ┃ ┃ ┣ 📂Button
 ┃ ┃ ┃ ┗ 📜Button.js
 ┃ ┃ ┣ 📂Chat
 ┃ ┃ ┃ ┗ 📜ChatIcon.jsx
 ┃ ┃ ┣ 📂FeedList
 ┃ ┃ ┃ ┗ 📜FeedList.jsx
 ┃ ┃ ┣ 📂FeedPhoto
 ┃ ┃ ┃ ┗ 📜FeedPhoto.jsx
 ┃ ┃ ┣ 📂Home
 ┃ ┃ ┃ ┗ 📜HomeIcon.jsx
 ┃ ┃ ┣ 📂Input
 ┃ ┃ ┃ ┣ 📜Input.jsx
 ┃ ┃ ┃ ┗ 📜style.jsx
 ┃ ┃ ┣ 📂Label
 ┃ ┃ ┃ ┣ 📜Label.jsx
 ┃ ┃ ┃ ┗ 📜style.jsx
 ┃ ┃ ┣ 📂OptionBtn
 ┃ ┃ ┃ ┗ 📜OptionBtn.jsx
 ┃ ┃ ┣ 📂PostModal
 ┃ ┃ ┃ ┗ 📜PostModal.jsx
 ┃ ┃ ┣ 📂Profile
 ┃ ┃ ┃ ┗ 📜Profile.jsx
 ┃ ┃ ┣ 📂TopNavBarWrap
 ┃ ┃ ┃ ┗ 📜TopNavBarWrap.jsx
 ┃ ┃ ┣ 📂Upload
 ┃ ┃ ┃ ┗ 📜UploadIcon.jsx
 ┃ ┃ ┣ 📂UserList
 ┃ ┃ ┃ ┗ 📜UserList.jsx
 ┃ ┃ ┗ 📂UserListItem
 ┃ ┃ ┃ ┗ 📜UserListItem.jsx
 ┃ ┣ 📂molecules
 ┃ ┃ ┣ 📂BottomNavBarBasic
 ┃ ┃ ┃ ┗ 📜BottomNavBarBasic.jsx
 ┃ ┃ ┣ 📂ButtonGroupMy
 ┃ ┃ ┃ ┗ 📜ButtonGroupMy.jsx
 ┃ ┃ ┣ 📂ButtonGroupYour
 ┃ ┃ ┃ ┗ 📜ButtonGroupYour.jsx
 ┃ ┃ ┣ 📂Comment
 ┃ ┃ ┃ ┣ 📜CommentBar.js
 ┃ ┃ ┃ ┗ 📜CommentList.js
 ┃ ┃ ┣ 📂Empty
 ┃ ┃ ┃ ┗ 📜Empty.jsx
 ┃ ┃ ┣ 📂FollowCount
 ┃ ┃ ┃ ┗ 📜FollowCount.jsx
 ┃ ┃ ┣ 📂LabeledInput
 ┃ ┃ ┃ ┣ 📜LabeledInput.js
 ┃ ┃ ┃ ┗ 📜style.jsx
 ┃ ┃ ┣ 📂PostImg
 ┃ ┃ ┃ ┗ 📜PostImg.jsx
 ┃ ┃ ┣ 📂Posts
 ┃ ┃ ┃ ┗ 📜Posts.js
 ┃ ┃ ┣ 📂ProductItem
 ┃ ┃ ┃ ┗ 📜ProductItem.js
 ┃ ┃ ┣ 📂ProfileDsc
 ┃ ┃ ┃ ┗ 📜ProfileDsc.jsx
 ┃ ┃ ┣ 📂ProfileImg
 ┃ ┃ ┃ ┗ 📜ProfileImg.jsx
 ┃ ┃ ┣ 📂SearchUserList
 ┃ ┃ ┃ ┣ 📜SearchUserList.jsx
 ┃ ┃ ┃ ┗ 📜SearchUserListStyle.jsx
 ┃ ┃ ┣ 📂SearchUserListItem
 ┃ ┃ ┃ ┗ 📜SearchUserListItem.jsx
 ┃ ┃ ┣ 📂TopNavBarBasic
 ┃ ┃ ┃ ┗ 📜TopNavBarBasic.jsx
 ┃ ┃ ┣ 📂TopNavBarFeedSearch
 ┃ ┃ ┃ ┗ 📜TopNavBarFeedSearch.jsx
 ┃ ┃ ┣ 📂TopNavBarFeedTitle
 ┃ ┃ ┃ ┗ 📜TopNavBarFeedTitle.jsx
 ┃ ┃ ┣ 📂TopNavBarFollow
 ┃ ┃ ┃ ┗ 📜TopNavBarFollow.jsx
 ┃ ┃ ┣ 📂TopNavBarSave
 ┃ ┃ ┃ ┗ 📜TopNavBarSave.jsx
 ┃ ┃ ┣ 📂TopNavBarUserSearch
 ┃ ┃ ┃ ┣ 📜TopNavBarUserSearch.jsx
 ┃ ┃ ┃ ┗ 📜TopNavBarUserSearchStyle.jsx
 ┃ ┃ ┣ 📂TopNavBarView
 ┃ ┃ ┃ ┗ 📜TopNavBarView.jsx
 ┃ ┃ ┗ 📜.DS_Store
 ┃ ┣ 📂organisms
 ┃ ┃ ┣ 📂InitHomeFeed
 ┃ ┃ ┃ ┗ 📜InitHomeFeed.js
 ┃ ┃ ┣ 📂PostList
 ┃ ┃ ┃ ┗ 📜PostList.jsx
 ┃ ┃ ┣ 📂Profile
 ┃ ┃ ┃ ┣ 📂MyProfile
 ┃ ┃ ┃ ┃ ┗ 📜ProfileMyOrg.jsx
 ┃ ┃ ┃ ┗ 📂YourProfile
 ┃ ┃ ┃ ┃ ┗ 📜ProfileYourOrg.jsx
 ┃ ┃ ┣ 📂Sale
 ┃ ┃ ┃ ┗ 📜OnSale.jsx
 ┃ ┃ ┗ 📂SearchUser
 ┃ ┃ ┃ ┗ 📜SearchUser.jsx
 ┃ ┗ 📜.DS_Store
 ┣ 📂config
 ┃ ┗ 📜config.js
 ┣ 📂hooks
 ┃ ┣ 📜use-Input.js
 ┃ ┗ 📜use-api.js
 ┣ 📂pages
 ┃ ┣ 📂AddProduct
 ┃ ┃ ┗ 📜AddProduct.jsx
 ┃ ┣ 📂Chat
 ┃ ┃ ┣ 📜Chat.js
 ┃ ┃ ┣ 📜ChatList.jsx
 ┃ ┃ ┗ 📜ChatRoom.jsx
 ┃ ┣ 📂DetailPosts
 ┃ ┃ ┗ 📜DetailPosts.js
 ┃ ┣ 📂EmailLogin
 ┃ ┃ ┣ 📜EmailLogin.jsx
 ┃ ┃ ┗ 📜styled.jsx
 ┃ ┣ 📂Followers
 ┃ ┃ ┗ 📜Followers.jsx
 ┃ ┣ 📂Followings
 ┃ ┃ ┗ 📜Followings.jsx
 ┃ ┣ 📂Home
 ┃ ┃ ┗ 📜Home.js
 ┃ ┣ 📂Join
 ┃ ┃ ┣ 📜ButtonStyle.jsx
 ┃ ┃ ┣ 📜FormStyle.jsx
 ┃ ┃ ┣ 📜InputStyle.jsx
 ┃ ┃ ┣ 📜JoinMembership.jsx
 ┃ ┃ ┣ 📜ProfileSetting.jsx
 ┃ ┃ ┗ 📜TitleTextStyle.jsx
 ┃ ┣ 📂Login
 ┃ ┃ ┗ 📜Login.js
 ┃ ┣ 📂ModifyProfile
 ┃ ┃ ┗ 📜ModifyProfile.jsx
 ┃ ┣ 📂NotFound
 ┃ ┃ ┗ 📜NotFound.js
 ┃ ┣ 📂Profile
 ┃ ┃ ┣ 📂MyProfile
 ┃ ┃ ┃ ┗ 📜MyProfile.jsx
 ┃ ┃ ┗ 📂YourProfile
 ┃ ┃ ┃ ┗ 📜YourProfile.jsx
 ┃ ┣ 📂Search
 ┃ ┃ ┗ 📜Search.jsx
 ┃ ┣ 📂Splash
 ┃ ┃ ┗ 📜Splash.js
 ┃ ┣ 📂Upload
 ┃ ┃ ┗ 📜Upload.js
 ┃ ┣ 📜.DS_Store
 ┃ ┗ 📜Pages.js
 ┣ 📂store
 ┃ ┗ 📜auth-context.js
 ┣ 📜.DS_Store
 ┣ 📜App.js
 ┗ 📜index.js
```
## 📝 깃 커밋 / 코드 컨벤션

### 커밋 컨벤션
-   **Feat**: 새로운 기능을 추가할 경우
-   **Add** : 코드 추가 (어떠한 기능 내에 기능을 더 추가할 때)
-   **Modify** : 코드 수정 (버그 수정, 코드 지우고, 추가하고, 수정하는 모든 과정들)
-   **Docs**: 문서를 수정한 경우
-   **Rename**: 파일 혹은 폴더명을 수정하거나 옮기는 작업만 하는 경우
-   **Remove**: 파일을 삭제하는 작업만 수행하는 경우
-   **Design**: CSS 등 사용자 UI 디자인을 변경할 경우
-   **!HOTFIX**: 급하게 치명적인 버그를 고친 경우
-   **Style**: 코드 포맷 변경, 세미 콜론 누락, 코드 수정이 없는 경우
-   **Refactor**: 코드 리팩토링
-   **Comment**: 필요한 주석 추가 및 변경

### 코드 컨벤션
-   Camel case로 작성한다.
-   rfc 자동완성을 이용하여 작성한다.





