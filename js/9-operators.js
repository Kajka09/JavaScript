'use strict';

var liczba1 = 13;
var liczba2 = 5;

var wynik;

wynik = liczba1 % liczba2;
console.log(wynik);


liczba1 -= 3;
console.log(liczba1);


(2<=5) ? console.log("tak") : console.log("nie");


if ("2"===2) {
	document.write("prawda");
}	else {
	document.write("nie prawda");
}


var liczba3 = 11, liczba4 = 18;

! ((liczba4>= liczba3)|| (liczba4 == liczba3)) ? console.log('większe') : console.error('mniejsze');