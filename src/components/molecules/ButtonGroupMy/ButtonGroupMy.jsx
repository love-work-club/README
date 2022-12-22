import styled from 'styled-components';
import Button from '../../atoms/Button/Button';

const ButtonDiv = styled.div`
    display: flex;
    justify-content: center;
`;

export default function ButtonGroupMy() {
    return (
        <ButtonDiv>
            <Button size="medium" children="프로필 수정" />
            <Button size="medium" children="상품등록" />
        </ButtonDiv>
    );
}
