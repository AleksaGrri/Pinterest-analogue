import { existProfile } from "./existProfile";
import { printSaveCards } from "./printSaveCards";

export const itemMenu = [

    {
        name: 'Показать сохраненки',
        className: '',
        onClick: printSaveCards,
    },
    {
        name: 'Выйти',
        className: '',
        onClick: existProfile,
    },

]