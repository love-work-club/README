import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import AuthContext from '../store/auth-context';
import Login from '../pages/Login/Login';
import EmailLogin from '../pages/EmailLogin/EmailLogin';
import Join from '../pages/Join/JoinMembership';
import Splash from '../pages/Splash/Splash';
import Home from '../pages/Home/Home';
import YourProfile from '../pages/Profile/YourProfile/YourProfile';
import MyProfile from '../pages/Profile/MyProfile/MyProfile';
import Followers from './Followers/Followers';
import Followings from './Followings/Followings';
import Chat from '../pages/Chat/Chat';
import NotFound from '../pages/NotFound/NotFound';

function Pages() {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (window.location.pathname === '/') {
            setLoading(true);
            setTimeout(() => {
                setLoading(false);
            }, 1500);
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
                    <Route path="/" element={AuthCtx.isLoggedIn ? <Home /> : <Login />}></Route>
                    <Route path="/login" element={<Login />}></Route>
                    <Route path="/login/emailLogin" element={<EmailLogin />}></Route>
                    <Route path="/login/join" element={<Join />}></Route>
                    <Route path="/home" element={<Home />}></Route>
                    <Route path="/yourprofile/:accountName" element={<YourProfile />}></Route>
                    <Route path="/myprofile" element={<MyProfile />}></Route>
                    <Route path="/followers/:accountName" element={<Followers />}></Route>
                    <Route path="/followings/:accountName" element={<Followings />}></Route>
                    <Route path="/chat" element={<Chat />}></Route>
                    <Route path="*" element={<NotFound />}></Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}
export default Pages;
