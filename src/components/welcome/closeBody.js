export function hidden(){
    const header = document.getElementsByTagName('header')
    const main = document.getElementsByTagName('main')

    if(header[0].style.display === 'none'){
        header[0].style.display = 'block'
        main[0].style.display = 'block'
    } else {
        header[0].style.display = 'none'
        main[0].style.display = 'none'
    }
    
}