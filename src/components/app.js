import { getCards } from "./card-creator";
import { formLogIn } from "./header/log-in";
import { getCardsForSearch } from "./header/search-ponel";


export function App(){
    formLogIn()
    getCardsForSearch()
    getCards()
}