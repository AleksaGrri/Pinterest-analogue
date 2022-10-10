import {printCards} from './printCards'

const URL = `https://633c1dc174afaef16402162d.mockapi.io/pinterest-cards-generator`;
class CardsBase {
    // методы:
    constructor(data) {
        this.data = data || [];
    }

    async fetchCards() {
        const response = await fetch(URL);
        const data = await response.json();
        this.data = data;
    }

    // отсчет индекса для подбора страницы
    getCardsPage() {

    }

}

export const cardsBase = new CardsBase();
cardsBase.fetchCards().then(() => printCards(cardsBase.data));
cardsBase.fetchCards().then(() => console.log(cardsBase.data));











// база карточек через класс  .this card - загрузились 
// ф-ция upload base 
// в класс дописать метод getCardsPage - индекс страницы, которая будет загружаться индекс 1 - выводд 1-20 карт
// счет страниц по нажатию кнопки "загрузка страницы"