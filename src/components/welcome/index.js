import { createButton } from "../common/button/button";
import { hidden } from "./closeBody";
import { show } from "./welcom";

export function welcome(){
    hidden()
    const main = document.createElement('div')
    main.id = 'main'
    main.append(createButton({label:'Поехали!', className:'', onClick: show}))
    document.body.append(main)
}