'use strict';

var wzrostMateusz = 190;
var wzrostKaji = 190;


/*
Funkcja warunkowa if
*/

if (wzrostKaji < wzrostMateusz) {
	console.log("Kaja jest niższa :)")
}

if (wzrostKaji > wzrostMateusz) {
	console.log("Kaja jest wyższa");
} else {
	console.log("Kaja jest niższa");
}


/*
Funkcja warunkowa if else
*/


if (wzrostKaji > wzrostMateusz) {
	
	console.log("Kaja jest wyższa");
	
} else if (wzrostKaji == wzrostMateusz) {
	
	console.log("Kaja jest tak wysoka jak Mateusz");
} else  {

	console.log("Kaja jest niższa");
}


/*
Funkcja warunkowa switch
*/

var kolor = 'biały';


switch (kolor) {
	case 'czerwony':
		console.log('Kolor czerwony')
		break;
	case 'zielony':
		console.log('Kolor zielony')
		break;
	case 'niebieski':
		console.log('Kolor niebieski')
		break;
	default:
		console.log ('Inny kolor')
}


