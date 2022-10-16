import { createButton } from "../../common/button/button"
import { itemMenu } from "./itemMenu"

export function createMenu() {
    const menu = document.createElement('ul')
    menu.className = 'list'
    menu.id = 'menu'

    const close = document.createElement('div')
    close.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" class="mercado-match" width="16" height="16" focusable="false">
        <path d="M14 3.41L9.41 8 14 12.59 12.59 14 8 9.41 3.41 14 2 12.59 6.59 8 2 3.41 3.41 2 8 6.59 12.59 2z"></path>
    </svg>`
    menu.append(close)

    close.addEventListener('click', () => {

        menu.remove()
    })

    for (const iterator of itemMenu) {
        const itemMenu = document.createElement('li')
        itemMenu.append(createButton({ label: iterator.name, className: iterator.className, onClick: iterator.onClick }))
        menu.append(itemMenu)
    }

    return menu
}