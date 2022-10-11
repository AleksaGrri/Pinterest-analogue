import { printCards } from "../card-creator/printCards";
import { getCards } from "../card-creator";


export function getDashboard() {
    const cardsOnDashboard = [];
    const optionName = document.getElementById('rabbit').value;

    getCards().then(data => {
        for (let index = 0; index < data.length; index++) {
            
            let dashName = data[index].dashboardName;

            if (dashName === optionName) {
                cardsOnDashboard.push(data[index]);
            }
        }
    })
return cardsOnDashboard

}


