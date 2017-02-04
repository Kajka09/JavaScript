'use strict';
/*

Typ liczbowy 

*/

var wyplata = 5000;
var premia = 2500;
var calkowitaWyplata;

calkowitaWyplata = wyplata + premia;

console.log(calkowitaWyplata);


/*

Typ łańcuch znaków - string

*/

var wyplataStr = "5000";
var premiaStr = "2500";
var calkowitaWyplataStr;

calkowitaWyplataStr = wyplataStr + premiaStr;

console.log(calkowitaWyplataStr);



/*

Typ logiczny - boolean

*/

var czyJestSmog;
czyJestSmog = true;

if (czyJestSmog) {
	console.log("Jest SMOG");
} else {
	console.log("Nie ma SMOGa");
}



/*

Typ spcejalne - undefined / null

*/

var niezdefiniowanaZmienna;
var nullowaZmienna = null;

console.log(niezdefiniowanaZmienna);
console.log(nullowaZmienna);




var imieStudenta = "Michał";
console.log(imieStudenta.indexOf('c'));