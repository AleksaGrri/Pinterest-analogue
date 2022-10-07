export function createButton ({ label, className, onClick }){
    const root = document.createElement('button');
    root.type = 'button';
    root.className = className;
    root.innerText = label;

    if(typeof onClick === 'function'){
        root.addEventListener('click', onClick);
    }
    return root
}