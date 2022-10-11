import { createButton } from "../common/button/button"
import { createInputCheckbox } from "../common/input/inputChekbox"
import { sendComplain } from "./sendComplain"
import { typeInputCheckbox } from "./typeInputCheckbox"

export function createFormComplaint(){
    if(!document.getElementById('formComplaint')){
    const form = document.createElement('div')
    form.className = 'cards-container-grid-card_complain-choice'
    form.id = 'formComplaint'

    const title = document.createElement('div')
    title.className = 'cards-container-grid-card_complain-choice_title'
    title.innerText = 'На что опять?'
    form.append(title)

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

    form.append(createButton ({ label: 'Отправить', className: 'cards-container-grid-card_complain-choice_btn', onClick: sendComplain }))   

    return form
} else {
    return ''
}
}
