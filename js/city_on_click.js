function citySelect(){

	var city = document.getElementById("search").value;
	if(city==""){

		document.getElementById("titleCity").innerHTML = "Так ты и не искал.";
		document.getElementsByClassName("feed")[0].style.display="none";
		document.getElementsByClassName("feed")[1].style.display="none";
		document.getElementsByClassName("feed")[2].style.display="none";
		document.getElementsByClassName("feed")[3].style.display="none";

	} else {
	newData(city);
	};

};

var counts=0;

function favorite(){

	if(indexOfCitys.includes(document.getElementById("cityID").innerHTML*1)) {

		return(alert("Уже есть."));

	} else {

	var rightCol=document.getElementById("right-col");
	var cityName=document.getElementById("titleCity").innerText;
	var cityTemp=document.getElementById("temp").innerText;
	var icon=document.getElementById("png").src;
	var docID=document.getElementById("cityID").innerHTML;

	rightCol.insertAdjacentHTML("beforeend",`<div id="`+docID+`" class="city-like bordr"><h1>`+cityName+`</h1><img onclick="deleteTemp(`+(docID*1)+`)" src="img/close-button.svg" class="cancel-x"><h1>`+cityTemp+`</h1><img src=`+icon+` class="cog-right"></div>`);
	return(indexOfCitys.push(docID*1));
	}
};

function deleteTemp(valueOfID=0){

	var cityID = document.getElementById(valueOfID);
	cityID.parentNode.removeChild(cityID);
	var indexToDelete=indexOfCitys.indexOf(valueOfID);

	return(delete indexOfCitys[indexToDelete]);
}

var counts;
function deleteFavorite(){

};