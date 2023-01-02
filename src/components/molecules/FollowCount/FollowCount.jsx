import styled from 'styled-components';
import { Link } from 'react-router-dom';
import defaultTheme from '../../../commons/style/themes/default';

const FollowDiv = styled.div`
    width: fit-content;
    text-align: center;
`;

const StyledCountNum = styled.button`
    font-size: ${defaultTheme.fontSize.lg};
`;

const StyledFollow = styled.div`
    font-size: ${defaultTheme.fontSize.xs};
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: ${defaultTheme.palette.black};
`;

export default function FollowCount({ count, kind, accountName, ...props }) {
    console.log('프로필 :', accountName);

    return (
        <FollowDiv>
            <StyledCountNum>
                <StyledLink to={`/${kind}/${accountName}`}>{count}</StyledLink>
            </StyledCountNum>
            <StyledFollow>{kind}</StyledFollow>
        </FollowDiv>
    );
}
