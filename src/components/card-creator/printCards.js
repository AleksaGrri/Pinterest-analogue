function printCards(array) {
    const cards = document.getElementById('cards-container-grid');

    for (let i = 0; i < array.length; i++) {
        const card = document.createElement('div');
        const cardHeight = Math.random() * (500 - 790) + 500;
        const cardInner = `
        <div class="cards-container-grid-card_btn">
            <button id="btn-card">Сохранить</button>
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

        cards.append(card);
        card.innerHTML = cardInner;
        card.classList.add("cards-container-grid-card");
    }
}


