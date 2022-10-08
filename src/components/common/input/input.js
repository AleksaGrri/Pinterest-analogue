export function createInput({ type, value, placeholder, id, className }) {
    const root = document.createElement('input');

    root.type = type;
    root.id = id;
    root.value = value;
    root.placeholder = placeholder;
    root.className = className;

    return root
}