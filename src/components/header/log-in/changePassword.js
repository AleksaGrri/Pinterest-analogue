import { checkChangePasswordForm } from "./checkChangePasswordForm";
import { getUsers, URL } from "./requestDataUsers";

export function changePassword(){
    if(checkChangePasswordForm()){
        const mailUser = document.getElementById('mailUser')
        const password = document.getElementById('password')

        getUsers().then(data =>{
            for (const iterator of data) {
                if(iterator.email === mailUser.value){
                    fetch(URL,{
                        method: 'PATCH',
                        headers: {
                            'Content-Type': 'application/json;charset=utf-8'
                          },
                        body: JSON.stringify({
                            'password': password.value,
                        }
                        ),
                    })
                }
            }
        })

}
}