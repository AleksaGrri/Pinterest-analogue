export function saveCards(card){
    let saveCards;
    if(!localStorage.getItem('saveCards')){
        saveCards = []
    } else {
        saveCards = JSON.parse(localStorage.getItem('saveCards'))
    }
    saveCards.push(card)
    const arrayForLacal = JSON.stringify(saveCards)
    localStorage.setItem('saveCards', arrayForLacal)
}