var myRequest = new XMLHttpRequest();
myRequest.open ("GET", "https://api.openweathermap.org/data/2.5/weather?q=Moscow&units=metric&appid=45dfa3308548a42f21500c760482c10e", false);
myRequest.send (null);

var myData = JSON.parse(myRequest.responseText);

function newData() {
	//document.getElementById("city").innerHTML = myData.city;
	document.getElementById("temp").innerHTML = myData.main.temp;
	document.getElementById("feelsLike").innerHTML = myData.main.feels_like;
	document.getElementById("pres").innerHTML = myData.main.pressure;
	document.getElementById("wind").innerHTML = windDerect(myData.wind.deg);
	document.getElementById("windSpeed").innerHTML = myData.wind.speed;
};

var windDerect = function(value){
	if (value <= 45) {
		return("Заподный");
	};
	if (value <= 135 ) {
		return("Северный")
	};
	if (value <= 225 ) {
		return("Восточный")
	};
	if (value <= 315 ) {
		return("Восточный")
	} else {
		return("Западный")
	}
};

var citySelect = function(){
	var city = document.getElementById("citys").options.selectedIndex;
	var cityToSend =["Moscow","Novosibirsk","Vladivostok","Paris"];
	var myRequest = new XMLHttpRequest();
	myRequest.open ("GET", "https://api.openweathermap.org/data/2.5/weather?q="+cityToSend[city]+"&units=metric&appid=45dfa3308548a42f21500c760482c10e", false);
	myRequest.send (null);
	newData();
};

console.log(myData);