export function createInput ({type, value, placeholder, name}){
    const root = document.createElement('input');

    root.type = type;
    root.name = name;
    root.value = value;
    root.placeholder = placeholder;

    return root
}