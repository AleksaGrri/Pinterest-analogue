
const method = '/sendMessage?'
const chatId = 'chat_id=-618250393'
const token = '5724492788:AAHr6_Pg-7zGGX4I32zD2lhmFxZbHdemDgU'
const review = ' Серьезно, еще маме пожалуйся'

export function sendComplain(){
    const complain = document.getElementById('text-complain').value
    const message = 'https://api.telegram.org/bot' + token + method + chatId +'&text=' + `"${complain}"` + review
    let xhttp = new XMLHttpRequest()
    xhttp.open('GET', message, true)
    xhttp.send()
  
}