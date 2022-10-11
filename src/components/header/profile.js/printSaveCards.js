import { printCards } from "../../card-creator/printCards"
import { updateContent } from "../../card-creator/updateContent"
import { errorSearch } from "../search-ponel/notFindSearch"

export function printSaveCards(){
    if(localStorage.getItem('saveCards')){
        const saveCards = JSON.parse(localStorage.getItem('saveCards'))
        updateContent()
        printCards(saveCards)

    } else {
        updateContent()
        errorSearch()
    }
}