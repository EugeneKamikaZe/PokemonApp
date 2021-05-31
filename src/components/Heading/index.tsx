import React from 'react';
import cn from "classnames";

import s from "./style.module.scss";

interface IHeadingLvl {
    [n: string]: number
}

interface HeadingProps {
    size?: 'xl' | 'l' | 'm' | 's' | 'xs',
    className?: string,
}

const HEADING_LVL: IHeadingLvl = {
    xl: 1,
    l: 2,
    m: 3,
    s: 4,
    xs: 5
}

const Heading: React.FC<HeadingProps> = ({children, size= 'm', className}) => {
    const headingProps = {
        className: cn(s.heading, s[size], className),
    }

    return React.createElement(`h${HEADING_LVL[size]}`, headingProps, children)
}

export default Heading;