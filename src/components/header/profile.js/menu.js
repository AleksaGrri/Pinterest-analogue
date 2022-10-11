import { createButton } from "../../common/button/button"
import { itemMenu } from "./itemMenu"

export function createMenu(){
    const menu = document.createElement('ul')
    menu.className = 'list'

    for (const iterator of itemMenu) {
        const itemMenu = document.createElement('li')
        itemMenu.append(createButton({label: iterator.name, className: iterator.className, onClick: iterator.onClick}))
        menu.append(itemMenu)
    }

    return menu
}