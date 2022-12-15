import styled from 'styled-components';
import defaultTheme from '../../../commons/style/themes/default';

const ProfileInfoDiv = styled.div`
    text-align: center;
`;

const StyledUserName = styled.strong`
    font-size: ${defaultTheme.fontSize.lg};
`;

const StyledUserId = styled.p`
    font-size: ${defaultTheme.fontSize.sm};
`;

const StyledUserDesc = styled.p`
    font-size: ${defaultTheme.fontSize.base};
`;

export default function ProfileDesc({ username, userId, userDesc, ...props }) {
    return (
        <ProfileInfoDiv>
            <StyledUserName>{username}</StyledUserName>
            <StyledUserId>{userId}</StyledUserId>
            <StyledUserDesc>{userDesc}</StyledUserDesc>
        </ProfileInfoDiv>
    );
}
