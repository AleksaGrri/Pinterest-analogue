import { existProfile } from "./existProfile";
import { printSaveCards } from "./printSaveCards";

export const itemMenu = [
    {
        name: 'Выйти',
        className: '',
        onClick: existProfile,
    },
    {
        name: 'Показать сохраненки',
        className: '',
        onClick: printSaveCards,
    }

]