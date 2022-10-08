function getDashboard(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(`Dashboard: ${array[i].dashboard} `);
    }
}

usersBase.fetchUsers().then(() => getDashboard(usersBase.data));