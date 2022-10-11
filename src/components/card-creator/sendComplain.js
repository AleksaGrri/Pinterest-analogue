const url = 'https://api.telegram.org/bot5724492788:AAHr6_Pg-7zGGX4I32zD2lhmFxZbHdemDgU/sendMessage?chat_id=-618250393&text='

export function sendComplain(){
    const complain = document.getElementById('text-complain').value
    const message = url + `"${complain}\n"` + ' Серьезно? иди маме пожалуйся еще'
    alert(message)
    let xhttp = new XMLHttpRequest()
    xhttp.open('GET', message, true)
    xhttp.send()

}