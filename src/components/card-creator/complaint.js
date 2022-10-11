import { createButton } from "../common/button/button"
import { createInputCheckbox } from "../common/input/inputChekbox"
import { sendComplain } from "./sendComplain"
import { typeInputCheckbox } from "./typeInputCheckbox"

export function createFormComplaint() {
    if (!document.getElementById('formComplaint')) {
        const form = document.createElement('div')
        form.className = 'cards-container-grid-card_complain-choice'
        form.id = 'formComplaint'

        const title = document.createElement('div')
        title.className = 'cards-container-grid-card_complain-choice_title'
        title.innerText = 'На что опять?'
        form.append(title)
        const close = document.createElement('div')
        close.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" data-supported-dps="16x16" fill="currentColor" class="mercado-match" width="16" height="16" focusable="false">
            <path d="M14 3.41L9.41 8 14 12.59 12.59 14 8 9.41 3.41 14 2 12.59 6.59 8 2 3.41 3.41 2 8 6.59 12.59 2z"></path>
        </svg>`
        title.append(close)

        close.addEventListener('click', () => {

            form.remove()
        })



        for (const iterator of typeInputCheckbox) {
            form.append(createInputCheckbox(iterator))
        }

        const blockTextarea = document.createElement('div')
        blockTextarea.className = 'cards-container-grid-card_complain-choice_textaria'

        const textarea = document.createElement('textarea')
        textarea.name = 'complain'
        textarea.id = 'text-complain'
        textarea.cols = '30'
        textarea.rows = '10'
        textarea.placeholder = 'Ну давай, пожалйся мне тут...'

        blockTextarea.append(textarea)
        form.append(blockTextarea)

        form.append(createButton({ label: 'Отправить', className: 'cards-container-grid-card_complain-choice_btn', onClick: sendComplain }))

        return form
    } else {
        return ''
    }
}
