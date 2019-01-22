import * as h from 'react-hyperscript-helpers'

const CheckboxPanel = ({setHighLight}) =>
{
    return h.div(
        ".demoBlock",
        [
            h.label(
                [
                    h.input(
                        "#highlight",
                        {
                            onChange: (e) => { setHighLight(e.target.checked) },
                            type: "checkbox",
                            name: "highlight"
                        }
                    ),
                    "Highlight"
                ]
            )
        ]
    )
}

export  { CheckboxPanel }
