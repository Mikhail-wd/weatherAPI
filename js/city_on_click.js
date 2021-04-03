function citySelect(){

	var city = document.getElementById("search").value;
	if(city==""){

		document.getElementById("titleCityLeft").innerHTML = "Так ты и не искал.";
		document.getElementsByClassName("feed")[0].style.display="none";
		document.getElementsByClassName("feed")[1].style.display="none";
		document.getElementsByClassName("feed")[2].style.display="none";
		document.getElementsByClassName("feed")[3].style.display="none";

	} else {
	newData(city);
	};

};

function favorite(){

	if(citysList.includes(cityName=document.getElementById("search").value)) {

		return(alert("Уже есть."));

	} else {
		var rightCol=document.getElementById("right-col");
		var cityName=document.getElementById("titleCityLeft").innerText;
		var cityTemp=document.getElementById("tempLeft").innerText;
		var icon=document.getElementById("png").src;
		var docID=document.getElementById("cityID").innerHTML;
		rightCol.insertAdjacentHTML("beforeend",`<div id="`+cityName+`" class="city-like `+cityName+` bordr"><h1>`+cityName+" "+`</h1><img onclick="deleteTemp('`+cityName+`')" src="img/close-button.svg" class="cancel-x"><h1>`+cityTemp+`°C</h1><img src=`+icon+` class="cog-right"></div>`);
		
		citysList=citysList+cityName+",";
		localStorage.setItem("citys_on_exit",citysList);
	}
};

function deleteTemp(valueOfID=""){

	var cityID = document.getElementById(valueOfID);
	cityID.parentNode.removeChild(cityID);
	var indexToDelete=indexOfCitys.indexOf(valueOfID);

	citysList=citysList.replace(valueOfID+",", "")

	localStorage.setItem("citys_on_exit",citysList);

}