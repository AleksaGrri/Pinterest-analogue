import { logInForm, registrationForm } from "./typeForm";
import { createForm } from "../../common/form/form";
import {URL, getUsers} from './requestDataUsers'


export function formLogIn(){
    document.body.append(createForm(registrationForm))
    getUsers().then(data => console.log(data))
}