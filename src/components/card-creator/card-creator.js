/* {
  "posted": "2021-11-06T05:42:13.645Z",
  "name": "Mrs. Douglas Ward",
  "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/259.jpg",
  "image": "http://loremflickr.com/640/480/cats",
  "description": "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
  "id": "1"
 },
 */


// const cardInner = `

// <div class="cards-container-grid-card_btn">
//     <button id="btn-card">Сохранить</button>
// </div>
// <img src="./img/Card Image.png" alt="card-image">
// <div class="cards-container-grid-card_descr">
//     <div class="cards-container-grid-card_descr-title">
//         Dell computer
//     </div>
// <div class="cards-container-grid-card_descr-user">
//     <img src="./img/Ellipse 2.png" alt="user">
//     <p>Lili Reinhart</p>
// </div>
// </div>

// `


// function getCardsCont() {
//     let cardsContainerGrid = document.getElementById('card');
//     let card = document.createElement('div');
//     let cardImage = document.createElement('img');

//     cardsContainerGrid.append(card);
//     card.innerHTML = cardInner;
//     console.log(cardImage.innerHTML);
// }




const URL = `https://633c1dc174afaef16402162d.mockapi.io/pinterest-cards-generator`;



function show() {
    fetch(URL)
        .then(response => response.json())
        .then(data => getCards(data))
}


function getCards(array) {


    let cards = document.getElementById('cards-container-grid');

    for (let i = 0; i < array.length; i++) {
        let card = document.createElement('div');
        let a = Math.random() * (500 - 790) + 500;
        let cardInner = `

        <div class="cards-container-grid-card_btn">
            <button id="btn-card">Сохранить</button>
        </div>
        <div class="cards-container-grid-card_image">
         <img src="${array[i].image}" alt="card-image" height="${a}">
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


show();


/* Задачи:
1. Скруглять аватарки
2. Скргулять основные картинки
2.1. Задать им фикс ширину
2.2. ???????????
3. Сделать функцию создания датабазы, которая парсит все из мокапи
4. Можно создать несколько ссылок на мокапи (животные, транспорт, товары и тп) и привязать их к доскам


*/



