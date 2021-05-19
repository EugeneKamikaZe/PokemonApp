import React from 'react';
import cn from "classnames";

import s from "./style.module.scss";

interface MyHeading {
    tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6',
    classname?: string,
}

const Heading: React.FC<MyHeading> = ({children, tag: Tag, classname}) => {
    return (
        <Tag className={cn(s[Tag as keyof typeof s], classname)}>{children}</Tag>
    )
}

export default Heading;