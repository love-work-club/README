import React from 'react';
import styled from 'styled-components';
import { ErrorMessage, StyledInput, StyledLabel } from './InputStyle';
import { TitleText, SubTitleText } from './TitleTextStyle';
import { ImgUploadBtn } from './ButtonStyle';
import Button from '../../components/atoms/Button/Button';
import { StyledForm } from './FormStyle';
import profileImg from '../../assets/profileImg.png';

const ProfileSettingForm = styled(StyledForm)`
    .img-modi {
        position: relative;
        display: flex;
        justify-content: flex-end;
        align-items: end;
    }

    .file-select {
        position: absolute;
    }
`;

export default function ProfileSetting() {
    return (
        <ProfileSettingForm>
            <TitleText>프로필 설정</TitleText>
            <SubTitleText>나중에 언제든지 변경할 수 있습니다.</SubTitleText>
            <div className="img-modi">
                <img className="profile-img" src={profileImg} alt="프로필 화면" />
                <ImgUploadBtn className="file-select"></ImgUploadBtn>
            </div>
            <StyledLabel htmlFor="userName">사용자 이름</StyledLabel>
            <StyledInput type="text" id="userName" required />
            <StyledLabel htmlFor="userEmail">계정 ID</StyledLabel>
            <StyledInput type="text" id="userEmail" required />
            <ErrorMessage>* 영문,숫자,밑줄 및 마침표만 사용할 수 있습니다.</ErrorMessage>
            <ErrorMessage>* 이미 사용 중인 ID입니다.</ErrorMessage>
            <StyledLabel htmlFor="intro">소개</StyledLabel>
            <StyledInput type="text" id="intro" />
            <Button size="large" type="submit">
                READ ME 시작하기
            </Button>
        </ProfileSettingForm>
    );
}
