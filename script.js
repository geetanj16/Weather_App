const apiKey = "7148702dd9f58cb8cda9b48610d1f834";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=bangalore";

async function checjWeatehr(){
    const response = await fetch(apiUrl + `&appid=${apiKey}`);
    var data = await response.json();
}