import React from 'react';
import styled from 'styled-components';
import BackBtn from '../../atoms/BackBtn/BackBtn';
import Button from '../../atoms/Button/Button';
import { TopNavBarWrapBg } from '../../atoms/TopNavBarWrap/TopNavBarWrap';

const SaveBtn = styled(Button)`
    margin: 0;
`;

function TopNavBarSave({ className }) {
    return (
        <TopNavBarWrapBg>
            <BackBtn>
                <img src={BackBtn} alt="" />
            </BackBtn>
            <SaveBtn size="small" type="submit">
                저장
            </SaveBtn>
        </TopNavBarWrapBg>
    );
}

export default TopNavBarSave;