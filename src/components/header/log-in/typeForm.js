import { createForm } from "../../common/form/form"
import { logInUser } from "./checkLigInForm"
import { checkRegistrtionForm } from "./checkRegictrationForm"

export const logInForm = {
    name: 'logInForm',
    title: 'Вход',
    subTitle: 'Пожалуйста, введитие почту и пароль',
    inputs: [
        {type:'text', value: '', placeholder: 'Почта', id: 'mailUser' },
        {type: 'password', value: '', placeholder: 'Пароль', id: 'password'},
    ],
    button: {
        name: 'Войти',
        onClick: logInUser,
        }, 
    subPanel: {
            textSubPanel: 'Нет аккаунта?',
            textSubLink: 'Зарегистрироваться',
            onClickSubLink: function(){
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
        {type: 'text', value: '', placeholder: 'Имя пользователя', id: 'nameUser'},
        {type: 'text', value: '', placeholder: 'Почта', id: 'mailUser'},
        {type: 'password', value: '', placeholder: 'Пароль', id: 'password'},
        {type: 'password', value: '', placeholder: 'Повторите пароль', id: 'passwordCheck'},
    ],
    button: {
        name:'Зарегистрироваться',
        onClick: checkRegistrtionForm,
        }, 
    subPanel: {
        textSubPanel: 'Есть аккаунта?',
        textSubLink: 'Войти',
        onClickSubLink: function(){
            const root = document.getElementById('form')
                root.remove()
                document.body.append(createForm(logInForm))
        }
    },
}