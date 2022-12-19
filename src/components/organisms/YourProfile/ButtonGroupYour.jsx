import styled from 'styled-components';
import FeedComment from '../../../assets/icons/message-btn.svg';
import ProfileShare from '../../../assets/icons/share-btn.svg';
import Button from '../../atoms/Button/Button';

const ButtonDiv = styled.div`
    display: flex;
    justify-content: center;
`;

export default function ButtonGroupYour() {
    return (
        <ButtonDiv>
            <a href="/comment">
                <img src={FeedComment} alt="" style={{ marginLeft: '91px' }} />
            </a>
            <Button size="medium" children="팔로우" />
            <a href="/profile">
                <img src={ProfileShare} alt="profileShare" style={{ marginRight: '91px' }} />
            </a>
        </ButtonDiv>
    );
}
