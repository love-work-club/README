import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import IconMoreOption from '../../../assets/icons/feed-more-option.svg';
import AuthContext from '../../../store/auth-context';
import { PostModalList, PostModalUl } from '../../atoms/PostModal/PostModal';

const BackDrop = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 10;
    background-color: black;
    opacity: 0.4;
    background: (0, 0, 0, 0.75);
`;

export const OptionBtnIcon = styled.button`
    border: none;
    background-color: transparent;
    cursor: pointer;
    margin-top: 2px;
`;

function OptionBtn() {
    const [modal, setModal] = useState(false);
    const AuthCtx = useContext(AuthContext);
    const navigate = useNavigate();

    const logoutHandler = e => {
        e.stopPropagation();
        setModal(true);
        AuthCtx.logout();
        navigate('/login');
        console.log(e.target);
    };

    const handleBackdrop = e => {
        e.stopPropagation();
        const clicked = e.target.closest('.postmodal');

        if (!clicked) {
            setModal(false);
        }
    };

    const checked = e => {
        setModal(false);
    };

    return (
        <>
            {modal && (
                <>
                    <BackDrop onClick={handleBackdrop} />
                    <PostModalUl className="postmodal">
                        <PostModalList onClick={checked}>로그아웃</PostModalList>
                    </PostModalUl>
                </>
            )}
            <OptionBtnIcon onClick={logoutHandler}>
                <img src={IconMoreOption} alt="더보기 버튼" />
            </OptionBtnIcon>
        </>
    );
}

export default OptionBtn;
