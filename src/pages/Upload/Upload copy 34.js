import React, { useContext, useRef, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import TopNavBarSave from '../../components/molecules/TopNavBarSave/TopNavBarSave';
import UploadImg from '../../assets/icons/feed-upload-photo.svg';
import useAxios from '../../hooks/use-api';
import AuthContext from '../../store/auth-context';

const UploadWrap = styled.div`
    height: calc(100vh - 48px);
    padding-top: 48px;
`;

const UploadPost = styled.form`
    height: 100%;
    padding: 32px 36px;
`;

const UploadInput = styled.textarea`
    width: 100%;
    height: calc(100% - 228px);
`;

const UploadBtn = styled.label`
    height: 50px;
    min-width: 50px;
    position: sticky;
    bottom: 20px;
    left: calc(100vw - 70px);
    border-radius: 100%;
`;

const UploadInputBtn = styled.input`
    position: absolute;
    width: 1px;
    height: 1px;
    clip: rect(0 0 0 0);
    overflow: hidden;
`;

const UploadPostImg = styled.img`
    width: 304px;
    height: 228px;
    border-radius: 10px;
    object-fit: cover;
`;

export default function Upload() {
    const [input, setInput] = useState('');
    const [fileImage, setFileImage] = useState('');
    const [showImgs, setShowImgs] = useState([]);
    const imgRef = useRef();

    const navigate = useNavigate();

    const AuthCtx = useContext(AuthContext);

    const handleSubmit = e => {
        e.preventDefault();
    };

    let disabled = false;

    const imgUrlLists = [];

    const handleInput = e => {
        setInput(e.target.value.trim());
    };

    if (input !== '') {
        disabled = true;
    }

    // 추후 수정
    // const { ResData, response, error } = useAxios({
    //     method: 'post',
    //     url: `${process.env.REACT_APP_BASE_URL}/post`,
    //     body: {
    //         post: {
    //             content: input,
    //             image: fileImage,
    //         },
    //     },
    //     headers: {
    //         Authorization: `Bearer ${AuthCtx.token}`,
    //         'Content-type': 'application/json',
    //     },
    // });

    const uploadImg = async e => {
        // eslint-disable-next-line prefer-const
        let formData = new FormData();
        const imgFiles = e.target.files;

        console.log(imgFiles);

        // eslint-disable-next-line no-plusplus
        for (let i = 0; i < imgFiles.length; i++) {
            const file = imgFiles[i];

            formData.append('image', file);
            console.log(file);
        }

        const res = await axios({
            method: 'post',
            url: `${process.env.REACT_APP_BASE_URL}/image/uploadfiles`,
            data: formData,
        });

        console.log('이건 데이터', res.data);
        const imgUrls = res.data.map(file => `${process.env.REACT_APP_BASE_URL}/${file.filename}`).join();

        console.log('이건 url', imgUrls);
        return imgUrls;
    };

    const handleImg = e => {
        // setFileImage(URL.createObjectURL(e.target.files[0]));
        if (e.target.files) {
            const filesArray = Array.from(e.target.files).map(file => URL.createObjectURL(file));

            imgUrlLists.push(...filesArray);

            setShowImgs(prevImgs => prevImgs.concat(filesArray));
        }

        const imgFiles = imgRef.current.files;

        if (imgFiles.length > 3) {
            imgUrlLists = imgUrlLists.slice(0, 3);
            setShowImgs(imgUrlLists);
        }
        Array.from(e.target.files).map(file => URL.revokeObjectURL(file));
    };

    //     const { ResData: imageResData, response: imageResponse, error: imageError } = useAxios({
    //     method: 'post',
    //     url: `${process.env.REACT_APP_BASE_URL}/image/uploadfiles`,
    //     body: formData,
    // });

    const onClick = async e => {
        e.preventDefault();

        const res = uploadImg();

        try {
            await axios.post(
                `${process.env.REACT_APP_BASE_URL}/post`,
                {
                    post: {
                        content: input,
                        image: await res,
                    },
                },
                {
                    headers: {
                        Authorization: `Bearer ${AuthCtx.token}`,
                        'Content-type': 'application/json',
                    },
                }
            );
            navigate('/home');
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <>
            <TopNavBarSave disabled={!disabled} onClick={onClick} />
            <UploadWrap>
                <UploadPost onSubmit={handleSubmit}>
                    <UploadInput value={input} onChange={handleInput} />
                    {showImgs && showImgs.map((image, id) => <UploadPostImg src={image} alt={`${image}-${id}`} />)}
                </UploadPost>
                <UploadInputBtn id="input-file" type="file" accept="image/*" onChange={handleImg} ref={imgRef} />
                <UploadBtn htmlFor="input-file">
                    <img src={UploadImg} alt="이미지 추가하기" onChange={uploadImg} />
                </UploadBtn>
            </UploadWrap>
        </>
    );
}
