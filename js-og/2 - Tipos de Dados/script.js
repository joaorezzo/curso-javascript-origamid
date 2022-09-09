
// 1 - Tipos de dados
var nome = 'André'; // String
var idade = 28; // Number
var possuiFaculdade = true; // Boolean
var time; // Undefined
var comida = null; // Null
var simbolo = Symbol() // Symbol
var novoObjeto = {} // Object

// 2 - Verificar tipo de dado

var nome = 'André';
console.log(typeof nome);
// retorna string

// 3 - Somar strings (concatenar) e strings com numeros
var nome = 'André';
var sobrenome = 'Rafael';
var nomeCompleto = nome + ' ' + sobrenome;

var gols = 1000;
var frase = 'Romário fez ' + gols + ' gols';


//  4 - Aspas duplas, simples e template string
'JavaScript é "super" fácil';
"JavaScript é 'super' fácil";
"JavaScript é \"super\" fácil";
`JavaScript é "super" fácil"`;
"JavaScript é "super" fácil"; // Inválido


// 5 - Template String
var gols = 1000;
var frase1 = 'Romário fez ' + gols + ' gols';
var frase2 = `Romário fez ${gols} gols`; // Utilizando Template String


// EXERCICIOS
// Declare uma variável contendo uma string
var nome = "Joao Otavio";
// Declare uma variável contendo um número dentro de uma string
var numero = "28";
// Declare uma variável com a sua idade
var idade = 19;
// Declare duas variáveis, uma com seu nome
// e outra com seu sobrenome e some as mesmas
var primeiroNome = "Joao Otavio";
var sobrenome = "Cardoso";
var nomeCompleto = primeiroNome + ' ' + sobrenome;
// Coloque a seguinte frase em uma variável: It's time
var frase = "It's time";
// Verifique o tipo da variável que contém o seu nome
console.log (typeof nome);