import { cardsBase } from '../../card-creator/cardsBase'
import { printCards } from '../../card-creator/printCards'
import { updateContent } from '../../card-creator/updateContent'
import { getCardsForSearch } from './getCardsForSearch'
import { errorSearch } from './notFindSearch'



export async function getResultSearch(){
    const search = document.getElementById('search')
    search.addEventListener('keydown', function(event) {
        if(event.code === 'Enter'){
            updateContent()
            if(search.value){
            cardsBase.fetchCards().then(async() => {
                const array = await getCardsForSearch(cardsBase.data)
                if(array.length){
                printCards(array)
                } else { 
                    errorSearch()
                }
        })
        } else { 
            cardsBase.fetchCards().then(() => printCards(cardsBase.data));
        }
    } 
    })
} 