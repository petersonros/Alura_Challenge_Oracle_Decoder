
var initialText = document.getElementById("input") ;
var clickEncoded = document.getElementById("encoded");
var clickDecoded = document.getElementById("decoded");
var textoConvertido = document.getElementById("init-text") ;
var TextResult;
var encoded;
var decoded;  

// Codificador
/*
A vogal "a" é trocada por "ai"
A vogal "e" é trocada por "enter"
A vogal "i" é trocada por "imes"
A vogal "o" é trocada por "ober"
A vogal "u" é trocada por "ufat"
*/
function textEncoded(){
        var myFrase = initialText.value;             
        encoded = myFrase.replace(/a/g, 'ai').replace(/e/g, 'enter').replace(/i/g, 'imes').replace(/o/g, 'ober').replace(/u/g, 'ufat');
        TextResult = encoded;
        document.getElementById('init-text').value= encoded;
}

//Decodificador
/*
"ai"     é trocado pela vogal "a"
"enter"  é trocado pela vogal "e"
"imes"   é trocado pela vogal "i"
"ober"   é trocado pela vogal "o"
"ufat"   é trocado pela vogal "u"
*/
function textDecoded(){
        var myFrase = initialText.value;
        decoded = myFrase.replace(/ai/g, 'a').replace(/enter/g, 'e').replace(/imes/g, 'i').replace(/ober/g, 'o').replace(/ufat/g, 'u');
        TextResult = decoded;
        document.getElementById('init-text').value= decoded;
}  

clickEncoded.onclick = function(){textEncoded();}

clickDecoded.onclick = function(){textDecoded();}

//copyTexto.onclick = function(){execCopy();}