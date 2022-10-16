import { checkAuthorization } from "../log-in/itemProfile"

export function existProfile() {
    localStorage.setItem('isAuthorization', false)
    localStorage.removeItem('Name')
    localStorage.removeItem('Email')
    checkAuthorization()
    document.getElementById('menu').remove()
}