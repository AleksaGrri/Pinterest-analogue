import { getCards } from "./card-creator";
import { formLogIn } from "./header/log-in";
import { getCardsForSearch, getResultSearch } from "./header/search-ponel";
import { getDashboard } from "./dashboard";
import { getUsersBase } from "./userbase";
import { profile } from "./header/profile.js";
import { welcome } from "./welcome";


export function App() {
    // welcome()
    formLogIn()
    getResultSearch()
    getCards()
    getDashboard()
    getUsersBase()
    profile()
    
}