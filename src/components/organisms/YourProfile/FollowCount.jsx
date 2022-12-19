import styled from 'styled-components';
import defaultTheme from '../../../commons/style/themes/default';

const FollowDiv = styled.div`
    width: fit-contentet;
    text-algin: center;
`;

const StyledCountNum = styled.div`
    font-size: ${defaultTheme.fontSize.lg};
`;

const StyledFollow = styled.div`
    font-size: ${defaultTheme.fontSize.xs};
`;

export default function FollowCount({ count, kind, ...props }) {
    return (
        <FollowDiv>
            <StyledCountNum>{count}</StyledCountNum>
            <StyledFollow>{kind}</StyledFollow>
        </FollowDiv>
    );
}
