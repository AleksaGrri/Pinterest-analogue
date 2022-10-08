import {CardsBase, URL} from '../../card-creator/cardsBase'

export function getCardsForSearch(){
    const cardsBaseForSeacrh = CardsBase;
    cardsBaseForSeacrh.fetchCards().then(() => console.log(cardsBaseForSeacrh.data[0].name));
    
}