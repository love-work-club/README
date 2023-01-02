import React from 'react';
import { BottomNavBarWrap } from '../../atoms/BottomNavBarWrap/BottomNavBarWrap';
import BottomNavBarItem from '../../atoms/BottomNavBarItem/BottomNavBarItem';
import IconHome from '../../../assets/icons/nav-home.svg';
import IconHomeFill from '../../../assets/icons/nav-home-on.svg';
import IconChat from '../../../assets/icons/nav-chatting.svg';
import IconChatFill from '../../../assets/icons/nav-chatting-on.svg';
import IconUpload from '../../../assets/icons/nav-upload.svg';
import IconUploadFill from '../../../assets/icons/nav-upload-on.svg';
import IconProfile from '../../../assets/icons/nav-profile.svg';
import IconProfileFill from '../../../assets/icons/nav-profile-on.svg';

export default function BottomNavBarBasic(props) {
    return (
        <BottomNavBarWrap>
            <BottomNavBarItem
                to="/home"
                iconSrc={props.type === 'home' ? IconHomeFill : IconHome}
                isActive={props.type === 'home'}
                children="홈"
            />
            <BottomNavBarItem
                to="/chat"
                iconSrc={props.type === 'chat' ? IconChatFill : IconChat}
                isActive={props.type === 'chat'}
                children="채팅"
            />
            <BottomNavBarItem
                to="/upload"
                iconSrc={props.type === 'upload' ? IconUploadFill : IconUpload}
                isActive={props.type === 'upload'}
                children="게시물 작성"
            />
            <BottomNavBarItem
                to="/myprofile"
                iconSrc={props.type === 'profile' ? IconProfileFill : IconProfile}
                isActive={props.type === 'profile'}
                children="프로필"
            />
        </BottomNavBarWrap>
    );
}
