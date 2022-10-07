import { createButton } from "../button/button";
import { createInput } from "../input/index";


export function createForm(typeForm){
    const root = document.createElement('form');

    const elementTitle = document.createElement('div');
    elementTitle.innerText = typeForm.title;
    root.append(elementTitle);

    const elementSubTitle = document.createElement('div');
    elementSubTitle.innerText = typeForm.subTitle;
    root.append(elementSubTitle);
    
    for (const item of typeForm.inputs) {
        root.append(createInput(item))
    }

    if(typeForm.name === 'logInForm'){
        const rememerPassword = document.createElement('div')
        rememerPassword.innerHTML = 'Забыли пароль'
        root.append(rememerPassword)
    }
    
    root.append(createButton({label: typeForm.button, className: '', onClick: ''}))
    root.append(createButton({label: 'Войти при помощии Google', className: '', onClick: ''}))
    return root
}