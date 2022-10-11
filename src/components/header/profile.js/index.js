import { createMenu } from "./menu"

export function profile(){
    const menu = document.getElementById('user-photo')
    menu.addEventListener('click', () => {
        if(!document.getElementsByTagName('ul')[0]){
    document.body.append(createMenu())}})
}