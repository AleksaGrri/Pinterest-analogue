import { createButton } from "../common/button/button";
import { createFormComplaint } from "./complaint";
import { saveCards } from "./saveCards";

export function printCards(array) {
    const cards = document.getElementById('cards-container-grid');

    for (let i = 0; i < array.length; i++) {
        const card = document.createElement('div');
        const cardHeight = Math.random() * (500 - 790) + 500;

        const btnSaveBlock = document.createElement('div')
        btnSaveBlock.className = 'cards-container-grid-card_btn'

        const btnSave = document.createElement('button')
        btnSave.innerText = 'Сохранить'
        btnSave.style.display = 'none'

        btnSave.addEventListener('click', () => saveCards(array[i]))

        card.addEventListener('mouseover', () => {
            btnSave.style.display = 'block'
            btnCompaint.style.display = 'flex'
        })

        card.addEventListener('mouseout', () => {
            btnSave.style.display = 'none'
            btnCompaint.style.display = 'none'
        })

        btnSaveBlock.append(btnSave)

        const btnCompaint = document.createElement('div')
        btnCompaint.className = 'cards-container-grid-card_complain'

        const imageBtnComplaint = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
        <path d="M14 12a2 2 0 11-2-2 2 2 0 012 2zM4 10a2 2 0 102 2 2 2 0 00-2-2zm16 0a2 2 0 102 2 2 2 0 00-2-2z"></path>
    </svg>`

        btnCompaint.innerHTML = imageBtnComplaint
        btnCompaint.addEventListener('click', () => card.append(createFormComplaint()))

        const cardInner = ` <div class="cards-container-grid-card_image">
         <img src="${array[i].image}" alt="card-image" height="${cardHeight}">
        </div>
        <div class="cards-container-grid-card_descr">
            <div class="cards-container-grid-card_descr-title">
                ${array[i].description};
            </div>
        <div class="cards-container-grid-card_descr-user">
            <img src=${array[i].avatar} alt="user" width="40px" class="round">
            <p>${array[i].name}</p>
        </div>
        </div>
            `;

        card.innerHTML = cardInner;
        card.append(btnSaveBlock)
        card.append(btnCompaint)
        card.classList.add("cards-container-grid-card");
        cards.append(card);
    }

}


