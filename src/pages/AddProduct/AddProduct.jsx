import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';
import TopNavBarSave from '../../components/molecules/TopNavBarSave/TopNavBarSave';
import ImageButton from '../../assets/images/chat-upload-photo.svg';
import AuthContext from '../../store/auth-context';
// 스타일 컴포넌트 리팩토링시 분리
const AddProduct = styled.section`
    display: flex;
    flex-direction: column;
    padding: 78px 34px;
`;

const AddImagetext = styled.span`
    padding-bottom: 18px;
    font-size: 12px;
    color: #767676;
`;

const Addimage = styled.label`
    width: 322px;
    height: 204px;
    background: #f2f2f2;
    border: 0.5px solid #dbdbdb;
    border-radius: 10px;
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
    cursor: pointer;
`;

const AddImageButton = styled.button`
    background-image: url(${ImageButton});
    width: 36px;
    height: 36px;
    border-radius: 18px;
    margin: 12px;
    cursor: pointer;
`;

const AddImageFile = styled.input`
    position: absolute;
    width: 1px;
    height: 1px;
    clip: rect(0 0 0 0);
    overflow: hidden;
`;

const AddProductForm = styled.form`
    display: flex;
    flex-direction: column;
    padding-top: 30px;
    gap: 16px;
`;

const Add = styled.div`
    gap: 10px;
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid #dbdbdb;
`;

const AddLabel = styled.label`
    font-size: 12px;
    color: #767676;
`;

const AddInput = styled.input`
    padding-bottom: 8px;
    font-size: 14px;
    &::placeholder {
        color: #dbdbdb;
    }
`;

//

export default function AddProductPage() {
    const axiosAddImage = axios.create({
        baseURL: 'https://mandarin.api.weniv.co.kr',
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });

    const [AddImage, setAddImage] = useState('');
    const [AddName, setAddName] = useState('');
    const [nameLength, setNameLength] = useState(true);
    const [AddPrice, setAddPrice] = useState(0);
    const [numberLength, setNumberLength] = useState(true);
    const [isNumber, setIsNumber] = useState(true);
    const [AddLink, setAddLink] = useState('');
    const [isEmpty, setIsEmpty] = useState(false);
    const [imgFile, setImgFile] = useState('');
    const AuthCtx = useContext(AuthContext);

    // const [validAddName, setValidAddName] = useState(false);
    // const [ErrorAddName, setErrorAddName] = useState('');
    const [validAddLink, setValidAddLink] = useState(false);
    const [ErrorAddLink, setErrorAddLink] = useState('');

    const Navigate = useNavigate();

    // 저장
    const onClickSaveButton = async e => {
        e.preventDefault();

        try {
            const res = await axios.post(
                'https://mandarin.api.weniv.co.kr/product',
                {
                    product: {
                        itemName: AddName,
                        price: Number(AddPrice.replaceAll(',', '')),
                        link: AddLink,
                        itemImage: AddImage,
                    },
                },
                {
                    headers: {
                        Authorization: `Bearer ${AuthCtx.token}`,
                        'Content-type': 'application/json',
                    },
                }
            );

            Navigate('/yourprofile');
        } catch (error) {
            console.log(error);
        }
    };

    // 저장 활성화 조건
    useEffect(() => {
        if (AddPrice && AddName && AddLink && nameLength && isNumber && numberLength) {
            setIsEmpty(false);
        } else {
            setIsEmpty(true);
        }
    }, [AddName, AddPrice, AddLink, nameLength, isNumber, numberLength]);
    // 상품 이름 글자수
    useEffect(() => {
        if ((AddName.length > 15 || AddName.length < 2) && AddName.length !== 0) {
            setNameLength(false);
        } else {
            setNameLength(true);
        }
    }, [AddName, nameLength]);
    // // 가격 유효성
    // useEffect(() => {
    //     const regExp = /^[0-9]+$/;

    //     if (regExp.test(AddPrice) || !AddPrice) {
    //         setIsNumber(true);
    //         if (AddPrice.length < 10) {
    //             setNumberLength(true);
    //         } else {
    //             setNumberLength(false);
    //         }
    //     } else {
    //         setIsNumber(false);
    //     }
    // }, [AddPrice, numberLength]);

    useEffect(() => {
        if (!AddPrice.length || AddPrice.length < 10) {
            setNumberLength(true);
        } else {
            setNumberLength(false);
        }
    }, [numberLength]);

    // eslint-disable-next-line consistent-return
    const HandleAddImage = async e => {
        e.preventDefault();

        const form = new FormData();

        form.append('image', e.target.files[0]);
        const { data } = await axiosAddImage.post('/image/uploadfile', form);

        if (!e.target.files[0]) return setAddImage('');

        setAddImage(`https://mandarin.api.weniv.co.kr/${data.filename}`);
    };

    // eslint-disable-next-line no-shadow
    const AddComma = AddPrice => {
        // eslint-disable-next-line no-shadow
        const comma = AddPrice => {
            AddPrice = String(AddPrice);
            AddPrice.replace(/(\d)(?=(?:\d{3})+(?!\d))/g, '$1,');
        };
        // eslint-disable-next-line no-shadow
        const uncomma = AddPrice => {
            AddPrice = String(AddPrice);
            AddPrice.replace(/[^\d]+/g, '');
        };

        return comma(uncomma(AddPrice));
    };

    const URL_REGEX =
        /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;

    // const AddSave =({})=>
    // const [ErrorAddLink,setErrorAddLink] = useState('')

    useEffect(() => {
        const result = URL_REGEX.test(AddLink);

        setValidAddLink(result);

        if (AddLink.length && !result) setErrorAddLink('잘못된 URL 형식입니다.');
        else setErrorAddLink('');
    }, [AddLink]);

    return (
        <>
            <TopNavBarSave saveBtn is Empty={isEmpty} onClick={onClickSaveButton} />
            <AddProduct method="POST">
                <AddImagetext>이미지 등록</AddImagetext>
                <Addimage htmlFor="AddImage">
                    <AddImageButton />
                    <AddImageFile
                        type="file"
                        id="AddImage"
                        value={AddImage}
                        accept=".jpg, .gif, .png, .jpeg, .bmp, .tif, .heic"
                        onChange={HandleAddImage}
                    />
                    <AddImageFile src={AddImage || ``} alt="이미지" />
                </Addimage>
                <AddProductForm>
                    <Add>
                        <AddLabel htmlFor="AddName">상품명</AddLabel>
                        <AddInput
                            id="AddName"
                            value={AddName}
                            onChange={e => setAddName(e.target.value)}
                            type="text"
                            placeholder="2~15자 이내여야 합니다."
                            minLength="2"
                            maxLength="15"
                            isLast={false}
                        />
                        {nameLength ? null : <p>* 2~15자 이내여야 합니다.</p>}
                    </Add>
                    <Add>
                        <AddLabel>가격</AddLabel>
                        <AddInput
                            id="AddPrice"
                            value={AddPrice}
                            onChange={e => {
                                setAddPrice(AddComma(e.target.value));
                            }}
                            type="text"
                            placeholder="숫자만 입력 가능합니다."
                            isLast={false}
                        />
                        {isNumber ? null : <p>* 숫자만 입력 가능합니다.</p>}
                        {numberLength ? null : <p>* 입력할 수 있는 금액을 초과했습니다.</p>}
                    </Add>
                    <Add>
                        <AddLabel>판매링크</AddLabel>
                        <AddInput
                            id="AddLink"
                            value={AddLink}
                            onChange={e => setAddLink(e.target.value)}
                            type="text"
                            placeholder="URL을 입력해 주세요."
                            isLast={true}
                        />
                    </Add>
                </AddProductForm>
            </AddProduct>
        </>
    );
}
