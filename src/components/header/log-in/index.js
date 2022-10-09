import { logInForm, registrationForm } from "./typeForm";
import { createForm } from "../../common/form/form";
import {URL, getUsers} from './requestDataUsers'
import { checkAuthorization } from "./itemProfile";
import { closeForm } from "./closedFormClick";


export function formLogIn(){
    checkAuthorization()
    
}