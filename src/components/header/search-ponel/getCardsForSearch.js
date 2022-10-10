export function getCardsForSearch(data){
    let keywords = document.getElementById('search').value
    keywords = keywords.toLowerCase()
    keywords = keywords.split(' ');
    const resultSearch = [];
    let typeSearch = document.getElementById('typeSearch').value
    
    if(typeSearch === 'common'){
        for (const iterator of data) {
            let keyCard = iterator.tag.toLowerCase()
            keyCard = keyCard.split(' ')
            const intersection = keywords.filter(item => keyCard.includes(item))
    
            if(intersection.length){
                resultSearch.push(iterator)
            }
        }
        typeSearch = 'description'
    }

    for (const iterator of data) {
        let keyCard = iterator[typeSearch].toLowerCase()
        keyCard = keyCard.split(' ')
        const intersection = keywords.filter(item => keyCard.includes(item))

        if(intersection.length){
            resultSearch.push(iterator)
        }
    }

    if(resultSearch.length === 0)
        {
            return false
        }

    return resultSearch
}