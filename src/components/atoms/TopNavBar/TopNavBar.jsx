import React from 'react';
import styled from 'styled-components';
import defaultTheme from '../../../commons/style/themes/default';

export default function TopNavBar() {
    const TopNavBarBasic = styled.div`
        width: 390px;
        height: 48px;
        padding: 8px 20px;
        background-color: ${defaultTheme.palette.white};
        border-bottom: 1px solid ${defaultTheme.palette.primary};
        display: flex;
        justify-content: space-between;
        align-items: center;
        box-sizing: border-box;
    `;

    const BackBtn = styled.button`
        border: none;
        background-color: transparent;
        cursor: pointer;
    `;

    const OptionBtn = styled.button`
        border: none;
        background-color: transparent;
        cursor: pointer;
    `;

    const SearchBtn = styled.button`
        border: none;
        background-color: transparent;
        cursor: pointer;
    `;

    const InputUserInfo = styled.input`
        width: 300px;
        height: 30px;
        border-radius: 14px;
        border: none;
        background-color: #f2f2f2;
        padding: 8px 16px;
        font-size: ${defaultTheme.fontSize.sm};
    `;

    const AppTitle = styled.h2`
        font-size: ${defaultTheme.fontSize.lg};
    `;

    const FeedTitle = styled.h3`
        flex: auto;
        font-size: ${defaultTheme.fontSize.sm};
    `;

    return (
        <>
            <TopNavBarBasic>
                <BackBtn>←</BackBtn>
                <OptionBtn>:</OptionBtn>
            </TopNavBarBasic>

            <TopNavBarBasic>
                <BackBtn>←</BackBtn>
                <InputUserInfo placeholder="계정 검색" />
            </TopNavBarBasic>

            <TopNavBarBasic>
                <AppTitle>리드미북 피드</AppTitle>
                <SearchBtn>🔍</SearchBtn>
            </TopNavBarBasic>

            <TopNavBarBasic>
                <BackBtn>←</BackBtn>
                <OptionBtn>저장버튼은 만들어둔거 쓰기</OptionBtn>
            </TopNavBarBasic>

            <TopNavBarBasic>
                <BackBtn>←</BackBtn>
                <FeedTitle>오늘의 추천 도서</FeedTitle>
                <OptionBtn></OptionBtn>
            </TopNavBarBasic>
        </>
    );
}
