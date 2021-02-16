function citySelect(){

	var city = document.getElementById("search").value;
	newData(city);

};

var counts=0;

function favorite(){

	var rightCol=document.getElementById("right-col");
	var cityName=document.getElementById("titleCity").innerText;
	var cityTemp=document.getElementById("temp").innerText;

	rightCol.insertAdjacentHTML("beforeend",`<div class="city-like bordr"><h1>`+cityName+`</h1><img src="img/close-button.svg" class="cancel-x"><h1>`+cityTemp+`</h1><img src="img/cog-solid-black.svg" class="cog-right"></div>`);
	return(counts++);
};

var counts;
function deleteFavorite(){

};