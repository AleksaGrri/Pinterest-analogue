export function checkChangePasswordForm(){
    const mailUser = document.getElementById('mailUser')
    const secretWord = document.getElementById('secretWord')
    const password = document.getElementById('password')
    const passwordCheck = document.getElementById('passwordCheck')

    password.className = 'form-password'
    passwordCheck.className = 'form-password-check'
    secretWord.className = 'form-name-user'

    if (!mailUser.value || mailUser.value.indexOf('@') === -1 || mailUser.value.indexOf('.') === -1) {
        mailUser.placeholder = 'Введите корректный Email'
        mailUser.className = 'form-error'
        mailUser.value = ''
        password.value = ''
        passwordCheck.value = ''
        return false
    }

    if(!secretWord.value || secretWord.value !== 'var-huyar'){
        secretWord.value = ''
        secretWord.className = 'form-error'
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
    return true
}