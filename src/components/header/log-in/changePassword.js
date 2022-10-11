import { checkChangePasswordForm } from "./checkChangePasswordForm";
import { checkAuthorization } from "./itemProfile";
import { getUsers, URL } from "./requestDataUsers";

export async function changePassword(){
    if(checkChangePasswordForm()){
        const mailUser = document.getElementById('mailUser')
        const password = document.getElementById('password')
        let URLuser = URL
        let isUser = false
        await getUsers().then(data =>{
            for (const iterator of data) {
                if(iterator.email === mailUser.value){
                    console.log('прошла проверка')
                    URLuser += `/${iterator.id}`
                    localStorage.setItem('isAuthorization',true)
                    localStorage.setItem('Email',mailUser.value)
                    localStorage.setItem('Name',iterator.name)
                    isUser = true

                } else if(!isUser){
                    mailUser.className = 'form-error'
                    mailUser.placeholder = 'Такой пользователь не существует'
                    mailUser.value = ''
                    URLuser = false
                }
            }
        })
        if(URLuser){
        await fetch(URLuser,{
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
              },
              body: JSON.stringify({
                password: password.value
              }
            ),
        })
        document.getElementById('form').remove()
        checkAuthorization() 
    }

}
}