import { cardsBase } from '../../card-creator/cardsBase'
import { printCards } from '../../card-creator/printCards'
import { updateContent } from '../../card-creator/updateContent'
import { getCardsForSearch } from './getCardsForSearch'
import { errorSearch } from './notFindSearch'



export function getResultSearch(){
    const search = document.getElementById('search')
    search.addEventListener('keydown', function(event) {
        if(event.code === 'Enter'){
            updateContent()
            cardsBase.fetchCards().then(() => {
                if(getCardsForSearch(cardsBase.data)){
                printCards(getCardsForSearch(cardsBase.data))
                } else { 
                    errorSearch()
                }
        })
        }
    })
} 