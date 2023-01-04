import React, { useState, useEffect, useContext, useRef } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import AuthContext from '../../store/auth-context';
// import { StyledForm } from '../Join/FormStyle';
// import { StyledLabel, StyledInput } from '../Join/InputStyle';
import DefaultProfileUserImg from '../../assets/images/default_profile_user.svg';
import TopNavBarSave from '../../components/molecules/TopNavBarSave/TopNavBarSave';
import ImageUploadBtn from '../../assets/icons/profile-photo.svg';
import { LoginWrapper, InputForm, Label, Input, ErrorP, ImageForm, ProfileImage } from '../EmailLogin/styled';

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

function ModifyProfile() {
    const [username, setUsername] = useState('');
    const [accountName, setAccountname] = useState('');
    const [introForm, setIntroForm] = useState('');

    const [isDisabled, setIsDisabled] = useState(true); // 버튼 비활성화

    const [msg, setMsg] = useState(''); // 에러메세지

    // const [msgUsername, setMsgUsername] = useState('');
    // const [isUsername, setIsUsername] = useState(true);

    // username, accountname 둘 중 하나라도 비어있으면 버튼 비활성화 관리
    useEffect(() => {
        if (username && accountName) {
            setIsDisabled(false);
        } else {
            setIsDisabled(true);
        }
    }, [username, accountName]);

    const imgInput = useRef();
    const [imageSrc, setImageSrc] = useState('');
    const [imgName, setImgName] = useState('');

    const accountData = {
        user: {
            accountname: accountName,
            username,
            intro: introForm,
            image: imageSrc,
        },
    };

    const [msgAccountname, setMsgAccountname] = useState('');
    const [isAccountname, setIsAccountname] = useState(true);

    const authCtx = useContext(AuthContext);

    const [data, setData] = useState('');
    const [usernameText, setUsernameText] = useState('');
    const [userId, setUserId] = useState('');
    const [userIntro, setUserIntro] = useState('');
    const [userImg, setUserImg] = useState('');

    // 현재 유저의 데이터 불러오기(인풋창에 표시해주기위함)
    useEffect(() => {
        const getData = () => {
            axios
                .get('https://mandarin.api.weniv.co.kr/user/myinfo', {
                    headers: {
                        Authorization: `Bearer ${authCtx.token}`,
                        'Content-type': 'application/json',
                    },
                })
                .then(res => {
                    // console.log(res);
                    setData(res.data);
                })
                .catch(err => console.log(err));
        };

        getData();
    }, []);

    useEffect(() => {
        if (data.user) {
            setUsername(data.user.username);
            setAccountname(data.user.accountname);
            setIntroForm(data.user.intro);
            setImageSrc(data.user.image);
        }
    }, [data]);

    // API - 유저 프로필 수정 사항 갱신하기
    const handleJoinSubmit = async e => {
        e.preventDefault();
        try {
            const response = await axios.put(
                'https://mandarin.api.weniv.co.kr/user',
                {
                    user: {
                        accountname: accountName,
                        username,
                        intro: introForm,
                        image: imageSrc,
                    },
                },
                {
                    headers: {
                        Authorization: `Bearer ${authCtx.token}`,
                        'Content-type': 'application/json',
                    },
                }
            );

            const result = await response.data;

            console.log(result);

            if (result.message === '이미 사용중인 계정 ID입니다.') {
                setMsgAccountname(result.message);
                setAccountname(result.message);
                setMsg('* 이미 사용중인 계정 ID입니다.');
                console.log(result.message);
                // setIsAccountname(false);
                // setIsDisabled(true);
            }
        } catch (error) {
            console.error(error);
        }
    };

    // 이미지파일 인코딩
    const encodeFileToBase64 = fileBlob => {
        const reader = new FileReader();

        reader.readAsDataURL(fileBlob);

        return new Promise(res => {
            reader.onload = async () => {
                const formdata = new FormData();

                formdata.append('image', fileBlob);

                // 이미지 업데이트
                const imgres = await axios.post(`https://mandarin.api.weniv.co.kr/image/uploadfile`, {
                    body: formdata,
                });

                const imgdata = await imgres.data;

                setImgName(URL + imgdata.filename);
                setImageSrc(reader.result);
                res();
            };
        });
    };

    // 이미지업로드 버튼을 클릭했을 때 input이 실행

    const onClickImageUpload = () => {
        imgInput.current.click();
        // console.log('확인');
    };

    // ProfileImageInputBtn
    // ProfileImageUploadInputBtn
    return (
        <LoginWrapper className="login-wrap">
            <TopNavBarSave handleJoinSubmit={handleJoinSubmit} />
            <form style={{ margin: '46px auto 0' }} onSubmit={handleJoinSubmit}>
                <ImageForm>
                    <ProfileImage src={imageSrc || userImg} id="imagePre" onClick={onClickImageUpload} />
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

                <InputForm>
                    <Label htmlFor="userNickName">사용자 이름</Label>
                    <Input
                        type="text"
                        id="userNickName"
                        placeholder="2~10자 이내여야 합니다."
                        required
                        defaultValue={usernameText}
                        value={username}
                        onChange={e => {
                            setUsername(e.target.value);
                        }}
                    />
                </InputForm>

                <InputForm htmlFor="userName">
                    <Label>계정ID</Label>
                    <Input
                        type="text"
                        id="userID"
                        placeholder="영문, 숫자, 특수문자(.), (_)만 사용 가능합니다."
                        required
                        defaultValue={userId}
                        value={accountName}
                        onChange={e => {
                            setAccountname(e.target.value);
                        }}
                    />
                    {{ msg } && <ErrorP>{msg}</ErrorP>}
                </InputForm>

                <InputForm>
                    <Label htmlFor="userIntroduce">소개</Label>
                    <Input
                        type="text"
                        id="userIntroduce"
                        placeholder="자신과 판매할 상품에 대해 소개해 주세요!"
                        defaultValue={userIntro}
                        value={introForm}
                        onChange={e => {
                            setIntroForm(e.target.value);
                        }}
                    />
                </InputForm>
            </form>
        </LoginWrapper>
    );
}

export default ModifyProfile;
