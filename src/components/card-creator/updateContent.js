export function updateContent(){
    const content = document.getElementById('cards-container-grid');
    while(content.firstChild){
        content.removeChild(content.firstChild)
    }
}