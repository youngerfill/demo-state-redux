import * as h from 'react-hyperscript-helpers'
//import {observer} from "mobx-react"

//const DisplayPanel = observer( ({state}) =>
const DisplayPanel = ({state}) =>
{
    let selector = ".demoBlock"
    selector += (state.highlight ? ".highlight" : "")
    return h.div(selector, "Display")
}
//})

export { DisplayPanel }
