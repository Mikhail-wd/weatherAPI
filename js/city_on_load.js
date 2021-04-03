if (localStorage.getItem("citys_on_exit")){

	var citysList = localStorage.getItem("citys_on_exit");
	var indexOfCitys = citysList.split(",");

} else {

	localStorage.setItem("citys_on_exit","");
	var citysList = localStorage.getItem("citys_on_exit");
	var indexOfCitys = citysList.split(",");

	function firstLoad(){
		newData();
		plates();
	};
};

var citysList = localStorage.getItem("citys_on_exit");
var indexOfCitys = citysList.split(",");

function firstLoad(){
	newData();
	plates();
};

function newData(city="") {
	var newCity = new XMLHttpRequest();
	newCity.open ("GET", "https://api.openweathermap.org/data/2.5/weather?q="+city+"&units=metric&appid=45dfa3308548a42f21500c760482c10e", false);
	newCity.send (null);

	if(newCity.status==404 || newCity.status==400 ){
		document.getElementsByClassName("feed")[0].style.display="none";
		document.getElementsByClassName("feed")[1].style.display="none";
		document.getElementsByClassName("feed")[2].style.display="none";
		document.getElementsByClassName("feed")[3].style.display="none";
		document.getElementById("titleCityLeft").innerHTML = "Введите название города.";
	} else {
		var newCityJson=JSON.parse(newCity.responseText);
		document.getElementsByClassName("feed")[0].style.display="block";
		document.getElementsByClassName("feed")[1].style.display="block";
		document.getElementsByClassName("feed")[2].style.display="block";
		document.getElementsByClassName("feed")[3].style.display="block";
		document.getElementById("titleCityLeft").innerHTML = city.charAt(0).toUpperCase()+city.slice(1);
		document.getElementById("png").src = "http://openweathermap.org/img/wn/"+newCityJson.weather[0].icon+"@2x.png";
		document.getElementById("tempLeft").innerHTML = newCityJson.main.temp;
		document.getElementById("feelsLike").innerHTML = newCityJson.main.feels_like;
		document.getElementById("pres").innerHTML = newCityJson.main.pressure;
		document.getElementById("wind").innerHTML = windDerect(newCityJson.wind.deg);
		document.getElementById("windSpeed").innerHTML = newCityJson.wind.speed;
	};

};
function plates(){

	var dataForRec=citysList.split(",");
	var x=(dataForRec.length);

	for (y=0; y<x; y++){
		var newCity = new XMLHttpRequest();
		newCity.open ("GET", "https://api.openweathermap.org/data/2.5/weather?q="+dataForRec[y]+"&units=metric&appid=45dfa3308548a42f21500c760482c10e", false);
		newCity.send (null);

		var newCityJson=JSON.parse(newCity.responseText);
		var rightCol=document.getElementById("right-col");
		var cityName=dataForRec[y];
		var cityTemp=newCityJson.main.temp;
		var icon=document.getElementById("png").src = "http://openweathermap.org/img/wn/"+newCityJson.weather[0].icon+"@2x.png";
		rightCol.insertAdjacentHTML("beforeend",`<div id="`+cityName+`" class="city-like `+cityName+` bordr"><h1>`+cityName+" "+`</h1><img onclick="deleteTemp('`+cityName+`')" src="img/close-button.svg" class="cancel-x"><h1>`+cityTemp+`</h1><img src=`+icon+` class="cog-right"></div>`);
		
	}
};
function windDerect(value){
	if (value <= 45) {
		return("Западный");
	};
	if (value <= 135 ) {
		return("Северный")
	};
	if (value <= 225 ) {
		return("Восточный")
	};
	if (value <= 315 ) {
		return("Южный")
	} else {
		return("Западный")
	}
};

window.onunload= localStorage.setItem("citys_on_exit",citysList);