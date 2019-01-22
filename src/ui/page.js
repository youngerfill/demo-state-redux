import { Switch, Route } from 'react-router-dom'
import * as h from 'react-hyperscript-helpers'
//import {observer} from "mobx-react"

import {DisplayPanel} from './displaypanel.js'
import {CheckboxPanel} from './checkboxpanel.js'

//const Page = observer(({ setHighLight, state }) =>
const Page = ({ setHighLight, state }) =>
{
    return h.h(
        Switch,
        [
            h.h(
                Route,
                {
                    exact: true,
                    path: '/',
                    render: () => {
                        return h.div(
                            "#page",
                            [
                                h.h(CheckboxPanel, {setHighLight}),
                                h.h(DisplayPanel, {state})
                            ]
                        )
                    }
                }
            )
        ]
    )
}
//})

export { Page }
