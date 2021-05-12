import React from 'react'
import cn from 'classnames'

import './www.css'
import s from './App.modules.scss'

const App = () => {
    return (
        <div className={cn(s.header, 'color')}>
            Component! aaaaaaaaaaaaaaaaaaaaaaa
        </div>
    )
}

export default App