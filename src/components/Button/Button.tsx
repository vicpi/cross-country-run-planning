import React, { MouseEventHandler } from 'react';
import './Button.scss';

interface ButtonProps {
    children: React.ElementType | string,
    onClick: MouseEventHandler
}

const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
    return (
        <div className="button" onClick={onClick}>{children}</div>
    )
}

export default Button;