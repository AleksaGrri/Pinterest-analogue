import { getCards } from "./card-creator";
import { cardsBase } from "./card-creator/cardsBase";
import { boards } from "./dashboard/index";
import { formLogIn } from "./header/log-in";
import { profile } from "./header/profile.js";
import { getResultSearch } from "./header/search-ponel";
import { welcome } from "./welcome";


export function App() {
    welcome()
    formLogIn()
    getCards()
    cardsBase
    profile()
    // boards()
    getResultSearch()
}