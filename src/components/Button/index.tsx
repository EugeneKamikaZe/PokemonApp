import React from 'react';
import cn from "classnames";

import s from './style.module.scss'

enum ButtonColor {
    green = 'green',
    yellow = 'yellow',
    lightblue = 'lightblue',
}

enum ButtonSize {
    small = 'small',
    normal = 'normal',
    big = 'big',
}

interface ButtonProps {
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void,
    isFlex?: boolean,
    buttonSize?: string,
    buttonColor?: string,
}

const Button: React.FC<ButtonProps> = ({children, onClick, isFlex, buttonSize: ButtonSize, buttonColor: ButtonColor}) => {

    return (
        <button
            type="button"
            className={cn(s.root, s[ButtonSize as keyof typeof s], s[ButtonColor as keyof typeof s], {[s.flex]: isFlex})}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;