import { getUsersBase } from "./get-userbase";

const usersURL = `https://633c1dc174afaef16402162d.mockapi.io/pinterest-user-base`;

class UsersBase {
    // методы:
    constructor(data) {
        this.data = data || [];
    }

    async fetchUsers() {
        const response = await fetch(usersURL);
        const data = await response.json();
        this.data = data;
    }

}

const usersBase = new UsersBase();
usersBase.fetchUsers().then(() => getUsersBase(usersBase.data));
usersBase.fetchUsers().then(() => console.log(usersBase.data[0].name));











// база карточек через класс  .this card - загрузились 
// ф-ция upload base 
// в класс дописать метод getCardsPage - индекс страницы, которая будет загружаться индекс 1 - выводд 1-20 карт
// счет страниц по нажатию кнопки "загрузка страницы"