import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/atoms/Button/Button';
import { ErrorMessage, StyledInput, StyledLabel } from './InputStyle';
import { StyledForm } from './FormStyle';
import { TitleText } from './TitleTextStyle';

export default function JoinMembership() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [isDisabled, setIsDisabled] = useState(true); // 버튼 비활성화
    const [isWrong, setIsWrong] = useState(false);
    const [msgEmail, setMsgEmail] = useState(''); // 이메일 유효성 검사 메세지
    const [msgPassword, setMsgPassword] = useState(''); // 비밀번호 유효성 검사 메세지
    const [isEmail, setIsEmail] = useState(true);
    const [isPassword, setIsPassword] = useState(true);

    const URL = 'https://mandarin.api.weniv.co.kr';

    // 유저의 로그인 & 비밀번호 데이터
    const loginData = {
        user: {
            email,
            password,
        },
    };

    const navigate = useNavigate();

    // 이메일 유효성 검사
    function emailValidation(target) {
        const emailRegex =
            /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;

        const emailCurrent = target;

        if (emailCurrent === '') {
            setMsgEmail('필수 입력사항을 입력해주세요.');
            setIsEmail(false);
        } else if (!emailRegex.test(emailCurrent)) {
            setMsgEmail('잘못된 이메일 형식입니다.');
            setIsEmail(false);
        } else {
            setMsgEmail('');
            setIsEmail(true);
        }
    }

    // 비밀번호 유효성 검사
    function pwValidation(target) {
        const pwCurrent = target;

        if (pwCurrent === '') {
            setMsgPassword('필수 입력사항을 입력해주세요.');
            setIsPassword(false);
        } else if (pwCurrent.length < 6) {
            setMsgPassword('비밀번호는 6자 이상이어야 합니다.');
            setIsPassword(false);
        } else {
            setMsgPassword('');
            setIsPassword(true);
        }
    }

    // API 통신
    const handleJoinSubmit = async e => {
        e.preventDefault();
        try {
            const response = await axios
                .post(`${URL}/user/emailvalid`, loginData, {
                    headers: {
                        'Content-type': 'application/json',
                    },
                })
                .then(res => {
                    console.log(res.data);
                });
        } catch (error) {
            console.error(error);
        }
    };

    // email, password 둘다 비어있지 않을 때, 버튼 활성화 하기
    function checkBtn() {
        if (email !== '' && password !== '') {
            setIsDisabled(false);
        } else {
            setIsDisabled(true);
        }
    }

    // id input
    const handleIdInput = e => {
        setEmail(e.target.value);
        checkBtn();
        emailValidation(e.target.value);
    };

    // pw input
    const handlePasswordInput = e => {
        setPassword(e.target.value);
        checkBtn();
        pwValidation(e.target.value);
    };

    return (
        <StyledForm onSubmit={handleJoinSubmit}>
            <TitleText style={{ marginBottom: '40px' }}>이메일로 회원가입</TitleText>
            <StyledLabel htmlFor="userMail">이메일</StyledLabel>
            <StyledInput
                type="text"
                id="userMail"
                placeholder="이메일 주소를 입력해 주세요"
                required
                onChange={handleIdInput}
                className={`${!isEmail || isWrong ? 'error' : ''}`}
                value={email}
            />
            <ErrorMessage>* 이미 가입된 주소입니다.</ErrorMessage>
            <StyledLabel htmlFor="userPassword">비밀번호</StyledLabel>
            <StyledInput
                type="text"
                id="userPassword"
                placeholder="비밀번호를 설정해 주세요"
                required
                onChange={handlePasswordInput}
                className={`${!isPassword || isWrong ? 'error' : ''}`}
                value={password}
            />
            <ErrorMessage>* 비밀번호는 6자 이상이어야 합니다.</ErrorMessage>
            <Button
                size="large"
                disabled={isDisabled ? 'disabled' : ''}
                className={`${isDisabled ? 'disabled' : ''}`}
                type="submit"
            >
                다음
            </Button>
        </StyledForm>
    );
}
