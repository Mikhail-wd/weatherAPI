function newData(city="лондон") {
	var newCity = new XMLHttpRequest();
	newCity.open ("GET", "https://api.openweathermap.org/data/2.5/weather?q="+city+"&units=metric&appid=45dfa3308548a42f21500c760482c10e", false);
	newCity.send (null);

	if(newCity.status==404){

		document.getElementsByClassName("feed")[0].style.display="none";
		document.getElementsByClassName("feed")[1].style.display="none";
		document.getElementsByClassName("feed")[2].style.display="none";
		document.getElementsByClassName("feed")[3].style.display="none";
		document.getElementById("titleCity").innerHTML = "Не найден.";
	} else {
		var newCityJson=JSON.parse(newCity.responseText);
		document.getElementsByClassName("feed")[0].style.display="block";
		document.getElementsByClassName("feed")[1].style.display="block";
		document.getElementsByClassName("feed")[2].style.display="block";
		document.getElementsByClassName("feed")[3].style.display="block";
		document.getElementById("titleCity").innerHTML = city.charAt(0).toUpperCase()+city.slice(1);
		document.getElementById("temp").innerHTML = newCityJson.main.temp;
		document.getElementById("feelsLike").innerHTML = newCityJson.main.feels_like;
		document.getElementById("pres").innerHTML = newCityJson.main.pressure;
		document.getElementById("wind").innerHTML = windDerect(newCityJson.wind.deg);
		document.getElementById("windSpeed").innerHTML = newCityJson.wind.speed;
	};

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