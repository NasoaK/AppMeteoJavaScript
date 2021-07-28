// ToDO Meteo Concept API
//const CLEFAPI = '25a4250c6b0563f64607a3975fd245bd2dc3582488c9333dd77f8fad7a157657';
//TODO tomorrow API
const CLEFAPI = 'pglHSI5hNVJOeONpAFVhUdhjwZEuYyM0'
let resultatsAPI;


const localisation = document.querySelector('#city-name');
const temperature = document.querySelector('#temperature-actuel');
const imgIcone = document.querySelector('#logo-meteo');
const temps = document.querySelector('#etat-ciel');

// Need to do
const actual_wind = document.querySelector('#actual-wind.info');
const actual_humidity = document.querySelector('#actual-humidity .info');
const actual_rain = document.querySelector('#actual-rain.info');
let long=0 ;
let lat =0;

if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {

        // console.log(position);
        long = position.coords.longitude;
        lat = position.coords.latitude;
        AppelAPI(long,lat);

    }, () => {
        alert(`Vous avez refusé la géolocalisation, l'application ne peur pas fonctionner, veuillez l'activer.!`)
    })
}

function AppelAPI(long, lat) {

    fetch(` https://api.tomorrow.io/v4/timelines?location=${lat},${long}&fields=particulateMatter25&apikey=${CLEFAPI}`)
    .then((reponse) => {
        return reponse.json();
    })
    .then((data) => {
         console.log(data);

    })

}