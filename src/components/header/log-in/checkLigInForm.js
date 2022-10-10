export function checkLogInUser(users) {
    const mailUser = document.getElementById('mailUser')
    const password = document.getElementById('password')
    mailUser.className = 'form-email'
    password.className = 'form-password'

    if (mailUser.value.indexOf('@') === -1 || mailUser.value.indexOf('.') === -1) {
        mailUser.className = 'form-error';
        mailUser.placeholder = 'Введите корректный Email'
        mailUser.value = ''
        password.value = ''
        return false
    } else {
        for (const iterator of users) {
            if (iterator.email === mailUser.value) {
                if (iterator.password === password.value) {
                    localStorage.setItem('Email', iterator.email)
                    localStorage.setItem('Name', iterator.name)
                    return true
                } else {
                    password.className = 'form-error'
                    password.placeholder = 'Неверный пароль'
                    password.value = ''
                    return false
                }
            } else {
                mailUser.className = 'form-error'
                password.value = ''
                mailUser.value = ''
                return false
            }
        }
    }
}