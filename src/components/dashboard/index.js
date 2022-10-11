import { cardsBase } from "../card-creator/cardsBase";
import { printCards } from "../card-creator/printCards";
import { updateContent } from "../card-creator/updateContent";
export { getDashboard } from "./getdashboard";

export async function boards(){
document.getElementById('boards').addEventListener('click',async()=>{
    
    console.log(document.getElementById('boards').value)

    let keywords = document.getElementById('boards').value
    const resultBeards = [];

     cardsBase.fetchCards().then(await function (data){
        for (const iterator of data) {
            let keyCard = iterator.dashboardName.toLowerCase()
            keyCard = keyCard.split(' ')
            const intersection = keywords.filter(item => keyCard.includes(item))

            if(intersection.length){
                resultSearch.push(iterator)
            }
    }
})

    updateContent()
    printCards(resultBeards)
})
}