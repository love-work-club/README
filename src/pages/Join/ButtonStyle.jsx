import styled from 'styled-components';
import uploadBtn from '../../assets/uploadBtn.png';

export const ImgUploadBtn = styled.button`
    border: none;
    border-radius: 100%;
    background-image: url(${uploadBtn});
    background-size: cover;
    width: 36px;
    height: 36px;
`;
