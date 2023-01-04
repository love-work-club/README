import React, { useState } from 'react';

const AuthContext = React.createContext({
    accountName: '',
    token: '',
    isLoggedIn: false,
    login: (token, accountName) => {},
    logout: () => {},
});

export const AuthContextProvider = ({ children }) => {
    const initialToken = localStorage.getItem('token');
    const initialAccountName = localStorage.getItem('accountName');
    const [token, setToken] = useState(initialToken);
    const [accountName, setAccountName] = useState(initialAccountName);

    const userIsLoggedIn = !!token;

    const loginHandler = (userToken, userAccountName) => {
        setAccountName(userAccountName);
        setToken(userToken);
        localStorage.setItem('accountName', userAccountName);
        localStorage.setItem('token', userToken);
    };

    const logoutHandler = () => {
        localStorage.removeItem('accountName');
        localStorage.removeItem('token');
    };

    const contextValue = {
        accountName,
        token,
        isLoggedIn: userIsLoggedIn,
        login: loginHandler,
        logout: logoutHandler,
    };

    return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
};

export default AuthContext;
