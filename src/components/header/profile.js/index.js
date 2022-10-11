import { createMenu } from "./menu"

export function profile(){
    const menu = document.getElementById('user-photo')
    menu.addEventListener('click', () => document.body.append(createMenu()))
}