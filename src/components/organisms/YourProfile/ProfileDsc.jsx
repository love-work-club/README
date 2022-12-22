import styled from 'styled-components';
import defaultTheme from '../../../commons/style/themes/default';

const ProfileInfoDiv = styled.div`
    text-align: center;
    display: flex;
    flex-direction: column;
`;

const StyledUserName = styled.strong`
    font-size: ${defaultTheme.fontSize.lg};
    font-weight: bolder;
    margin-top: 16px;
`;

const StyledUserId = styled.p`
    font-size: ${defaultTheme.fontSize.sm};
    margin-top: 6px;
`;

const StyledUserDesc = styled.p`
    font-size: ${defaultTheme.fontSize.base};
    margin-top: 6px;
    margin-bottom: 24px;
`;

export default function ProfileDsc({ username, userId, userDesc, ...props }) {
    return (
        <ProfileInfoDiv>
            <StyledUserName>{username}</StyledUserName>
            <StyledUserId>{userId}</StyledUserId>
            <StyledUserDesc>{userDesc}</StyledUserDesc>
        </ProfileInfoDiv>
    );
}
