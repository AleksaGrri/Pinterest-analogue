import { getUsers } from "./requestDataUsers";

export async function getAvatarUser() {
    const image = await getUsers().then(data => {
        const mail = localStorage.getItem('Email')
        for (const iterator of data) {
            if (iterator.email === mail) {
                return iterator.avatar
            }
        }
    })
    document.getElementById('user-photo').src = image
}