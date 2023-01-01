import React from 'react';
import styled from 'styled-components';
import TopNavBarSave from '../../components/molecules/TopNavBarSave/TopNavBarSave';
import ImageButton from '../../assets/images/chat-upload-photo.svg';

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

export default function AddProductPage() {
    return (
        <>
            <TopNavBarSave />
            <AddProduct>
                <AddImagetext>이미지 등록</AddImagetext>
                <Addimage>
                    <AddImageButton />
                </Addimage>
                <AddProductForm>
                    <Add>
                        <AddLabel>상품명</AddLabel>
                        <AddInput
                            // value={name}
                            // onChange={functionname}
                            type="text"
                            placeholder="2~15자 이내여야 합니다."
                        />
                    </Add>
                    <Add>
                        <AddLabel>가격</AddLabel>
                        <AddInput // value={name}
                            // onChange={functionname}
                            type="text"
                            placeholder="숫자만 입력 가능합니다."
                        />
                    </Add>
                    <Add>
                        <AddLabel>판매링크</AddLabel>
                        <AddInput // value={name}
                            // onChange={functionname}
                            type="text"
                            placeholder="URL을 입력해 주세요."
                        />
                    </Add>
                </AddProductForm>
            </AddProduct>
        </>
    );
}
