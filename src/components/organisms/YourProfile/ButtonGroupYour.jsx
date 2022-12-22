import styled from 'styled-components';
import { useState } from 'react';
import FeedComment from '../../../assets/icons/message-btn.svg';
import ProfileShare from '../../../assets/icons/share-btn.svg';
import Button from '../../atoms/Button/Button';

const ButtonDiv = styled.div`
    display: flex;
    justify-content: center;
`;

export default function ButtonGroupYour() {
    // 팔로우 버튼 클릭 시 팔로우 취소
    const [follow, setFollow] = useState(false);

    return (
        <ButtonDiv>
            <a href="/comment">
                <img src={FeedComment} alt="" style={{ marginLeft: '91px' }} />
            </a>
            <Button
                size="medium"
                children={follow === true ? '언팔로우' : '팔로우'}
                onClick={() => setFollow(!follow)}
            />
            <a href="/profile">
                <img src={ProfileShare} alt="profileShare" style={{ marginRight: '91px' }} />
            </a>
        </ButtonDiv>
    );
}
