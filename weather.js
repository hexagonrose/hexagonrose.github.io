const COORDS='coords',
API_KEY='efafe8aae5b4ac5005be15025c802277',
weather=document.querySelector('.weather');

function getWeather(lat,lng){
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`)
    .then(function(response){
        return response.json();
    }).then(function(json) {
        const temperature = json.main.temp;
        const place=json.name;
        weather.innerHTML=`${temperature}`+'&#8451;'+` @ ${place}`
    });
}

function saveCoords(obj){
    localStorage.setItem(COORDS, JSON.stringify(obj));
}

function handleGeoSuccess(position){
    const latitude=position.coords.latitude;
    const longitude=position.coords.longitude;
    const obj={
        latitude,
        longitude
    };
    saveCoords(obj);
    getWeather(latitude,longitude);
}

function handleGeoError(){
    console.log('cant access');
}

function askForCoords(){
    navigator.geolocation.getCurrentPosition(handleGeoSuccess,handleGeoError);
}

function loadCoords(){
    const loadedCoords=localStorage.getItem(COORDS);
    if (loadedCoords===null){
        askForCoords();
    } else {
        const parseCoords=JSON.parse(loadedCoords);
        getWeather(parseCoords.latitude,parseCoords.longitude);
    }
}

function init(){
    loadCoords();
}
init();