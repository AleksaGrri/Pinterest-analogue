export const logInForm = {
    name: 'logInForm',
    title: 'Вход',
    subTitle: 'Пожалуйста, введитие почту и пароль',
    inputs: [
        {type:'text', value: '', placeholder: 'Почта', name: '' },
        {type: 'password', value: '', placeholder: 'Пароль', name: ''},
    ],
    button: 'Войти' 
}
export const registrationForm = [
    {type:'text', value: '', placeholder: 'Имя пользователя', name: ''},
    {type: 'text', value: '', placeholder: 'Почта', name: ''},
    {type: 'password', value: '', placeholder: 'Пароль', name: ''},
    {type: 'password', value: '', placeholder: 'Повторите пароль', name: ''},
]