import { createForm } from "../../common/form";
import { remeberPassword } from "./typeForm";


export function getFormRemeberPassword(){
    const form = document.getElementById('form')
    form.remove()
    document.body.append(createForm(remeberPassword))
}