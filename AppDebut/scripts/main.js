
import tabJoursEnOrdre from '/AppDebut/scripts/Utilitaire/gestionTemps.js';

const CLEAPI = '45da2e321be60a12fc1f78e0211b4c7d';
let resultatsAPI ;

const temps = document.querySelector('.temps');
const temperature = document.querySelector('.temperature');
const localisation = document.querySelector('.localisation');
const heure = document.querySelectorAll('.heure-nom-prevision');
const tempPourH = document.querySelectorAll('.heure-prevision-valeur');
const joursSemaine = document.querySelectorAll('.jour-prevision-nom');
const temperatureSemaine = document.querySelectorAll('.jour-prevision-temp')

if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(position => {

        let long = position.coords.longitude;
        let lat = position.coords.latitude;
        AppleApi(long, lat);


    }, ()=> {
        alert(`Vous avez refusé la geolocalisation, l'application ne peut pas fonctionner .. veuillez recharger l'application et l'activer !` )
    })

}
  
function AppleApi(long,lat){
    console.log(long,lat);
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&exclude=minutely&units=metric&lang=fr&appid=${CLEAPI}`)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
        resultatsAPI = data;
         temps.innerText = resultatsAPI.current.weather[0].description;
         temperature.innerText = `${Math.trunc(resultatsAPI.current.temp)}°`
         localisation.innerText = resultatsAPI.timezone;

         //les heures par tranches de 3 , avec leurs temperatures 

         let heureActuelle = new Date().getHours();

         for(let i = 0; i < heure.length ; i++){

            let heureIncr = heureActuelle + (i * 3);
             
            if(heureIncr > 24){
                heure[i].innerText = `${heureIncr - 24} h`;
            } else if ( heureIncr === 24){
                heure[i].innerText = "00 h"
            }else{
                heure[i].innerText = `${heureIncr} h`;
            }

         }

         //Temps pour 3h 
         for(let j = 0; j < tempPourH.length; j++){
             tempPourH[j].innerText = `${Math.trunc(resultatsAPI.hourly[j * 3].temp)} °`
         }


         // Trois première lettre des jours
         for(let k = 0; k < tabJoursEnOrdre.length; k ++){
            joursSemaine[k].innerText = tabJoursEnOrdre[k+1]
        }

         // Prevision temperature Semaine 
         for(let k = 0; k < tabJoursEnOrdre.length; k ++){
             temperatureSemaine[k].innerText = `${Math.trunc(resultatsAPI.daily[k + 1] .temp.day)} °`;
         }
    })
    //fix etherum pb
}
