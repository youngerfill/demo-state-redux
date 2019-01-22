import { BrowserRouter } from 'react-router-dom'
import * as h from 'react-hyperscript-helpers'
import ReactDOM from 'react-dom'
import {Page} from './ui/page.js'
import './ui/index.css'

import {state} from './state.js'

ReactDOM.render(
    h.h(BrowserRouter,
        {
            basename: process.env.PUBLIC_URL
        },
        [
            h.h(Page,
                {
                    setHighLight: (highlight) => { state.highlight = highlight },
                    state
                }
            )
        ]
    )
    ,
    document.getElementById('root')
)
