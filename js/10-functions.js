'use strict';
 
//var liczba1 = 8, liczba2 = 10, wynik, wynik2, wynik3, wynik4;
//
//function dodajLiczby (skladowa1, skladowa2) {
//	
//	var wynikDodawania;
//	wynikDodawania = skladowa1+ skladowa2;
//	
//	return wynikDodawania;
//}
//
//wynik = dodajLiczby(liczba1, liczba2);
//wynik2 = dodajLiczby(23, 18);
//wynik3 = dodajLiczby(liczba1, liczba2);
//wynik4 = dodajLiczby(100, 86);
//
//console.log(wynik);
//console.log(wynik2);
//console.log(wynik3);
//console.log(wynik4);



var liczba3 =2, liczba4 = 5, liczba5 = 6, wynik, wynik2, wynik3;

function mnozenie (skladowa1, skladowa2, skladowa3) {
	var wynikMnozenia;
	wynikMnozenia = skladowa1 * skladowa2 * skladowa3;
	
	return	wynikMnozenia;
}

wynik = mnozenie (liczba3, liczba4, liczba5);

wynik2 = mnozenie (-23, 4, 5);

wynik3 = mnozenie (10, 5, 95);

//console.log(wynik);



function wartoscParametru(liczbaDoSprawdzenia) {
	
	if (liczbaDoSprawdzenia >=0) {
		console.log(liczbaDoSprawdzenia);
	} else {
		document.write(liczbaDoSprawdzenia);
	}
}


wartoscParametru(wynik); 
wartoscParametru(wynik2); 
wartoscParametru(wynik3); 

