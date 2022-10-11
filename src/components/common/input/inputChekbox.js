export function createInputCheckbox(typeInput){
    const inputBlock = document.createElement('div')
    inputBlock.className = typeInput.className

    const input = document.createElement('input')
    input.type = 'checkbox'
    input.value = typeInput.value
    input.name = typeInput.name

    inputBlock.append(input)

    const label = document.createElement('label')
    label.for = typeInput.name
    label.innerText = typeInput.text

    inputBlock.append(label)

    return inputBlock
}