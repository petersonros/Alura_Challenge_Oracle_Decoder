/* 
var despesaCategoria = 1532;
var rendaTotal = 6255;

var porcentagemCategoria = (despesaCategoria/rendaTotal) * 100;

console.log(porcentagemCategoria);
 */

/* 
var nomes = ["Douglas", "Flávio", "Nico", "Rômulo", "Leonardo"];

for (var i = 0; i < nomes.length; i++) {
    console.log(nomes[i] + " é instrutor da Alura");
}

nomes.forEach(function(nome) {
    console.log(nome + " é instrutor da Alura");
})
 */


// Somente letras minúsculas sem acentuação.
// Codificador
/*
A vogal "a" é trocada por "ai"
A vogal "e" é trocada por "enter"
A vogal "i" é trocada por "imes"
A vogal "o" é trocada por "ober"
A vogal "u" é trocada por "ufat"
*/

var vogalA = a;
var vogalE = e;
var vogalI = i;
var vogalO = o;
var vogalU = u;

//Decodificador
/*
"ai"     é trocado pela vogal "a"
"enter"  é trocado pela vogal "e"
"imes"   é trocado pela vogal "i"
"ober"   é trocado pela vogal "o"
"ufat"   é trocado pela vogal "u"
*/

var aiCode = ai;
var enterCode = enter;
var imesCode = imes;
var oberCode = ober;
var ufatCode = ufat;


/* function(a){
    vogalA = a.replace("a", "ai");
} */

// função replace

// primeiro exemplo
var frase1 = "No YouTube você encontra conteúdo de programação";

var novaFrase1 = frase1.replace("No YouTube", "No blog");
console.log(novaFrase1);

// segundo exemplo
var frase2 = "Nos canais do YouTube você encontra conteúdos sobre programação, carreira e tecnologia! Confira os outros conteúdos nos canais do YouTube"; 
 
var novaFrase2 = frase2.replace(/canais do YouTube/g, "blogs"); // as barras delimita o qu será substituído // o g indica que a mudança será global
console.log(novaFrase2);

// terceiro exemplo
var frase3 = "Nos canais do YouTube você encontra conteúdos sobre programação, carreira e tecnologia! Confira os outros conteúdos nos canais do youtube"; 
 
var novaFrase3 = frase3.replace(/canais do YouTube/gi, "blogs"); // as barras delimita o qu será substituído // o g indica que a mudança será global // o i muda pra case insensitive 
console.log(novaFrase3);


// exemplo 01
// let texto = "eu amo o JavaScript"
// let textoAtualizado = texto.replace("JavaScript", "PHP")
// console.log(textoAtualizado) //eu amo PHP

// let texto = "eu amo o JavaScript"
// let textoAtualizado = texto.replace(RegEx, function)
// RegEx = expressão regular
// function = função para procesar valores atualizados(ex; realizar calculo)
