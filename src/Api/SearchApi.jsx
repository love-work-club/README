import React, { useContext } from 'react';
import axios from 'axios';
import AuthContext from '../store/auth-context';

// API 통신
const SearchApi = async keyword => {
    const AuthCtx = useContext(AuthContext);

    const response = await axios
        .get(`${process.env.REACT_APP_BASE_URL}/user/searchuser/?keyword=keyword`, {
            headers: {
                Authorization: `Bearer ${AuthCtx.token}`,
                'Content-type': 'application/json',
            },
            params: {
                query: keyword,
            },
        })
        .catch(error => {
            if (error.response) {
                console.log(error.response.data);
                console.log(error.response.status);
                console.log(error.response.headers);
            } else if (error.request) {
                console.log(error.request);
            } else {
                console.log('Error', error.message);
            }
            console.log(error.config);
        });

    return response.data.results;
};

export default SearchApi;
