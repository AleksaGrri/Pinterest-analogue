import { users } from "../../dataBase"

export function logInUser() {
    const mailUser = document.getElementById('mailUser')
    const password = document.getElementById('password')

    if (mailUser.value.indexOf('@') === -1 || mailUser.value.indexOf('.') === -1) {
        mailUser.className = 'form-error';
        mailUser.placeholder = 'Введите корректный Email'
    } else {

        for (const iterator of users) {
            if (iterator.email === mailUser.value) {
                if (iterator.password = password.value) {
                    break
                } else {
                    password.className = 'form-error'
                }
            } else {
                mailUser.className = 'form-error'
                password.value = ''
                mailUser.value = ''
            }
        }
    }
}