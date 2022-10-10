import { checkRegistrtionForm } from "./checkRegictrationForm"
import { checkAuthorization } from "./itemProfile"
import { URL } from "./requestDataUsers"


export async function registrationUser(){
    const nameUser = document.getElementById('nameUser').value
    const mailUser = document.getElementById('mailUser').value
    const passwordUser = document.getElementById('password').value
    if(await checkRegistrtionForm()){
        const newUser = {
            email: mailUser,
            password: passwordUser,
            name: nameUser,
        }
        fetch(URL,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
              },
            body: JSON.stringify(newUser),
        })
        
        localStorage.setItem('isAuthorization', true)
        localStorage.setItem('Email', mailUser) 
        localStorage.setItem('Name', nameUser) 
        document.getElementById('form').remove()
        checkAuthorization()
    }
}