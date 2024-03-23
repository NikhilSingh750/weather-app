let country = document.getElementById('search-text');
let newdate, minute, hour, seconds, day, date
let ampm = document.getElementById('ampm');;
let greeting = document.querySelector('.greeting');
let time = document.getElementById('time');
let days_array = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']
let currentdate = document.getElementById('currentdate');
let currentday = document.getElementById('currentday');

setInterval(() => {
    newdate = new Date()
    minute = newdate.getMinutes()
    hour = newdate.getHours()
    seconds = newdate.getSeconds()
    day = newdate.getDay()
    date = newdate.getDate()
    time.innerHTML = `${hour - 12}.${minute}`
    currentdate.innerHTML = date
    if (hour < 12) {
        greeting.innerHTML = 'Good Morning'
        ampm.innerHTML = 'am'

    }
    if (hour > 12) {
        greeting.innerHTML = 'Good Evening'
        ampm.innerHTML = 'pm'
    }
    currentday.innerHTML = days_array[day]

}, 60000);

let search = document.getElementById('search-icon');


search.addEventListener('click', () => {
    let searchtext = document.getElementById('search-text').value;

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${searchtext}&units=metric`
    let key = 'a980c6e9a2845ee7a5f5276c8fabd789'
    let response = fetch(url + `&appid=${key}`)
    response.then((value) => {
        return value.json()
    }).then((value) => {

        if (searchtext != '') {
            console.log(value)

            document.querySelector('.temprature').innerHTML = parseInt(value.main.feels_like) + '°C'
            sunrise = value.sys.sunrise
            sunset = value.sys.sunset;
            document.querySelector('.climate').innerHTML = value.weather[0].main
            document.querySelector('.humidity-meter').innerHTML = value.main.humidity + '%'
            document.querySelector('.air-quality-meter').innerHTML = value.wind.speed + 'm/s'
            document.getElementById('cityname').innerHTML = value.name
        }


    })




})
