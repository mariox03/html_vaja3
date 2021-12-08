function Deljenje(){
	var spodnjameja = parseInt(document.getElementById("spodnjameja").value);
	var zgornjameja = parseInt(document.getElementById("zgornjameja").value);
	var deljenec = parseInt(document.getElementById("deljenec").value);

	let izpis = document.getElementById("izpis");

	izpis.innerHTML = "Prikaz zaporedja števil, ki so deljiva s številom <span class='stevilo'>" + deljenec + "</span> v seznamu števil med " + spodnjameja + " in " + zgornjameja + " :";

	izpis.innerHTML += "<hr>";

	for (var i=spodnjameja; i <= zgornjameja; i++) {
		if (i%deljenec==0) {
			izpis.innerHTML += "<br>" + i;
		}
		else {
			izpis.innerHTML += "<br><span class='stevilo'>" + i + "</span>";
		}
	}
}

/* var VS let */

function PrikaziTabelo() {
	var vrstica = parseInt(document.getElementById("vrstice").value);
	var stolpec = parseInt(document.getElementById("stolpci").value);
	var deljenec2 = parseInt(document.getElementById("deljenec2").value);

	var izpis2 = document.getElementById("izpisiTabelo");

	izpis2.innerHTML = "Prikaz tabele <span class='stevilo'> " + vrstica + " X " + stolpec + "</span>, kjer je uporabljeno množenje <hr>";

	var stevec = 0;
	var izracun = 0;
	var deljivo = false;
	for (var k = 1; k<=vrstica; k++){
		for(let j=1; j<=stolpec; j++){
			izracun = k*j;
			if (izracun%deljenec2==0){
				deljivo = true;
			}
			else {
				deljivo = false;
			}


			if (izracun<10){
				if(deljivo){
					izpis2.innerHTML += "<span class='stevilo'>0" + izracun + " </span>";
				}
				else {
					izpis2.innerHTML += "0" + izracun + " ";
					}
			}
			else{
				if(deljivo){
					izpis2.innerHTML += "<span class='stevilo'>" +izracun + "</span> ";
				}
				izpis2.innerHTML += izracun + " ";
			}
		}
		izpis2.innerHTML += "<br>";
	}
}