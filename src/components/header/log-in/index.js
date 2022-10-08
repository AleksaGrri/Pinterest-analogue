import { logInForm, registrationForm } from "./typeForm";
import { createForm } from "../../common/form/form";

export function formLogIn(){
    document.body.append(createForm(registrationForm))
}