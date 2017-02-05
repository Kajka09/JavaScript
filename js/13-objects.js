'use strict';
//
//var kaja = {
//	imie: "Kaja",
//	wzrost: 152,
//	przedstawOsobe: function() {console.log(this.imie)}
//}
//
//var krystian = {
//	imie: "Krystian",
//	wzrost: 180,
//	przedstawOsobe: function() {console.log(this.imie)}
//}
//
//kaja.przedstawOsobe ();
//krystian.przedstawOsobe();
//
//console.log(kaja.wzrost);
//

//function Osoba(imie, nazwisko) {
//	this.imie = imie;
//	this.nazwisko = nazwisko;
//	this.wzrost;
//	this.oczy;
//	this.wyswietlInfo = function ()  {
//		console.log("Imię:" + this.imie + "\n"
//				    + "Nazwisko:" +this.nazwisko + "\n"
//					+ "Wzrost:" + this.wzrost + "\n"
//					+ "Oczy:" + this.oczy);
//	}
//}
//
//var krystian = new Osoba ('Krystian', 'Dziopa');
//
//krystian.wzrost = 180;
//krystian.oczy = "niebieskie";
//
//krystian.wyswietlInfo();
//
//var kaja = new Osoba ('Kaja', 'Stefaniak');
//
//kaja.wyswietlInfo();


function Samochod (marka) {
	this.marka = marka;
	this.pojemnosc;
	this.moc;
	this.wyswietlInfo = function () {
		console.log( "Marka -" +this.marka +"\n"
					+"Pojemność -" +this.pojemnosc +" cm3\n"
					+"Moc -" + this.moc +" KM \n");
	}
}

var opelInsignia = new Samochod ('Opel Insignia');
opelInsignia.pojemnosc = 2792;
opelInsignia.moc = 	325;

opelInsignia.wyswietlInfo();


var alfaRomeo = new Samochod ('Alfa Romeo');
alfaRomeo.pojemnosc = 2000;
alfaRomeo.moc = 170;

alfaRomeo.wyswietlInfo();


var audi = new Samochod ('Audi');
audi.pojemnosc = 1995;
audi.moc = 300;

audi.wyswietlInfo();


var citroen = new Samochod ('Citroen');
citroen.pojemnosc = 1998;
citroen.moc = 140;

citroen.wyswietlInfo();