import { getCards } from "./card-creator";
import { formLogIn } from "./header/log-in";
import { getCardsForSearch, getResultSearch } from "./header/search-ponel";
import { getDashboard } from "./dashboard";
import { getUsersBase } from "./userbase";


export function App() {
    formLogIn()
    getResultSearch()
    getCards()
    getDashboard()
    getUsersBase()

}