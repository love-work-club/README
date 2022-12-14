import styled from 'styled-components';
import defaultTheme from '../../../commons/style/themes/default';

export default function Alert({ children, deleteOrLogout }) {
    const cancle = () => {};

    const confirm = () => {};

    const AlertStyled = styled.div`
        width: 264px;
        text-align: center;
        border-radius: 17px;
        p {
            padding: 22px 56px;
            font-family: 'Pretendard-Bold';
            font-weight: 700;
            font-size: 16px;
        }
    `;

    const ButtonStyled = styled.div`
        display: flex;
        button {
            padding: 14px 0;
            border-top: 1px solid ${defaultTheme.palette.gray};
            width: 100%;
            font-family: 'Pretendard-Medium';
            font-weight: 500;
            font-size: 14px;
        }
        .cancle {
            border-bottom-left-radius: 17px;
            border-right: 1px solid ${defaultTheme.palette.gray};
        }
        .selected {
            color: ${defaultTheme.palette.icon};
            margin-left: -1px;
            border-bottom-right-radius: 17px;
            border-left: 1px solid ${defaultTheme.palette.gray};
        }
    `;

    return (
        <AlertStyled>
            <p>{children}</p>
            <ButtonStyled>
                <button onClick={cancle} className="cancle">
                    취소
                </button>
                <button onClick={confirm} className="selected">
                    {deleteOrLogout}
                </button>
            </ButtonStyled>
        </AlertStyled>
    );
}
