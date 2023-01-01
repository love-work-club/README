import React, { useState, useRef, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/atoms/Button/Button';
import { LoginWrapper, TitleText, InputForm, Label, Input, ErrorP } from '../EmailLogin/styled';
import useInput from '../../hooks/use-Input.js';
import AuthContext from '../../store/auth-context.js';

// 이미 가입되어 있는 이메일인지 확인하기 -> 회원가입 api를 받아와야겠지?
export const JoinMembership = () => {
    const [msg, setMsg] = useState(''); // 에러메세지
    const emailInputRef = useRef(); // 회원가입용 이메일
    const passwordInputRef = useRef(); // 회원가입용 비밀번호

    const navigate = useNavigate();
    const authCtx = useContext(AuthContext);
    const [isDisabled, setIsDisabled] = useState(true); // 버튼 비활성화

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

        // 이 부분은 이메일이 밸리데이션을 통과했는가? 인가요?
        if (!enteredEmailIsValid || !enteredPasswordIsValid) {
            return; // 결과 여부를 true or false로 보여주는 것인가?
        }

        // 이메일과 비밀번호의 현재 값을 각각 enteredEmailValue, enteredPasswordValue에 담았음
        const enteredEmailValue = emailInputRef.current.value;
        const enteredPasswordValue = passwordInputRef.current.value;

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
                    if (res.data.status === 404) {
                        // console.log(res);
                        // console.log(res.data);
                        navigate('/notfound');
                    }
                    if (res.data.status === 422) {
                        // console.log(res);
                        // console.log(res.data);
                        setMsg(res.data.message);
                        navigate('/notfound');
                    } else {
                        // authCtx.login(res.data.user.token);
                        navigate('/login/join/ProfileSetting');
                    }
                });
        } catch (error) {
            navigate('/notfound');
        }

        resetEmailInput();
        resetPasswordInput();

        // try {
        //     const response = await axios.post(`${URL}/user/emailvalid`, loginData, {
        //         headers: {
        //             'Content-type': 'application/json',
        //         },
        //     });

        //     const result = await response.data;

        //     // 통신할 때 유효성 검사
        //     if (result.message === '사용 가능한 이메일 입니다.') {
        //         if (!isEmail) {
        //             setMsgEmail('잘못된 이메일 형식입니다.');
        //         } else if (!isPassword) {
        //             setMsgPassword('비밀번호는 6자 이상이어야 합니다.');
        //         } else {
        //             setMsgPassword(result.message);
        //             setIsDisabled(false);
        //             navigate('/login/join/ProfileSetting', {
        //                 state: {
        //                     email,
        //                     password,
        //                 },
        //             });
        //         }
        //     } else if (result.message === '이미 가입된 이메일 주소 입니다.' || !isEmail || !isPassword) {
        //         e.preventDefault();
        //         setIsDisabled(true);
        //         setIsEmail(false);
        //         setMsgPassword(result.message);
        //     } else {
        //         setIsWrong(true);
        //         setIsDisabled(true);
        //         setMsgPassword(result.message);
        //     }
        // } catch (error) {
        //     console.error(error.message);
        // }
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
                        placeholder="이메일 주소를 입력해 주세요"
                        required
                        // className={`${!isEmail || isWrong ? 'error' : ''}`}
                    />
                    {{ msg } && <ErrorP>{msg}</ErrorP>}
                </InputForm>
                {/* <ErrorMessage>* 이미 가입된 주소입니다.</ErrorMessage> */}

                <InputForm>
                    <Label htmlFor="pw">비밀번호</Label>
                    <Input
                        type="password"
                        id="userPassword"
                        value={enteredPassword}
                        onBlur={passwordBlurHandler}
                        onChange={passwordChangeHandler}
                        ref={passwordInputRef}
                        placeholder="비밀번호를 설정해 주세요"
                        required
                        // className={`${!isPassword || isWrong ? 'error' : ''}`}
                    />
                    {/* <ErrorMessage>* 비밀번호는 6자 이상이어야 합니다.</ErrorMessage> */}
                    {{ msg } && <ErrorP>{msg}</ErrorP>}
                </InputForm>
                <Button
                    size="large"
                    type="submit"
                    disabled={!formIsValid}
                    // className={`${isDisabled ? 'disabled' : ''}`}
                >
                    다음
                </Button>
            </form>
        </LoginWrapper>
    );
};

export default JoinMembership;

//
//
//
//
// form validation 통과 여부(이미 있는 이메일인지 검사 후에 formIsValid 적용하기)
// 이메일과 비밀번호의 밸리데이션 모두 통과시에 form 전송 활성화
// if (entredEmailIsValid && enteredPasswordIsValid) {
//     formIsValid = true;
// }

// const [email, setEmail] = useState('');
// const [password, setPassword] = useState('');
// const [isWrong, setIsWrong] = useState(false);
// const [isEmail, setIsEmail] = useState(true); // 이메일 형식이 올바른지
// const [isPassword, setIsPassword] = useState(true); // 비번 형식이 올바른지

// // email & password가 둘 중 하나라도 비어있으면 버튼 비활성화 관리
// useEffect(() => {
//     if (email && password) {
//         setIsDisabled(false);
//     } else {
//         setIsDisabled(true);
//     }
// }, [email, password]);

// // useEffect로 이메일 형식이 맞는지 관리하기
// useEffect(() => {
//     if (isEmail) {
//         setIsEmail(true);
//         // console.log(isEmail);
//     } else {
//         setIsEmail(false);
//     }
// }, [email]);

// // email, password 둘 다 비어있지 않을 때 버튼 활성화하는 함수
// function checkBtn() {
//     if (email !== '' && password !== '') {
//         setIsDisabled(false);
//     } else {
//         setIsDisabled(true);
//     }
// }

// // 이메일 유효성 검사
// function emailValidation(target) {
//     const emailCurrent = target;

//     if (emailCurrent === '') {
//         setMsgEmail('필수 입력사항을 입력해주세요.');
//         setIsEmail(false);
//     } else if (!emailRegex.test(emailCurrent)) {
//         setMsgEmail('잘못된 이메일 형식입니다.');
//         setIsEmail(false);
//     } else {
//         setMsgEmail('');
//         setIsEmail(true);
//     }
// }

// // 비밀번호 유효성 검사
// function pwValidation(target) {
//     const pwCurrent = target;

//     if (pwCurrent === '') {
//         setMsgPassword('필수 입력사항을 입력해주세요.');
//         setIsPassword(false);
//     } else if (pwCurrent.length < 6) {
//         setMsgPassword('비밀번호는 6자 이상이어야 합니다.');
//         setIsPassword(false);
//     } else {
//         setMsgPassword('');
//         setIsPassword(true);
//     }
// }
