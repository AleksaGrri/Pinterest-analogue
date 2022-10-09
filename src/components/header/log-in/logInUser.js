
import { checkLogInUser } from "./checkLigInForm";
import { checkAuthorization } from "./itemProfile";
import { getUsers } from "./requestDataUsers";

export function logInUser(){
getUsers().then(data => {
    if(checkLogInUser(data)){
        localStorage.setItem('isAuthorization', true) 
        document.getElementById('form').remove()
        checkAuthorization()
    }
})
}