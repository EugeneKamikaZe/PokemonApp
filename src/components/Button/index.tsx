import React from 'react';
import cn from "classnames";

import s from './style.module.scss'

export enum ButtonColor {
    green = 'green',
    yellow = 'yellow',
    lightblue = 'lightblue',
}

export enum ButtonSize {
    small = 'small',
    normal = 'normal',
    big = 'big',
}

export interface ButtonProps {
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void,
    isFlex?: boolean,
    buttonSize?: string,
    buttonColor?: string,
    children: string,
}

const Button: React.FC<ButtonProps>
    = ({
           children,
           onClick,
           isFlex,
           buttonSize = ButtonSize.normal,
           buttonColor = ButtonColor.green
       }) => {

    return (
        <button
            type="button"
            className={cn(s.root, s[buttonSize as keyof typeof s], s[buttonColor as keyof typeof s], {[s.flex]: isFlex})}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;