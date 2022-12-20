import React from 'react';
import styled from 'styled-components';
import { StyledForm } from '../Join/FormStyle';
import { StyledLabel, StyledInput, ErrorMessage } from '../Join/InputStyle';
import DefaultProfileUserImg from '../../assets/images/default_profile_user.svg';
import UploadProfilePhoto from '../../assets/icons/profile-photo.svg';
import TopNavBarSave from '../../components/molecules/TopNavBarSave/TopNavBarSave';

const ProfileSettingForm = styled(StyledForm)`
    .img-modi {
        position: relative;
        display: flex;
        justify-content: flex-end;
        align-items: end;
        margin: 34px 0;
    }

    .file-select {
        position: absolute;
        background-color: transparent;
    }
`;

function MyProfile() {
    return (
        <>
            <TopNavBarSave />
            <ProfileSettingForm style={{ margin: '0 auto', backgroundColor: '#fff' }}>
                <div className="img-modi">
                    <img className="profile-img" src={DefaultProfileUserImg} alt="사용자 프로필 사진" />

                    <button className="file-select">
                        <img src={UploadProfilePhoto} alt="프로필 업로드 하기" />
                    </button>
                </div>

                <StyledLabel htmlFor="userNickName">사용자 이름</StyledLabel>
                <StyledInput
                    // styled={{ marginBottom: '18px', padding: '8px 0' }}
                    type="text"
                    id="userNickName"
                    placeholder="2~10자 이내여야 합니다."
                    required
                />
                <ErrorMessage>* 이미 사용중인 이름입니다.</ErrorMessage>
                <StyledLabel htmlFor="userID">계정ID</StyledLabel>
                <StyledInput
                    type="text"
                    id="userID"
                    placeholder="영문, 숫자, 특수문자(.), (_)만 사용 가능합니다."
                    required
                />
                <ErrorMessage>* 이미 사용중인 이름입니다.</ErrorMessage>
                <ErrorMessage>* 영문, 숫자, 밑줄 및 마침표만 사용할 수 있습니다.</ErrorMessage>

                <StyledLabel htmlFor="userIntroduce">소개</StyledLabel>
                <StyledInput
                    type="text"
                    id="userIntroduce"
                    placeholder="자신과 판매할 상품에 대해 소개해 주세요!"
                    required
                />
            </ProfileSettingForm>
        </>
    );
}

export default MyProfile;
