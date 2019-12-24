import React, { MouseEventHandler } from 'react';
import { StyledButtonDiv } from './ButtonStyles'

interface ButtonProps {
    children: React.ElementType | string,
    onClick: MouseEventHandler
}

const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
    return (
        <StyledButtonDiv onClick={onClick}>{children}</StyledButtonDiv>
    )
}

export default Button;