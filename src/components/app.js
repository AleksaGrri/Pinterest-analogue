import { getCards } from "./card-creator";
import { formLogIn } from "./header/log-in";
import { getCardsForSearch, getResultSearch } from "./header/search-ponel";


export function App(){
    formLogIn()
   getResultSearch()
    getCards()

}