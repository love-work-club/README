import styled from 'styled-components';
import Button from '../../atoms/Button/Button';
import defaultTheme from '../../../commons/style/themes/default';

const ButtonDiv = styled.div`
    display: flex;
    justify-content: center;
`;

const ButtonCustom = styled(Button)`
    background-color: ${defaultTheme.palette.white};
    color: black;
    border: 1px solid ${defaultTheme.palette.gray};
    border-color: black;
    margin: 15px 10px;
`;

export default function ButtonGroupMy() {
    return (
        <ButtonDiv>
            <ButtonCustom size="medium" children="프로필 수정" />
            <ButtonCustom size="medium" children="상품등록" />
        </ButtonDiv>
    );
}