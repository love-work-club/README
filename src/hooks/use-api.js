/* eslint-disable object-shorthand */
import axios from 'axios';
import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const useAxios = ({ method, url, headers = null, body = null }) => {
    const [response, setResponse] = useState(null);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const ResData = useCallback(async () => {
        await axios({
            method: method,
            url: url,
            data: body,
            headers: headers,
        })
            .then(res => {
                setResponse(res.data);
            })
            .catch(err => {
                navigate('/notfound');
                setError(err);
            });
    }, [body]);

    return { ResData, response, error };
};

export default useAxios;
