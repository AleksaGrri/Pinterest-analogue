import { createForm } from "../../common/form/index";
import { getAvatarUser } from "./getAvatarUser";
import { logInForm } from "./typeForm";

export function checkAuthorization(){
    const button = document.getElementById('authorization')
    const profile = document.getElementById('user-account')
    const dashboards = document.getElementById('dashboards')

    if(localStorage.getItem('isAuthorization') === 'true'){
        button.style.display = 'none'
        profile.style.display = 'block'
        dashboards.style.display = 'block'
        getAvatarUser()
    } else {
       profile.style.display = 'none'
       dashboards.style.display = 'none'
       button.style.display = 'block'

       button.addEventListener('click', () => {
        document.body.append(createForm(logInForm))
        
    })
}
}