'use strict';
 
var jsonAuta = {
	"auta": [
		{nazwa: "Opel Insignia", pojemnosc: "2792", moc: "325"},
		{nazwa: "Alfa Romeo", pojemnosc: "2000", moc: "170"},
		{nazwa: "Audi", pojemnosc: "1995", moc: "300"},
		{nazwa: "Citroen", pojemnosc: "1998", moc: "140"},
	]
}

console.log(jsonAuta);

jsonAuta.auta.forEach (function (samochody, index){
			console.log(samochody.nazwa);
});