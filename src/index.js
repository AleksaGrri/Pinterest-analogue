import { App } from "./components/app"
App()


const card = document.getElementById('card')
const btn = document.getElementById('btn-card')

card.addEventListener('mouseover', () => {
    btn.style.display = 'block'
})

card.addEventListener('mouseout', () => {
    btn.style.display = 'none'
})
