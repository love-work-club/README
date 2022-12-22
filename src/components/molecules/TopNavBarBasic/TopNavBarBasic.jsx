import React from 'react';
import { TopNavBarWrapBg } from '../../atoms/TopNavBarWrap/TopNavBarWrap';
import BackBtn from '../../atoms/BackBtn/BackBtn';
import OptionBtn from '../../atoms/OptionBtn/OptionBtn';

function TopNavBarBasic() {
    return (
        <TopNavBarWrapBg>
            <BackBtn />
            <OptionBtn />
        </TopNavBarWrapBg>
    );
}

export default TopNavBarBasic;
