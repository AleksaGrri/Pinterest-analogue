import { users } from "../../dataBase"
import { checkRegistrtionForm } from "./checkRegictrationForm"

export function registrationUser(){
    const nameUser = document.getElementById('nameUser').value
    const mailUser = document.getElementById('mailUser').value
    const passwordUser = document.getElementById('password').value

    if(checkRegistrtionForm()){
        const newUser = {
            email: mailUser,
            password: passwordUser,
            name: nameUser,
        }
        
        users.push(newUser)
    }
}