function cat() {
	x = 0;
	var pravodg = ['muca', 'Muca', 'Mačka', 'mačka'];

	var odg = document.getElementById("zival").value;
	for (var i = 0; i<pravodg.length; i++) {
		if (odg === pravodg[i])	
			var result = true;
	}

	if (result) {
		x = 1;
	} else {
		x = 0;
	}

}

function stolp() {
	y = 0;
	var pravodg = ['Paris'];

	var odg = document.getElementById("stavba").value;
	for (var i = 0; i<pravodg.length; i++) {
		if (odg === pravodg[i])
			var result = true;
	}

	if (result) {
		y = 1;
	} else {
		y = 0;
	}

}

function rezultat() {
	var rezultat = x + y;
	if (rezultat === 2) {
		document.getElementById('text').innerHTML = "ODLIČEN REZULTAT!  Dosegel si vse točke! ";
	}
	else {
		if (rezultat === 1) {
			document.getElementById('text').innerHTML = "ZADOSTEN  REZULTAT. Dosegel si polovico točk!";
		}
		else {
			document.getElementById('text').innerHTML = "KATASTROFA!!! Pojma nimaš!!";
		}
	}
}