import { printCards } from "../card-creator/printCards";
import { getUsers } from "../header/log-in/requestDataUsers";
import { getCards } from "../card-creator";


export function getDashboard() {
    const cardsOnDashboard = [];
    const optionName = document.getElementById('rabbit').value;

    getCards().then(data => {
        for (let index = 0; index < data.length; index++) {
            console.log(data[index].dashboardName)
            let dashName = data[index].dashboardName;

            if (dashName === optionName) {
                cardsOnDashboard.push(data[index]);
            }
        }

        printCards(cardsOnDashboard);
    })


}


