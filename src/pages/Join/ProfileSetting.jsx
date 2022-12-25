import React, { useState, useRef, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { ErrorMessage, StyledInput, StyledLabel } from './InputStyle';
import { TitleText, SubTitleText } from './TitleTextStyle';
import { StyledForm } from './FormStyle';
import Button from '../../components/atoms/Button/Button';
import defaultProfileUser from '../../assets/images/default_profile_user.svg';
import ImageUploadBtn from '../../assets/icons/profile-photo.svg';

const ProfileSettingForm = styled(StyledForm)``;

const ProfileImageContainer = styled.div`
    width: 110px;
    height: 110px;
    position: relative;
`;

const ProfileImage = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 50%;
`;

const ProfileImageInputBtn = styled.button``;

const ProfileImageInput = styled.input`
    position: absolute;
    width: 36px;
    height: 36px;
    right: 0;
    bottom: 0;
    background-image: url('../../assets/icons/profile-photo.svg');
`;

export default function ProfileSetting() {
    const [userName, setUserName] = useState('');
    const [accountName, setAccountName] = useState('');
    const [intro, setIntro] = useState('');

    const [isDisabled, setIsDisabled] = useState(true); // 버튼 비활성화

    // const [msgUserName, setMsgUserName] = useState('');
    // const [isUserName, setIsUserName] = useState(true);
    // const email = location.state.email;
    // const password = location.state.password;

    // userName, accountName 둘 중 하나라도 비어있으면 버튼 비활성화 관리
    useEffect(() => {
        if (userName && accountName) {
            setIsDisabled(false);
        } else {
            setIsDisabled(true);
        }
    }, [userName, accountName]);

    const location = useLocation();

    const id = location.state.id;
    const pw = location.state.pw;

    const URL = 'https://mandarin.api.weniv.co.kr/';

    const imgInput = useRef();
    const [imageSrc, setImageSrc] = useState('');
    const [imgName, setImgName] = useState('');

    const joinData = {
        user: {
            userName,
            email: id,
            password: pw,
            accountName,
            intro,
            image: imgName,
        },
    };

    const [msgAccountName, setMsgAccountName] = useState('');
    const [isAccountName, setIsAccountName] = useState(true);
    const navigate = useNavigate();

    // API 통신 - 리드미 시작하기 버튼
    const handleJoinSubmit = async e => {
        e.preventDefault();
        try {
            const response = await fetch(`${URL}user/accountnamevalid`, {
                method: 'POST',
                body: JSON.stringify(joinData),
                headers: {
                    'Content-type': 'application/json',
                },
            });
            const result = await response.json();

            if (result.message === '이미 가입된 계정ID 입니다.') {
                setMsgAccountName(result.message);
                setIsAccountName(false);
                setIsDisabled(true);
            } else if (result.message === '사용 가능한 계정ID 입니다.') {
                setIsAccountName(true);
            } else {
                setMsgAccountName(result.message);
                setIsAccountName(false);
            }
            const res = await fetch(`${URL}user`, {
                method: 'POST',
                body: JSON.stringify(joinData),
                headers: {
                    'Content-type': 'application/json',
                },
            });
            const userResult = await res.json();

            if (userResult.message === '회원가입 성공') {
                navigate('/login');
            }
        } catch (error) {
            console.error(error);
        }
    };

    // 이미지파일 인코딩
    const encodeFileToBase64 = fileBlob => {
        const reader = new FileReader();

        reader.readAsDataURL(fileBlob);

        return new Promise(resolve => {
            reader.onload = async () => {
                const formdata = new FormData();

                formdata.append('image', fileBlob);

                // 이미지 API 통신
                const imgres = await fetch(`${URL}image/uploadfile`, {
                    method: 'POST',
                    body: formdata,
                });

                const imgdata = await imgres.json();

                setImgName(URL + imgdata.filename);
                setImageSrc(reader.result);
                resolve();
            };
        });
    };

    // const handleUsernameInput = e => {
    //     setUserName(e.target.value);
    //     userNameValidation(e.target.value);
    // };

    // const handleAccountnameInput = e => {
    //     setAccountName(e.target.value);
    //     accountNameValidation(e.target.value);
    // };

    const handleIntroInput = e => {
        setIntro(e.target.value);
    };

    // useRef로 input이랑 impgUploadBtn 연결
    const inputClick = () => {
        imgInput.current.click();
    };

    // 이미지업로드 버튼을 클릭했을 때 input이 실행
    const onClickImageUpload = () => {
        imgInput.current.click();
    };

    return (
        <ProfileSettingForm method="POST" onSubmit={handleJoinSubmit}>
            <TitleText>프로필 설정</TitleText>
            <SubTitleText>나중에 언제든지 변경할 수 있습니다.</SubTitleText>
            <ProfileImageContainer>
                <ProfileImage
                    src={imageSrc}
                    id="imagePre"
                    style={
                        imageSrc
                            ? { backgroundImage: `url(${imageSrc})` }
                            : { backgroundImage: `url(${defaultProfileUser})` }
                    }
                    onClick={onClickImageUpload}
                />
                <ProfileImageInputBtn>
                    <ProfileImageInput
                        type="file"
                        id="imgUpload"
                        accept="image/*"
                        onChange={e => {
                            encodeFileToBase64(e.target.files[0]);
                        }}
                        name="file"
                        ref={imgInput}
                    />
                </ProfileImageInputBtn>
            </ProfileImageContainer>
            <StyledLabel htmlFor="userName">사용자 이름</StyledLabel>
            <StyledInput
                type="text"
                id="userName"
                // onChange={handleUserNameInput}
                // className={`${!isUserName ? 'error' : ''}`}
                required
            />
            <StyledLabel htmlFor="userEmail">계정 ID</StyledLabel>
            <StyledInput
                type="text"
                id="userEmail"
                // onChange={handleAccountNameInput}
                // className={`${!isAccountName ? 'error' : ''}`}
                required
            />
            <ErrorMessage>* 영문,숫자,밑줄 및 마침표만 사용할 수 있습니다.</ErrorMessage>
            <ErrorMessage>* 이미 사용 중인 ID입니다.</ErrorMessage>
            <StyledLabel htmlFor="intro">소개</StyledLabel>
            <StyledInput type="text" id="intro" onChange={handleIntroInput} />
            <Button size="large" type="submit" className={`${isDisabled ? 'disabled' : ''}`}>
                READ ME 시작하기
            </Button>
        </ProfileSettingForm>
    );
}
