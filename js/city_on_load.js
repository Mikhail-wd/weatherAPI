var moscow = new XMLHttpRequest();
moscow.open ("GET", "https://api.openweathermap.org/data/2.5/weather?q=Moscow&units=metric&appid=45dfa3308548a42f21500c760482c10e", false);
moscow.send (null);
var moscowJson = JSON.parse(moscow.responseText);

var novosibirsk = new XMLHttpRequest();
novosibirsk.open ("GET", "https://api.openweathermap.org/data/2.5/weather?q=Novosibirsk&units=metric&appid=45dfa3308548a42f21500c760482c10e", false);
novosibirsk.send (null);
var novosibirskJson= JSON.parse(novosibirsk.responseText);

var paris = new XMLHttpRequest();
paris.open ("GET", "https://api.openweathermap.org/data/2.5/weather?q=Paris&units=metric&appid=45dfa3308548a42f21500c760482c10e", false);
paris.send (null);
var parisJson= JSON.parse(paris.responseText);

var vladivostok = new XMLHttpRequest();
vladivostok.open ("GET", "https://api.openweathermap.org/data/2.5/weather?q=Vladivostok&units=metric&appid=45dfa3308548a42f21500c760482c10e", false);
vladivostok.send (null);
var vladivostokJson= JSON.parse(vladivostok.responseText);

function newData(city=moscowJson) {
	document.getElementById("temp").innerHTML = city.main.temp;
	document.getElementById("feelsLike").innerHTML = city.main.feels_like;
	document.getElementById("pres").innerHTML = city.main.pressure;
	document.getElementById("wind").innerHTML = windDerect(city.wind.deg);
	document.getElementById("windSpeed").innerHTML = city.wind.speed;
};

var windDerect = function(value){
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
