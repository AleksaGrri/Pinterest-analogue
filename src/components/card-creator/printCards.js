export function printCards(array) {
    const cards = document.getElementById('cards-container-grid');

    for (let i = 0; i < array.length; i++) {
        const card = document.createElement('div');
        const cardHeight = Math.random() * (500 - 790) + 500;
        const cardInner = `
        <div class="cards-container-grid-card_btn">
            <button id="btn-card">Сохранить</button>
        </div>
        <div class="cards-container-grid-card_complain">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" class="mercado-match" width="24" height="24" focusable="false">
                <path d="M14 12a2 2 0 11-2-2 2 2 0 012 2zM4 10a2 2 0 102 2 2 2 0 00-2-2zm16 0a2 2 0 102 2 2 2 0 00-2-2z"></path>
            </svg>
        </div>
        <div class="cards-container-grid-card_image">
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

        const btn = document.getElementById('btn-card')

        card.addEventListener('mouseover', () => {
            btn.style.display = 'block'
        })

        card.addEventListener('mouseout', () => {
            btn.style.display = 'none'
        })

        card.innerHTML = cardInner;
        card.classList.add("cards-container-grid-card");
        cards.append(card);
    }
}


