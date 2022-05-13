//API van mapbox

//Eigen stijl van mapbox toevoegen
mapboxgl.accessToken = 'pk.eyJ1IjoibGVudmVyYmlqIiwiYSI6ImNsMzF1cXJjdTEwcmIzcHBzenNyYXNzdGIifQ._-3ojU3l3ETWUd483Ut2zA';
const map = new mapboxgl.Map({
container: 'kaart', 
style: 'mapbox://styles/lenverbij/ckc0cgb1e0apb1imn2grrpuvr', 
center: [4.590,  52.170],
pitch: 20,
zoom: 14.02,
bearing: -5,
});

//aanroepen van het plaatjes op de map
const geojson = {
'type': 'FeatureCollection',
'features': [
{
'type': 'Feature',
'properties': {
'iconSize': [80, 80]
},
'plaats': {
'coordinaten': [4.590,  52.170]
}
},
]
};

// Plaatje  in het betand voegen
for (const marker of geojson.features) {
const musk = document.createElement('div');
	musk.className = 'elon';
	musk.style.backgroundImage = `url(https://img.etimg.com/thumb/msid-80743543,width-650,imgsize-1547348,,resizemode-4,quality-100/elon-musk.jpg)`;
	musk.style.backgroundSize = '133%';
	musk.style.height = `${80}px`;
	musk.style.width = `${80}px`;
	
// Hiermee voeg je het plaatje op de map toe.
new mapboxgl.Marker(musk)
.setLngLat(marker.plaats.coordinaten)
.addTo(map);
}




//API voor het weer

//Var voor de temp
var temp = document.querySelector('.temperatuur');

//Var voor de plaats
var main = document.querySelector('.plaats');

//Var voor de input van het veld
var input = document.querySelector('.input');

//Var voor de knop
var button = document.querySelector('.submit');

//Bij een klik worden de gegevens gegenereerd.
button.addEventListener('click', function(name){
	
//Api activeren
fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=92095eaeb6ad8f1da7e46bd1db7c2aa0')

//Promise aangeven
.then(response => response.json())
.then(data => {

//Aanroepen van de gegevens
var tempValue = data['main']['temp']-['273']+['C°'];
var nameValue = data['name'];

temp.innerHTML ="Temperatuur - "+ tempValue;
main.innerHTML = nameValue;
})
//Bij foute plaatsnaam wordt deze melding getoond.
.catch(err => alert("Dit is geen plaatsnaam"));
})



//Bronnen https://docs.mapbox.com/mapbox-gl-js/example/custom-marker-icons/