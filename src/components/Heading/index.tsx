import React from 'react';

import s from "./style.module.scss";

interface MyHeading {
    tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

const Heading: React.FC<MyHeading> = ({children, tag: Tag}) => {
    return (
        <Tag className={s[Tag as keyof typeof s]}>{children}</Tag>
    )
}

export default Heading;