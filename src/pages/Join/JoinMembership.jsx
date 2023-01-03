import React, { useState, useRef } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/atoms/Button/Button';
import { LoginWrapper, TitleText, InputForm, Label, Input, ErrorP } from '../EmailLogin/styled';
import useInput from '../../hooks/use-Input.js';

// 이미 가입되어 있는 이메일인지 확인하기 -> 회원가입 api를 받아와야겠지?
export const JoinMembership = () => {
    const [msg, setMsg] = useState(''); // 에러메세지
    const [msgPw, setMsgPw] = useState('비밀번호는 6자 이상이어야 합니다.'); // 비밀번호 에러메세지
    const emailInputRef = useRef(); // 회원가입용 이메일
    const passwordInputRef = useRef(); // 회원가입용 비밀번호

    const navigate = useNavigate();

    const emailRegex =
        /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;

    const {
        value: enteredEmail, // 인풋에 입력한 email
        isValid: enteredEmailIsValid, // 이메일 유효성 검사
        changeHandler: emailChangeHandler, // 인풋 입력 가능하게 해줌
        blurHandler: emailBlurHandler, // 인풋창 색상변경?
        reset: resetEmailInput, // 잘못 입력했을 때 리셋해주나?
    } = useInput(value => emailRegex.test(value));

    const {
        value: enteredPassword,
        isValid: enteredPasswordIsValid,
        changeHandler: passwordChangeHandler,
        blurHandler: passwordBlurHandler,
        reset: resetPasswordInput,
    } = useInput(value => value.length >= 6);

    let formIsValid = false; // form 전송 비활성화

    if (enteredEmailIsValid && enteredPasswordIsValid) {
        formIsValid = true;
    }

    // API 통신
    const formSubmitHandler = async e => {
        e.preventDefault();

        // 이 부분은 이메일 또는 비밀번호 입력한 것이 밸리데이션을 통과했는가?
        if (!enteredEmailIsValid || !enteredPasswordIsValid) {
            // 둘 중에 false값이 나오면 false를 그대로 리턴
            return; // 결과 여부를 true or false로 보여주는 것인가?
        }

        // 이메일과 비밀번호의 현재 값을 각각 enteredEmailValue, enteredPasswordValue에 담았음
        const enteredEmailValue = emailInputRef.current.value;
        const enteredPasswordValue = passwordInputRef.current.value;

        console.log(enteredEmailValue);

        // 유저의 이메일 & 비밀번호 데이터
        const userJoinData = {
            user: {
                email: enteredEmailValue,
                password: enteredPasswordValue,
            },
        };

        try {
            await axios
                .post(`${process.env.REACT_APP_BASE_URL}/user/emailvalid`, userJoinData, {
                    headers: {
                        'Content-type': 'application/json',
                    },
                })
                .then(res => {
                    const result = res.data;

                    // 프로필셋팅 페이지로 넘어가게 만들기
                    if (result.message === '사용 가능한 이메일 입니다.') {
                        setMsg('* 사용 가능한 이메일 입니다.'); // 입력하는 동안 실시간으로 나왔으면 좋겠다.

                        if (!enteredEmailIsValid) {
                            setMsg('* 잘못된 이메일 형식입니다.');
                        } else if (!enteredPasswordIsValid) {
                            setMsgPw('* 비밀번호는 6자 이상이어야 합니다.');
                        } else {
                            setMsg(result.message); // 통과된다.
                            navigate('/login/join/ProfileSetting', {
                                // 프로필 셋팅 페이지로 이동
                                state: {
                                    email: enteredEmailValue,
                                    password: enteredPasswordValue,
                                },
                            });
                        }
                    } else if (result.message === '이미 가입된 이메일 주소 입니다.') {
                        setMsg(result.message);
                    }
                });
        } catch (error) {
            navigate('/notfound');
        }

        // 다음 버튼 클릭 후에, 인풋 값 비우기
        resetEmailInput();
        resetPasswordInput();
    };

    return (
        <LoginWrapper className="login-wrap">
            <TitleText className="title">이메일로 회원가입</TitleText>
            <form onSubmit={formSubmitHandler}>
                <InputForm>
                    <Label htmlFor="email">이메일</Label>
                    <Input
                        type="email"
                        id="userMail"
                        value={enteredEmail}
                        onBlur={emailBlurHandler}
                        onChange={emailChangeHandler}
                        ref={emailInputRef}
                        placeholder="이메일 주소를 입력해 주세요."
                        required
                    />
                    {{ msg } && <ErrorP>{msg}</ErrorP>}
                </InputForm>

                <InputForm>
                    <Label htmlFor="pw">비밀번호</Label>
                    <Input
                        type="password"
                        id="userPassword"
                        value={enteredPassword}
                        onBlur={passwordBlurHandler}
                        onChange={passwordChangeHandler}
                        ref={passwordInputRef}
                        placeholder="비밀번호를 설정해 주세요."
                        required
                    />
                    {/* 처음에 에러문구 안보였다가, 입력할 때, 비밀번호가 6자 이상이 아니면 문구를 그대로 두고, 6자 이상이면 사라지게 만들자 */}
                    {enteredPassword.length >= 1 && enteredPassword.length < 6 ? <ErrorP>{msgPw}</ErrorP> : ''}
                </InputForm>
                <Button size="large" type="submit" disabled={!formIsValid}>
                    다음
                </Button>
            </form>
        </LoginWrapper>
    );
};

export default JoinMembership;
