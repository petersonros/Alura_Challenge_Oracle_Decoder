// Somente letras minúsculas sem acentuação.
// Codificador
/*
A vogal "a" é trocada por "ai"
A vogal "e" é trocada por "enter"
A vogal "i" é trocada por "imes"
A vogal "o" é trocada por "ober"
A vogal "u" é trocada por "ufat"
*/

/* var vogalA = a;
var vogalE = e;
var vogalI = i;
var vogalO = o;
var vogalU = u; */

document.querySelector('.texto-class');

texto.value;

var texto = value;

var textoCodificado = texto.replace(/a/gi, 'ai').replace(/e/gi, 'ei').replace(/i/gi, 'imes').replace(/o/gi, 'ober').replace(/u/gi, 'ufat');

console.log(textoCodificado);



//Decodificador
/*
"ai"     é trocado pela vogal "a"
"enter"  é trocado pela vogal "e"
"imes"   é trocado pela vogal "i"
"ober"   é trocado pela vogal "o"
"ufat"   é trocado pela vogal "u"
*/

/* var aiCode = ai;
var enterCode = enter;
var imesCode = imes;
var oberCode = ober;
var ufatCode = ufat; */