 export const URL = 'https://633c1dc174afaef16402162d.mockapi.io/pinterest-user-base'

export function getUsers(){
       return fetch(URL)
        .then(responsiv => responsiv.json())
        .catch(error => console.log(error))     
}