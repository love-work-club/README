import React from 'react';
import Button from '../../components/atoms/Button/Button';
import { ErrorMessage, StyledInput, StyledLabel } from './InputStyle';
import { StyledForm } from './FormStyle';
import { TitleText } from './TitleTextStyle';

export default function JoinMembership() {
    return (
        <StyledForm>
            <TitleText style={{ marginBottom: '40px' }}>이메일로 회원가입</TitleText>
            <StyledLabel htmlFor="userMail">이메일</StyledLabel>
            <StyledInput type="text" id="userMail" placeholder="이메일 주소를 입력해 주세요" required />
            <ErrorMessage>* 이미 가입된 주소입니다.</ErrorMessage>
            <StyledLabel htmlFor="userPassword">비밀번호</StyledLabel>
            <StyledInput type="text" id="userPassword" placeholder="비밀번호를 설정해 주세요" required />
            <ErrorMessage>* 비밀번호는 숫자, 영문자, 특수문자를 조합해서 8자 이상이어야 합니다.</ErrorMessage>
            <Button size="large" type="submit">
                다음
            </Button>
        </StyledForm>
    );
}
