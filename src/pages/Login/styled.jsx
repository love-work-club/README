import styled from "styled-components";

const LoginWrapper = styled.div`

  .login-wrap {
    width: 390px;
    height: 844px;
    margin: 0 auto;
    padding: 33px 34px;
    text-align: center;
  }

  .title {
    font-size: 21px;
    margin-bottom: 47px;
  }

  .input-form {
    width: 322px;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 18px;
    text-align: left;
  }

  label {
    color: #767676;
    font-size: 12px;
  }

  input {
    height: 34px;
    border: none;
    border-bottom: 1px solid #DBDBDB;
    transition: all 0.3s;
  }

  input:focus {
    border-color:#362E31;
    outline: none;
  }

  .login-btn {
    width: 100%;
    height: 44px;
    background-color: #D2CBCE;
    border-radius: 22px;
    border: none;
    color: #fff;
    cursor: pointer;
    margin: 12px 0 5px;
    transition: all 0.3s;
  }

  .login-btn:hover {
    background-color: #362E31;
  }

  .login-btn:active {
    background-color: #000;
  }

  .email-join-link {
    color: #767676;
    font-size: 12px;
    text-decoration: underline;
  }
`;

export default LoginWrapper;