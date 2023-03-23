import React from 'react';
import ReactDOM, { render } from 'react-dom';
import styled from 'styled-components';
import { PostModalList, PostModalUl } from '../../atoms/PostModal/PostModal';

const BackdropDiv = styled.div`
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

const Backdrop = props => <BackdropDiv onClick={props.onBack}></BackdropDiv>;

const ChooseModal = props => {
    switch (String(props.modal)) {
        case 'post':
            <PostModalUl className="postmodal">
                <PostModalList>삭제</PostModalList>
                <PostModalList>수정</PostModalList>
            </PostModalUl>;
            break;

        case 'postUser':
            <PostModalUl className="postmodal">
                <PostModalList>설정 및 개인정보</PostModalList>
                <PostModalList>로그아웃</PostModalList>
            </PostModalUl>;
            break;

        case 'postProduct':
            <PostModalUl className="postmodal">
                <PostModalList>삭제</PostModalList>
                <PostModalList>수정</PostModalList>
                <PostModalList>웹사이트에서 상품 보기</PostModalList>
            </PostModalUl>;
            break;

        case 'commentReport':
            <PostModalUl className="postmodal">
                <PostModalList>신고하기</PostModalList>
            </PostModalUl>;
            break;

        case 'commentDelete':
            <PostModalUl className="postmodal">
                <PostModalList>삭제</PostModalList>
            </PostModalUl>;
            break;

        case 'modalChat':
            <PostModalUl className="postmodal">
                <PostModalList>채팅방 나가기</PostModalList>
            </PostModalUl>;
            break;

        default:
            <></>;
    }
};

export default function Modal(props) {
    return (
        <>
            {ReactDOM.createPortal(<Backdrop onBack={props.onBack} />, document.getElementById('backdrop'))}
            {ReactDOM.createPortal(<ChooseModal onModal={props.onModal} />, document.getElementById('modal'))}
        </>
    );
}
