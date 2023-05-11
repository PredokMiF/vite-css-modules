import React from 'react'
import ReactDOM from 'react-dom/client'

import './div1.css'
import './div2.scss'
import styles3 from './div3.module.css'
import styles4 from './div4.module.scss'

const appRootEl = document.getElementById('root') as HTMLElement

ReactDOM.createRoot(appRootEl).render(
    <div>
        <div className="div1">Yo! 1</div>
        <div className="div2">Yo! 2</div>
        <div className={styles3.div3}>Yo! 3</div>
        <div className={styles4.div4}>Yo! 4</div>
        <div className={styles4.div5}>Yo! Must failed cause class is not exist</div>
    </div>,
)
