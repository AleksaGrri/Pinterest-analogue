import { createForm } from "../../common/form/form"
import { logInUser } from "./checkLigInForm"
import { checkRegistrtionForm } from "./checkRegictrationForm"

export const logInForm = {
    name: 'logInForm',
    title: 'Вход',
    subTitle: 'Пожалуйста, введитие почту и пароль',
    inputs: [
        { type: 'text', value: '', placeholder: 'Почта', id: 'mailUser', className: 'form-email' },
        { type: 'password', value: '', placeholder: 'Пароль', id: 'password', className: 'form-password' },
    ],
    button: {
        name: 'Войти',
        onClick: logInUser,
        className: 'form-btn-authorization',
    },
    subPanel: {
        textSubPanel: 'Нет аккаунта?',
        textSubLink: 'Зарегистрироваться',
        onClickSubLink: function () {
            const root = document.getElementById('form')
            root.remove()
            document.body.append(createForm(registrationForm))
        },
    }
}
export const registrationForm = {
    name: 'registrationForm',
    title: 'Регистрация',
    subTitle: 'Пожалуйста, введитие данные для регистрации',
    inputs: [
        { type: 'text', value: '', placeholder: 'Имя пользователя', id: 'nameUser', className: 'form-name-user' },
        { type: 'text', value: '', placeholder: 'Почта', id: 'mailUser', className: 'form-email' },
        { type: 'password', value: '', placeholder: 'Пароль', id: 'password', className: 'form-password' },
        { type: 'password', value: '', placeholder: 'Повторите пароль', id: 'passwordCheck', className: 'form-password-check' },
    ],
    button: {
        name: 'Зарегистрироваться',
        onClick: checkRegistrtionForm,
        className: 'form-btn-authorization',
    },
    subPanel: {
        textSubPanel: 'Есть аккаунт?',
        textSubLink: 'Войти',
        onClickSubLink: function () {
            const root = document.getElementById('form')
            root.remove()
            document.body.append(createForm(logInForm))
        }
    },
}