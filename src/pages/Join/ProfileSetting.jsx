import React, { useState, useRef, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import {
    LoginWrapper,
    TitleText,
    SubTitleText,
    InputForm,
    Label,
    Input,
    ErrorP,
    ImageForm,
    ProfileImage,
} from '../EmailLogin/styled';
import Button from '../../components/atoms/Button/Button';
import ImageUploadBtn from '../../assets/icons/profile-photo.svg';
// import DefaultProfileUserImg from '../../assets/images/default_profile_user.svg';

// 사진 업로드 버튼
const ProfileImageInputBtn = styled.button`
    position: absolute;
    right: 0;
    bottom: 0;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    cursor: pointer;
    background-image: url(${ImageUploadBtn});
`;

// 사진 업로드 버튼 - 인풋(글자 안보이게 처리)
const ProfileImageUploadInputBtn = styled.input`
    visibility: hidden;
`;

// Todo: 전체적으로 코드 정리 및 수정하기
// Todo: 이미지 업로드 시, undefined로 요청되는 부분 수정하기

export default function ProfileSetting() {
    const [username, setUsername] = useState('');
    const [accountName, setAccountname] = useState('');
    const [introForm, setIntroForm] = useState('');

    const [isDisabled, setIsDisabled] = useState(true); // 버튼 비활성화

    // const [msgUsername, setMsgUsername] = useState('');
    const [isUsername, setIsUsername] = useState(true);

    // username, accountname 둘 중 하나라도 비어있으면 버튼 비활성화 관리
    useEffect(() => {
        if (username && accountName) {
            setIsDisabled(false);
        } else {
            setIsDisabled(true);
        }
    }, [username, accountName]);

    const location = useLocation();

    console.log(location);

    const URL = 'https://mandarin.api.weniv.co.kr/';

    const imgInput = useRef();
    const [imageSrc, setImageSrc] = useState('');
    const [imgName, setImgName] = useState('');

    // const email = location.state.email;
    // const password = location.state.password;

    // const joinData = {
    //     user: {
    //         username,
    //         email1,
    //         password,
    //         accountname,

    //     },
    // };

    const [id, setId] = useState();
    const [pw, setPw] = useState();

    useEffect(() => {
        setId(location.state.email);
        setPw(location.state.password);
    }, []);

    console.log(id, pw);

    const accountData = {
        user: {
            accountname: accountName,
            username,
            intro: introForm,
            image: imageSrc,
            email: id,
            password: pw,
        },
    };

    const [msgAccountname, setMsgAccountname] = useState('');
    const [isAccountname, setIsAccountname] = useState(true);
    const navigate = useNavigate();

    // API 통신 - 리드미 시작하기 버튼
    const handleJoinSubmit = async e => {
        e.preventDefault();
        try {
            const response = await axios.post(
                `${URL}user/accountnamevalid`,
                {
                    user: {
                        accountname: accountName,
                    },
                },
                {
                    headers: {
                        'Content-type': 'application/json',
                    },
                }
            );
            const result = response.data;

            console.log(result);

            if (result.message === '이미 가입된 계정ID 입니다.') {
                setMsgAccountname(result.message);
                setIsAccountname(false);
                setIsDisabled(true);
            } else if (result.message === '사용 가능한 계정ID 입니다.') {
                setIsAccountname(true);
            } else {
                setMsgAccountname(result.message);
                setIsAccountname(false);
            }

            console.log(accountData);

            const res = await axios.post(`${URL}user`, accountData, {
                headers: {
                    'Content-type': 'application/json',
                },
            });
            const userResult = await res.data;

            console.log(userResult);

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
                const imgres = await axios.post(`${URL}image/uploadfile`, {
                    body: formdata,
                });

                const imgdata = await imgres.data;

                setImgName(URL + imgdata.filename);
                setImageSrc(reader.result);
                resolve();
            };
        });
    };

    console.log(imageSrc);
    console.log(imgName);
    const handleUserNameInput = e => {
        setUsername(e.target.value);
    };

    const handleAccountNameInput = e => {
        setAccountname(e.target.value);
    };

    const handleIntroInput = e => {
        setIntroForm(e.target.value);
    };

    // 이미지업로드 버튼을 클릭했을 때 input이 실행
    const onClickImageUpload = () => {
        imgInput.current.click();
    };

    // console.log(imgName, imageSrc);

    return (
        <LoginWrapper className="login-wrap">
            <TitleText className="profileTitle">프로필 설정</TitleText>
            <SubTitleText className="subTitle">나중에 언제든지 변경할 수 있습니다.</SubTitleText>
            <form onSubmit={handleJoinSubmit}>
                <ImageForm>
                    <ProfileImage src={imageSrc || null} id="imagePre" onClick={onClickImageUpload} />
                    <ProfileImageInputBtn type="button" onClick={onClickImageUpload}>
                        <ProfileImageUploadInputBtn
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
                </ImageForm>

                <InputForm htmlFor="userName">
                    <Label>사용자 이름</Label>
                    <Input
                        type="text"
                        id="userName"
                        onChange={handleUserNameInput}
                        className={`${!isUsername ? 'error' : ''}`}
                        placeholder="2~10자 이내여야 합니다."
                        required
                    />
                </InputForm>

                <InputForm htmlFor="userEmail">
                    <Label>계정 ID</Label>
                    <Input
                        type="text"
                        id="userEmail"
                        onChange={handleAccountNameInput}
                        className={`${!isAccountname ? 'error' : ''}`}
                        placeholder="영문, 숫자, 특수문자(.), (_)만 사용 가능합니다."
                        required
                    />
                    {/* <ErrorP>* 영문,숫자,밑줄 및 마침표만 사용할 수 있습니다.</ErrorP> */}
                    {/* <ErrorP>* 이미 사용 중인 ID입니다.</ErrorP> */}
                </InputForm>

                <InputForm style={{ marginBottom: '30px' }}>
                    <Label htmlFor="intro">소개</Label>
                    <Input
                        type="text"
                        id="intro"
                        onChange={handleIntroInput}
                        placeholder="자신과 판매할 상품에 대해 소개해 주세요!"
                    />
                </InputForm>

                <Button size="large" type="submit" className={`${isDisabled ? 'disabled' : ''}`}>
                    READ ME 시작하기
                </Button>
            </form>
        </LoginWrapper>
    );
}
