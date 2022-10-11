export  function show(){
    const main = document.getElementById('main')
    while(main.firstChild){
        main.removeChild(main.firstChild)
    }

    const title = document.createElement('div')
    title.innerText = 'JavaSmokers company представляет'
    title.className = 'welcom-title'
    main.append(title)

   setTimeout(()=>{
        const subTitle = document.createElement('div')
        subTitle.innerText = 'Чему мы научились за 2 месяца'
        main.append(subTitle)
    }, 2000)

    setTimeout(() => {
        const mentor = document.createElement('div')
        const image = document.createElement('div')
        const imagePicture = document.createElement('img')
        imagePicture.src = "./components/welcome/mentor.jpg"
        image.append(imagePicture)
        mentor.append(image)
        const text = document.createElement('div')
        text.innerText = '<---- Вот этот парень нас учил'
        mentor.append(text)
        main.append(mentor)
    },4000)

    setTimeout(() =>{
        while(main.firstChild){
            main.removeChild(main.firstChild)
        }
    }, 1000000)
    const quote = 'Код может быть и некрасив, но он работает, как задумал автор, а если думаешь, что код не работает, то с чего ты взял, что так не задумал автор?'
    const quoteDiv = document.createElement('div')
    console.log(quote.length)

setTimeout(()=>{
    main.append(quoteDiv)
    let text = []
    let i = 0

     let quoteRender = setInterval(() =>{
            console.log(i)
            if(i == quote.length - 1){
                clearTimeout(quoteRender)
            }
            text.push(quote[i])
            quoteDiv.innerText = `${text.join('')}`
            i++
        }, 50)
}, 7000)
        





}

