'use strict';
 

//var iloscKasyMichala = 3500;
//var iloscKasyKaji = 5000;
//var iloscKasyMateusza = 7500;


// W ŻADNYM WYPADKU TAK NIE PISAĆ !!! //

var iloscOsoba1 = 3500;
var iloscOsoba2 = 5000;
var iloscOsoba3 = 7500;
var iloscOsoba4 = 2500;

var sumaKasy;

sumaKasy = iloscOsoba1 + iloscOsoba2 + iloscOsoba3;


function policzSumeKasy (iloscOsoba1, iloscOsoba2, iloscOsoba3, wiek) {
	var sumaKasy;
	sumaKasy = iloscOsoba1 + iloscOsoba2 + iloscOsoba3 + iloscOsoba4;
	
	var osoba = [sumaKasy, wiek];
	
	return osoba;
}

console.log(policzSumeKasy( iloscOsoba3, iloscOsoba2, sumaKasy, 25));

iloscOsoba4 = 15000;
