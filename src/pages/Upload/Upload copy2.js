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
    position: fixed;
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
    const [imgBlob, setImgBlob] = useState([]);
    const [imgData, setImgData] = useState([]);
    const imgRef = useRef();

    const navigate = useNavigate();

    const AuthCtx = useContext(AuthContext);

    const handleSubmit = e => {
        e.preventDefault();
    };

    let disabled = false;

    const imgUrlLists = [];

    const handleInput = e => {
        setInput(e.target.value);
    };

    if (input !== '') {
        disabled = true;
    }

    const onClick = async e => {
        e.preventDefault();

        // const res = uploadImg();

        // eslint-disable-next-line prefer-const
        let imageUrlList = [];

        // eslint-disable-next-line prefer-const
        for (let imageData of imgData) {
            if (imageData.constructor === File) {
                const formData = new FormData();

                formData.append('image', imageData);
                // eslint-disable-next-line no-await-in-loop
                const imageUrl = await axios.postaxios({
                    method: 'post',
                    url: `${process.env.REACT_APP_BASE_URL}/image/uploadfiles`,
                    data: formData,
                });

                imageUrlList.push(imageUrl);
            } else {
                imageUrlList.push(imageData);
            }
            const convertImageUrlArrayToString = imageUrlList.join(',');
        }

        try {
            await axios.post(
                `${process.env.REACT_APP_BASE_URL}/post`,
                {
                    post: {
                        content: input,
                        // image: await res,
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

    const handleImg = async e => {
        const files = e.target.files;
        const maxValue = 10 * 1024 * 1024;
        let nowImageCount = imgBlob.length;

        for (const file of files) {
            if (file.size > maxValue) {
                alert('파일의 용량이 10MB를 초과했습니다.');
                return;
            }

            if (nowImageCount > 2) {
                alert('3개 이하의 파일을 업로드 하세요.');
                return;
            }

            setImgData(prev => [...prev, file]);
            setImgBlob(prev => [...prev, URL.createObjectURL(file)]);
            nowImageCount += 1;
        }
    };

    // const imgList = () => {
    //     try {
    //         axios({
    //             method: 'post',
    //             url: `${process.env.REACT_APP_BASE_URL}/image/uploadfiles`,
    //             data: formData,
    //         });
    //     } catch (err) {
    //         console.log(err);
    //     }
    // }

    return (
        <>
            <TopNavBarSave disabled={!disabled} onClick={onClick} />
            <UploadWrap>
                <UploadPost onSubmit={handleSubmit}>
                    <UploadInput value={input} onChange={handleInput} />
                    {imgBlob &&
                        imgBlob.map((image, id) => (
                            <UploadPostImg key={`${image}-${id}`} src={image} alt={`${image}-${id}`} />
                        ))}
                </UploadPost>
                <UploadInputBtn
                    id="input-file"
                    type="file"
                    accept="image/*"
                    ref={imgRef}
                    onChange={handleImg}
                    multiple="multiple"
                />
                <UploadBtn htmlFor="input-file">
                    <img src={UploadImg} alt="이미지 추가하기" />
                </UploadBtn>
            </UploadWrap>
        </>
    );
}
