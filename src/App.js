import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/Login/Login';
import EmailLogin from './pages/EmailLogin/EmailLogin';
import Splash from './pages/Splash/Splash';
import Home from './pages/Home/Home';
import YourProfile from './pages/Profile/YourProfile/YourProfile';
import Chat from './pages/Chat/Chat';

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Splash />}></Route>
                    <Route path="/login" element={<Login />}></Route>
                    <Route path="/emailLogin" element={<EmailLogin />}></Route>

                    <Route path="/home" element={<Home />}></Route>
                    <Route path="/yourprofile" element={<YourProfile />}></Route>
                    <Route path="/chat" element={<Chat />}></Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}
export default App;
