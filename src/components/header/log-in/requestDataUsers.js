export const URL = 'https://633c1dc174afaef16402162d.mockapi.io/pinterest-user-base'

export async function getUsers(){
       const result = await fetch(URL)
       return result.json() 
}