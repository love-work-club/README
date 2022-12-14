import React from 'react';
import { StyledLabel } from './style';

export default function Label({ htmlFor, fontSize, lineHeight, color, value, ...props }) {
    return (
        <StyledLabel htmlFor={htmlFor} fontSize={fontSize} lineHeight={lineHeight} color={color}>
            {value}
        </StyledLabel>
    );
}
