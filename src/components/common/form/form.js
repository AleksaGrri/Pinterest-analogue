import { getFormRemeberPassword } from "../../header/log-in/rememberPassword";
import { createButton } from "../button/button";
import { createInput } from "../input/index";

export function createForm(typeForm) {
    const root = document.createElement('form');
    root.id = 'form'
    const elementTitle = document.createElement('div');
    elementTitle.innerText = typeForm.title;
    root.append(elementTitle);
    elementTitle.className = 'form-title';

    const close = document.createElement('div')
    close.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" class="mercado-match" width="16" height="16" focusable="false">
        <path d="M14 3.41L9.41 8 14 12.59 12.59 14 8 9.41 3.41 14 2 12.59 6.59 8 2 3.41 3.41 2 8 6.59 12.59 2z"></path>
    </svg>`
    elementTitle.append(close)

    close.addEventListener('click', () => {

        form.remove()
    })

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
        rememberPassword.addEventListener('click', () => getFormRemeberPassword())
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
    if (typeof typeForm.subPanel.onClickSubLink === 'function') {
        linkSubPanel.addEventListener('click', typeForm.subPanel.onClickSubLink)
    }
    linkSubPanel.className = 'form-link-subPanel'

    root.append(subPanel)
    return root
}