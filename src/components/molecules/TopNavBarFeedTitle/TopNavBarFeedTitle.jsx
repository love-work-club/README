import React from 'react';
import styled from 'styled-components';
import defaultTheme from '../../../commons/style/themes/default';
import { TopNavBarWrapBg } from '../../atoms/TopNavBarWrap/TopNavBarWrap';
import BackBtn from '../../atoms/BackBtn/BackBtn';
import OptionBtn from '../../atoms/OptionBtn/OptionBtn';

const FeedTitle = styled.h3`
    flex: auto;
    font-size: ${defaultTheme.fontSize.m};
`;

function TopNavBarFeedTitle() {
    return (
        <TopNavBarWrapBg>
            <BackBtn />
            <FeedTitle>리액트를 다루는 기술</FeedTitle>
            <OptionBtn />
        </TopNavBarWrapBg>
    );
}

export default TopNavBarFeedTitle;
