import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import defaultTheme from '../../../commons/style/themes/default';

const NavItem = styled.li``;

const NavLink = styled(Link)`
    display: inline-block;
    text-align: center;
`;

const NavTitle = styled.p`
    font-weight: 400;
    font-size: 11px;
    line-height: 14px;
    color: ${props => (props.isActive ? defaultTheme.palette.icon : defaultTheme.palette.primary)};
`;

const NavIcon = styled.img`
    width: 24px;
    height: 24px;
    margin-bottom: 2px;
`;

export default function BottomNavBarItem({ iconSrc, isActive, to, children }) {
    return (
        <NavItem>
            <NavLink to={to}>
                <NavIcon src={iconSrc} />
                <NavTitle isActive={isActive}>{children}</NavTitle>
            </NavLink>
        </NavItem>
    );
}
