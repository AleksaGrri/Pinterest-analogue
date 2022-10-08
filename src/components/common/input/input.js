export function createInput ({type, value, placeholder, id}){
    const root = document.createElement('input');

    root.type = type;
    root.id = id;
    root.value = value;
    root.placeholder = placeholder;

    return root
}