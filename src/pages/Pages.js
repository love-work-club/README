import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import AuthContext from '../store/auth-context';
import Login from '../pages/Login/Login';
import EmailLogin from '../pages/EmailLogin/EmailLogin';
import Join from '../pages/Join/JoinMembership';
import ProfileSetting from '../pages/Join/ProfileSetting';
import Splash from '../pages/Splash/Splash';
import Home from '../pages/Home/Home';
import YourProfile from '../pages/Profile/YourProfile/YourProfile';
import MyProfile from '../pages/Profile/MyProfile/MyProfile';
import ModifyProfile from './ModifyProfile/ModifyProfile';
import Followers from './Followers/Followers';
import Followings from './Followings/Followings';
import Chat from '../pages/Chat/ChatList';
import ChatRoom from '../pages/Chat/ChatRoom';
import Upload from './Upload/Upload';
import AddProductPage from '../pages/AddProduct/AddProduct';
import Search from '../pages/Search/Search';
import NotFound from '../pages/NotFound/NotFound';
import DetailPosts from './DetailPosts/DetailPosts';

function Pages() {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (window.location.pathname === '/') {
            setLoading(true);
            setTimeout(() => {
                setLoading(false);
            }, 2500);
        }
    }, []);

    return loading ? <Splash /> : <MainPages />;
}

function MainPages() {
    const AuthCtx = useContext(AuthContext);

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/README" element={AuthCtx.isLoggedIn ? <Home /> : <Login />}></Route>
                    <Route path="/README/login" element={<Login />}></Route>
                    <Route path="/README/emailLogin" element={<EmailLogin />}></Route>
                    <Route path="/README/join" element={<Join />}></Route>
                    <Route path="/README/join/profileSetting" element={<ProfileSetting />}></Route>
                    <Route path="/README/home" element={<Home />}></Route>
                    <Route path="/README/yourprofile/:accountName" element={<YourProfile />}></Route>
                    <Route path="/README/myprofile" element={<MyProfile />}></Route>
                    <Route path="/README/modifyProfile" element={<ModifyProfile />}></Route>
                    <Route path="/README/followers/:accountName" element={<Followers />}></Route>
                    <Route path="/README/followings/:accountName" element={<Followings />}></Route>
                    <Route path="/README/chat" element={<Chat />}></Route>
                    <Route path="/README/chat/chattingRoom" element={<ChatRoom />}></Route>
                    <Route path="/README/upload" element={<Upload />}></Route>
                    <Route path="/README/AddProduct" element={<AddProductPage />}></Route>
                    <Route path="/README/search" element={<Search />}></Route>
                    <Route path="/README/post/:id" element={<DetailPosts />}></Route>
                    <Route path="*" element={<NotFound />}></Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}
export default Pages;
