import { users } from "../../dataBase"

export function logInUser(){
    const mailUser = document.getElementById('mailUser')
    const password = document.getElementById('password')

    if(mailUser.value.indexOf('@') === -1 || mailUser.value.indexOf('.') === -1){
        mailUser.className = 'errorForm'
        console.log('necorrect')
    } else {
     
        for (const iterator of users) {
            if(iterator.email === mailUser.value){
                if(iterator.password = password.value){
                    console.log('uspex')
                    break
                } else {
                    password.className = 'errorForm'
                    console.log('necorrectpass')
                }
            } else {
                mailUser.className = 'errorForm'
                password.value = ''
                mailUser.value = ''
                console.log('necorrectname')
            }
        }
    }
}