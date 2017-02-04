'use strict';

var imiona = ['Monika', 'Krystian', 'Lukasz'];

imiona[3] = 'Tania';
imiona[4] = 'Ela';

imiona.push('Geralt');

imiona.pop();
imiona.pop();

console.log(imiona.unshift('Robert'));

console.log(imiona);

imiona.shift();

console.log(imiona);

console.log(imiona.shift());

console.log(imiona);

imiona.push("Kaja");


for (var i=imiona.length-1; i >=0; i--) {
	console.log(imiona[i]);
}


imiona.forEach(function (element, i){
	console.log('Element nr.' + i + '=' + element);
});

console.log(imiona.join("-"));


imiona.sort();
console.log(imiona);


imiona.reverse();
console.log(imiona);


var imionaMeskie = ['Robert', 'Mariusz', 'Andrzej'];
var zbiorImion = imiona.concat(imionaMeskie);
console.log(zbiorImion);


console.log(zbiorImion.indexOf("Mariusz"));

console.log(Array.isArray(zbiorImion));
console.log(zbiorImion.slice(2,5));

zbiorImion.splice (2,2, "Julek", "Krzyś")
console.log(zbiorImion);

console.log(zbiorImion.toString());






