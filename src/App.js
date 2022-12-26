import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Login from './pages/Login/Login';
import EmailLogin from './pages/Login/EmailLogin';
import Join from './pages/Join/JoinMembership';
import Splash from './pages/Splash/Splash';
import Home from './pages/Home/Home';
import YourProfile from './pages/Profile/YourProfile/YourProfile';
import Chat from './pages/Chat/Chat';
import NotFound from './pages/NotFound/NotFound';


function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Splash />}></Route>
                    <Route path="/login" element={<Login />}></Route>
                    <Route path="/login/emailLogin" element={<EmailLogin />}></Route>
                    <Route path="/login/join" element={<Join />}></Route>
                    <Route path="/home" element={<Home />}></Route>
                    <Route path="/yourprofile" element={<YourProfile />}></Route>
                    <Route path="/chat" element={<Chat />}></Route>
                    <Route path="*" element={<NotFound />}></Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}
export default App;
