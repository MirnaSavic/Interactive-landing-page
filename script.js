let displayPhoto = () => {

    let random_photos = [
        "images/adam-kool-ndN00KmbJ1c-unsplash.jpg",
        "images/federico-respini-sYffw0LNr7s-unsplash.jpg",
        "images/luca-bravo-VowIFDxogG4-unsplash.jpg",
        "images/qingbao-meng-01_igFr7hd4-unsplash.jpg",
        "images/quino-al-mBQIfKlvowM-unsplash.jpg"
    ]
    let random_choice = Math.floor(Math.random()*random_photos.length)
    document.body.style.backgroundImage = `url(${random_photos[random_choice]})`
}



let id = (id) => document.getElementById(id)

const infoDiv = id("info-container"),
msgDiv = id("msg-container"),
quoteDiv = id("quote-container"),
weatherDiv = id("weather-container")


const clock = () => {
    let time = new Date;
    let hours = time.getHours();
    let minutes = time.getMinutes();
    // console.log(`${hours}:${minutes}`)
    infoDiv.innerHTML = `${hours}:${minutes}`

    if (hours < 12) {
        msgDiv.innerHTML = `<h2>Good Morning,<h2/>`
    } else if (hours > 18) {
        msgDiv.innerHTML = `<h2>Good Evening,<h2/>`
    } else {
        msgDiv.innerHTML = `<h2>Good Afternoon,<h2/>`
    }

    if (minutes < 10){
        minutes = "0" + minutes;
    }

    
}

const fetchApi = (url) => {
    fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data.content)
        showFetch(data)

        
    })
        
    
    
}


const showFetch = (value) => {
    quoteDiv.innerHTML  = value.content
    console.log(value.content)
}

fetchApi('https://api.quotable.io/random')



const weatherApi = () => {
    fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/banjaluka/?key=5LC8HB6RYZD42E9KGDTRGB8BC")
    .then(response => response.json())
    .then(data => {
        console.log(data)
        console.log(data.adress)
        console.log(data.currentConditions.temp)
        console.log(data.currentConditions.icon)

        weatherDiv.innerHTML = `
        <div class="weather-container" id="weather-container">
            <h3>${data.address}<h3/>
            <p>${data.currentConditions.temp} F<p/>
        </div>
        `
    })
        
}


window.onload = displayPhoto(),
clock(),
fetchApi('https://api.quotable.io/random'),
weatherApi();
