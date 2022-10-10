export const URL = `https://633c1dc174afaef16402162d.mockapi.io/pinterest-cards-generator`

export async function getCards() {
    const result = await fetch(URL)
    return result.json()
}