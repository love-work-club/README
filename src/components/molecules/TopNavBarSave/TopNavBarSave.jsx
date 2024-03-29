import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import BackBtn from '../../atoms/BackBtn/BackBtn';
import Button from '../../atoms/Button/Button';
import { TopNavBarHeader, TopNavBarWrapBg } from '../../atoms/TopNavBarWrap/TopNavBarWrap';

const SaveBtn = styled(Button)`
    margin: 0;
`;

function TopNavBarSave({ disabled, onClick, handleJoinSubmit, handleSubmitPost }) {
    return (
        <TopNavBarHeader>
            <TopNavBarWrapBg>
                <BackBtn>
                    <img src={BackBtn} alt="" />
                </BackBtn>
                <SaveBtn size="small" type="button" onClick={handleJoinSubmit} disabled={disabled}>
                    저장
                </SaveBtn>
            </TopNavBarWrapBg>
        </TopNavBarHeader>
    );
}

export default TopNavBarSave;
