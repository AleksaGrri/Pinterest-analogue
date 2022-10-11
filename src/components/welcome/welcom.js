import{hidden} from './closeBody'
export function show(){

    function deleteAll(){
    const main = document.getElementById('main')
    while(main.firstChild){
        main.removeChild(main.firstChild)
    }
    }


 function firstSlude(){
    setTimeout(()=>{
    const title = document.createElement('div')
    title.innerText = 'JavaSmokers company представляет'
    title.className = 'welcom-title'
    main.append(title)
    },2000)
   setTimeout(()=>{
        const subTitle = document.createElement('div')
        subTitle.innerText = 'Чему мы научились за 2 месяца'
        main.append(subTitle)
    }, 4000)

    setTimeout(() => {
        const mentor = document.createElement('div')
        const image = document.createElement('div')
        const imagePicture = document.createElement('img')
        imagePicture.src = "https://drive.google.com/uc?export=view&id=1Bs03amtEERn_Q_Wjsm7Go6X9vIoEwrVr"
        image.append(imagePicture)
        mentor.append(image)
        setTimeout(()=>{
            const text = document.createElement('div')
            text.innerText = '<---- Вот этот парень нас учил'
            mentor.append(text)
            main.append(mentor)},1000)
    },6000)
    setTimeout(() => {
deleteAll()
    },12000)
 }
 

function secondSlide(){

    const quote = 'Код может быть и некрасив, но он работает, как задумал автор, а если думаешь, что код не работает, то с чего ты взял, что так не задумал автор?'
    const quoteDiv = document.createElement('div')
    setTimeout(()=>{
    main.append(quoteDiv)
    const konf = document.createElement('div')
    const image = document.createElement('div')
    const imagePicture = document.createElement('img')
    imagePicture.src = "https://drive.google.com/uc?export=view&id=1Ek8ygJP1S8o85dy_CO6Mm8WdEHESEs12"
    image.append(imagePicture)
    konf.append(image)
    main.append(konf)


    let text = []
    let i = 0
        setTimeout(()=>{
     let quoteRender = setInterval(() =>{
            if(i == quote.length - 1){
                clearTimeout(quoteRender)
            }
            text.push(quote[i])
            quoteDiv.innerText = `${text.join('')}`
            i++
        }, 50)},1000)
        setTimeout(() =>{
            const author = document.createElement('div')
            author.innerText = '(c) Автор'
            quoteDiv.append(author)
        }, 9000)
        
}, 1000)
        
}


deleteAll()
setTimeout(()=>firstSlude())
setTimeout(()=>secondSlide(),14000)
setTimeout(()=>{
    const main = document.getElementById('main')
    hidden()
    main.remove()
},30000)
}

