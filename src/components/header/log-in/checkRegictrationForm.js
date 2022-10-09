import { getUsers } from "./requestDataUsers"
import { registrationForm } from "./typeForm"

export function checkRegistrtionForm() {
    const nameUser = document.getElementById('nameUser')
    const mailUser = document.getElementById('mailUser')
    const password = document.getElementById('password')
    const passwordCheck = document.getElementById('passwordCheck')

    nameUser.className = 'form-name-user'
    mailUser.className ='form-email'
    password.className = 'form-password'
    passwordCheck.className = 'form-password-check'

    nameUser.placeholder = registrationForm.inputs[0].placeholder
    mailUser.placeholder = registrationForm.inputs[1].placeholder
    password.placeholder = registrationForm.inputs[2].placeholder
    passwordCheck.placeholder = registrationForm.inputs[3].placeholder

    if (!mailUser.value || mailUser.value.indexOf('@') === -1 || mailUser.value.indexOf('.') === -1) {
        mailUser.placeholder = 'Введите корректный Email'
        mailUser.className = 'form-error'
        mailUser.value = ''
        password.value = ''
        passwordCheck.value = ''
        return false
    }

    if (!nameUser.value) {
        nameUser.className = 'form-error'
        password.value = ''
        passwordCheck.value = ''
        return false
    }

    if (!password.value || !passwordCheck.value || password.value !== passwordCheck.value || password.value.length < 5) {
        password.className = 'form-error'
        passwordCheck.className = 'form-error'
        if(password.value.length < 5){
            password.placeholder = 'Пароль должен быть более 5 символов'
        }
        if(password.value !== passwordCheck.value){
            passwordCheck.placeholder = 'Пароль не совпадает'
        }
        password.value = ''
        passwordCheck.value = ''
        return false
    }
    getUsers().then(data => {
        for (const iterator of data) {
            if(iterator.email === mailUser.value){
                mailUser.placeholder = 'Данный email уже используется'
                mailUser.className = 'form-error'
                mailUser.value = ''
                password.value = ''
                passwordCheck.value = ''
                console.log('ошибка')
                return false
            } else {
                return true
            }
        }
    })

    
}