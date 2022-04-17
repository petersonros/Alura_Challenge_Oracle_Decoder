// Criptografar
// A vogal "a" é trocada por "ai"
// A vogal "e" é trocada por "enter"
// A vogal "i" é trocada por "imes"
// A vogal "o" é trocada por "ober"
// A vogal "u" é trocada por "ufat"

document.querySelector("#encoded").onclick = function(){textEncoded();}
function textEncoded(){
        var myFrase = document.querySelector("#input").value;             
        encoded = myFrase.replace(/a/g, 'ai').replace(/e/g, 'enter').replace(/i/g, 'imes').replace(/o/g, 'ober').replace(/u/g, 'ufat');
        document.querySelector('#init-text').value= encoded;
}

// Descriptografar
// "ai"     é trocado pela vogal "a"
// "enter"  é trocado pela vogal "e"
// "imes"   é trocado pela vogal "i"
// "ober"   é trocado pela vogal "o"
// "ufat"   é trocado pela vogal "u"

document.querySelector("#decoded").onclick = function(){textDecoded();}
function textDecoded(){
        var myFrase = document.querySelector("#input").value;
        decoded = myFrase.replace(/ai/g, 'a').replace(/enter/g, 'e').replace(/imes/g, 'i').replace(/ober/g, 'o').replace(/ufat/g, 'u');
        document.querySelector('#init-text').value= decoded;
}

function copyText(){navigator.clipboard.writeText(encoded);}

