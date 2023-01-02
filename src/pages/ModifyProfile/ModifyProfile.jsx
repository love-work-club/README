import React, { useState, useEffect, useContext, useNavigate, useRef } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import AuthContext from '../../store/auth-context';
import { StyledForm } from '../Join/FormStyle';
import { StyledLabel, StyledInput, ErrorMessage } from '../Join/InputStyle';
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
    // const navigate = useNavigate();

    const authCtx = useContext(AuthContext);
    const [data, setData] = useState('');
    const [usernameText, setUsernameText] = useState('');
    const [userId, setUserId] = useState('');
    const [userIntro, setUserIntro] = useState('');

    useEffect(() => {
        const getData = () => {
            axios
                .get(`https://mandarin.api.weniv.co.kr/user/myinfo`, {
                    headers: {
                        Authorization: `Bearer ${authCtx.token}`,
                    },
                })
                .then(res => {
                    console.log(res);
                    setData(res.data);
                })
                .catch(err => console.log(err));
        };

        getData();
    }, []);
    useEffect(() => {
        if (data.user) {
            setUsernameText(data.user.username);
            setUserId(data.user.accountname);
            setUserIntro(data.user.intro);
        }
    }, [data]);
    // console.log(data.user.username);

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

    return (
        <LoginWrapper className="login-wrap">
            <TopNavBarSave />
            <form style={{ margin: '46px auto 0' }}>
                <ImageForm>
                    <ProfileImage src={DefaultProfileUserImg} alt="사용자 프로필 사진" />
                    <ProfileImageInputBtn className="file-select">
                        <ProfileImageUploadInputBtn src={ImageUploadBtn} alt="프로필 업로드 하기" />
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
                    />
                </InputForm>

                {/* <ErrorMessage>* 이미 사용중인 이름입니다.</ErrorMessage> */}

                <InputForm htmlFor="userName">
                    <Label>계정ID</Label>
                    <Input
                        type="text"
                        id="userID"
                        placeholder="영문, 숫자, 특수문자(.), (_)만 사용 가능합니다."
                        required
                        defaultValue={userId}
                    />
                </InputForm>
                {/* <ErrorMessage>* 이미 사용중인 이름입니다.</ErrorMessage> */}
                {/* <ErrorMessage>* 영문, 숫자, 밑줄 및 마침표만 사용할 수 있습니다.</ErrorMessage> */}

                <InputForm>
                    <Label htmlFor="userIntroduce">소개</Label>
                    <Input
                        type="text"
                        id="userIntroduce"
                        placeholder="자신과 판매할 상품에 대해 소개해 주세요!"
                        defaultValue={userIntro}
                    />
                </InputForm>
            </form>
        </LoginWrapper>
    );
}

export default ModifyProfile;
