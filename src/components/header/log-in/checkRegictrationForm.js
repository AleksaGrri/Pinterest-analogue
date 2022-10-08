export function checkRegistrtionForm(){
    const nameUser = document.getElementById('nameUser')
    const mailUser = document.getElementById('mailUser')
    const password = document.getElementById('password')
    const passwordCheck = document.getElementById('passwordCheck')

    if(!mailUser.value || mailUser.value.indexOf('@') === -1 || mailUser.value.indexOf('.') === -1){
        mailUser.placeholder = 'Введите корректный Email'
        mailUser.className = 'errorForm'
        mailUser.value = ''
        return false
    }

    if(!nameUser.value){
        nameUser.className = 'errorForm'
        return false
    }

    if(!password.value || !passwordCheck.value || password.value !== passwordCheck.value || password.value.length < 7){
        password.className = 'errorForm'
        passwordCheck.className = 'errorForm'
        password.value = ''
        passwordCheck.value = ''
        return false
    }
    return true
}