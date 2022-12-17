import React from 'react';
import styled from 'styled-components';
import defaultTheme from '../../../commons/style/themes/default';
import IconBack from '../../../assets/icons/icon-back.svg';
import IconMoreOption from '../../../assets/icons/feed-more-option.svg';
import IconSearchBtn from '../../../assets/icons/icon-search.svg';
import Button from '../../atoms/Button/Button';

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
        margin-right: 14px;
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
        font-size: ${defaultTheme.fontSize.m};
    `;

    return (
        <>
            <TopNavBarBasic>
                <BackBtn>
                    <img src={IconBack} alt="" />
                </BackBtn>
                <OptionBtn>
                    <img src={IconMoreOption} alt="" />
                </OptionBtn>
            </TopNavBarBasic>

            <TopNavBarBasic>
                <BackBtn>
                    <img src={IconBack} alt="" />
                </BackBtn>
                <InputUserInfo placeholder="계정 검색" />
            </TopNavBarBasic>

            <TopNavBarBasic>
                <AppTitle>리드미북 피드</AppTitle>
                <SearchBtn>
                    <img src={IconSearchBtn} alt="" />
                </SearchBtn>
            </TopNavBarBasic>

            <TopNavBarBasic>
                <BackBtn>
                    <img src={IconBack} alt="" />
                </BackBtn>
                <Button size="small" type="submit" styled={{}}>
                    저장
                </Button>
            </TopNavBarBasic>

            <TopNavBarBasic>
                <BackBtn>
                    <img src={IconBack} alt="" />
                </BackBtn>
                <FeedTitle>오늘의 추천 도서</FeedTitle>
                <OptionBtn>
                    <img src={IconMoreOption} alt="" />
                </OptionBtn>
            </TopNavBarBasic>
        </>
    );
}
