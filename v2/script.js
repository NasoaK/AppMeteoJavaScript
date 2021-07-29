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
let pm25;

if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {

        // console.log(position);
        /* long = position.coords.longitude;
        lat = position.coords.latitude; */
        lat = 49.611621;
        long = 6.1319346;
        AppelAPI(long,lat);

    }, () => {
        alert(`Vous avez refusé la géolocalisation, l'application ne peur pas fonctionner, veuillez l'activer.!`)
    })
}

//tomorrowApi

function AppelAPI(long, lat) {

    fetch(` https://api.tomorrow.io/v4/timelines?location=${lat},${long}&fields=particulateMatter25&apikey=${CLEFAPI}`)
    .then((reponse) => {
        return reponse.json();
    })
    .then((data) => {
         console.log(data);
         resultatsAPI = data;
         pm25 = resultatsAPI.data.timelines[0].intervals[0].values.particulateMatter25;
         console.log(pm25)


    })

}

// meteo concept


/* function AppelAPI(long, lat) {

    fetch(` https://api.tomorrow.io/v4/timelines?location=${lat},${long}&fields=particulateMatter25&apikey=${CLEFAPI}`)
    .then((reponse) => {
        return reponse.json();
    })
    .then((data) => {
         console.log(data);

    })

}
 */




 //!! Lien pour mieux comprendre PM10 PM50
 //https://www.nateosante.com/fr/blog/tout-savoir-sur-les-particules-fines-pm-2-5-et-pm-10/#:~:text=Lors%20des%20pics%20de%20pollution,parle%20des%20particules%20fines%20PM2.&text=5%20sont%20des%20particules%20d,diam%C3%A8tre%20inf%C3%A9rieur%20%C3%A0%2010%20microns.