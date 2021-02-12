var citySelect = function(){
	var city = document.getElementById("citys").options.selectedIndex
	var cityToSend =[moscowJson,novosibirskJson,parisJson,vladivostokJson];
	newData(cityToSend[city])
};