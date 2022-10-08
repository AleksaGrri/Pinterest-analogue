export function checkRegistrtionForm() {
    const nameUser = document.getElementById('nameUser')
    const mailUser = document.getElementById('mailUser')
    const password = document.getElementById('password')
    const passwordCheck = document.getElementById('passwordCheck')

    if (!mailUser.value || mailUser.value.indexOf('@') === -1 || mailUser.value.indexOf('.') === -1) {
        mailUser.placeholder = 'Введите корректный Email'
        mailUser.className = 'form-error'
        mailUser.value = ''
        return false
    }

    if (!nameUser.value) {
        nameUser.className = 'form-error'
        return false
    }

    if (!password.value || !passwordCheck.value || password.value !== passwordCheck.value || password.value.length < 7) {
        password.className = 'form-error'
        passwordCheck.className = 'form-error'
        password.value = ''
        passwordCheck.value = ''
        return false
    }
    return true
}