import React, { useState } from 'react';

const AuthContext = React.createContext({
    token: '',
    isLoggedIn: false,
    login: token => {},
});

export const AuthContextProvider = ({ children }) => {
    const initialToken = localStorage.getItem('token');
    const [token, setToken] = useState(initialToken);

    const userIsLoggedIn = !!token;

    const loginHandler = userToken => {
        setToken(userToken);
        localStorage.setItem('token', userToken);
    };

    const contextValue = {
        token,
        isLoggedIn: userIsLoggedIn,
        login: loginHandler,
    };

    return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
};

export default AuthContext;
