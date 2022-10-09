export function closeForm(){
    document.addEventListener('click', (click) => {
        const form = document.getElementById('form')
        if(form !== null){
        const clickPath = click.composedPath().includes(form)
                if(!clickPath){
                    console.log('Удаление')
                }
        }
        })
    }


