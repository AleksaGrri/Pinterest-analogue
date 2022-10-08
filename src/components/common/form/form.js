import { createButton } from "../button/button";
import { createInput } from "../input/index";

export function createForm(typeForm) {
    const root = document.createElement('form');
    root.id = 'form'
    const elementTitle = document.createElement('div');
    elementTitle.innerText = typeForm.title;
    root.append(elementTitle);
    elementTitle.className = 'form-title';

    const elementSubTitle = document.createElement('div');
    elementSubTitle.innerText = typeForm.subTitle;
    root.append(elementSubTitle);
    elementSubTitle.className = 'form-subTitle';

    for (const item of typeForm.inputs) {
        root.append(createInput(item))
    }

    if (typeForm.name === 'logInForm') {
        const rememberPassword = document.createElement('div')
        rememberPassword.innerHTML = 'Забыли пароль?'
        root.append(rememberPassword)
        rememberPassword.className = 'form-rememberPassword'
    }

    root.append(createButton({ label: typeForm.button.name, className: typeForm.button.className, onClick: typeForm.button.onClick }))

    const subPanel = document.createElement('div')

    const labelSubPanel = document.createElement('span')
    subPanel.append(labelSubPanel)
    labelSubPanel.innerText = typeForm.subPanel.textSubPanel
    labelSubPanel.className = 'form-label-subPanel'

    const linkSubPanel = document.createElement('span')
    subPanel.append(linkSubPanel)
    linkSubPanel.innerText = typeForm.subPanel.textSubLink
    linkSubPanel.addEventListener('click', typeForm.subPanel.onClickSubLink)
    linkSubPanel.className = 'form-link-subPanel'

    root.append(subPanel)
    return root
}