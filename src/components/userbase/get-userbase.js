function getUsersBase(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(`Login: ${array[i].name} Password: ${array[i].password}`);
    }
}

usersBase.fetchUsers().then(() => getUsersBase(usersBase.data[0].password));