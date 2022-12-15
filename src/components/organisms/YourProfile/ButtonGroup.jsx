import styled from 'styled-components';
import FeedComment from '../../../assets/icons/message-btn.svg';
import ProfileShare from '../../../assets/icons/share-btn.svg';
import Button from '../../atoms/Button/Button';

const ButtonDiv = styled.div`
    display: flex;
    justify-content: center;
    background-color: blue;
    margin: 0;
`;

export default function ButtonGroup() {
    return (
        <ButtonDiv>
            <a href="/comment">
                <img src={FeedComment} alt="" />
            </a>
            <Button size="medium" children="팔로우" />
            <a href="/profile">
                <img src={ProfileShare} alt="profileShare" />
            </a>
        </ButtonDiv>
    );
}
