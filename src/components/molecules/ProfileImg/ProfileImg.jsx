import styled from 'styled-components';

const ProfileImgCase = styled.img`
    width: 110px;
    height: 110px;
    border-radius: 50%;
`;

export default function ProfileImg({ src, alt, ...props }) {
    return <ProfileImgCase src={src} alt={alt}></ProfileImgCase>;
}
