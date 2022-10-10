export function errorSearch(){
    const content = document.getElementById('cards-container-grid');

    const error = document.createElement('div')
    error.innerText = 'Ничего не найдено'
    error.className = 'error-search'

    content.append(error)
}