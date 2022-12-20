import React from 'react';
import { BottomNavBarWrap } from '../../atoms/BottomNavBarWrap/BottomNavBarWrap';
import Home from '../../atoms/Home/Home';
import Chat from '../../atoms/Chat/Chat';
import Upload from '../../atoms/Upload/Upload';
import Profile from '../../atoms/Profile/Profile';

export default function BottomNavBarBasic() {
    return (
        <BottomNavBarWrap>
            <Home />
            <Chat />
            <Upload />
            <Profile />
        </BottomNavBarWrap>
    );
}
