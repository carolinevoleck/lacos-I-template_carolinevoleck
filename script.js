let conta = 0; // inicializa a conta com zero
let resposta = prompt("Deseja comer mais coxinhas? (S/N)");

while (resposta.toUpperCase() === "S") {
  conta += 2.5; // adiciona R$2.50 ao valor total
  resposta = prompt("Deseja comer mais coxinhas? (S/N)")
};

console.log("Valor total da conta: R$" + conta.toFixed(2));



let numero = prompt("Digite um número:");

for (let i = 1; i <= 10; i++) {
  let resultado = numero * i;
  console.log(numero + " x " + i + " = " + resultado)
};



let strings = ["Maçã", "Banana", "Laranja", "Abacaxi", "Pera"];

for (let i = 0; i < strings.length; i++) {
  console.log((i+1) + "º lugar: " + strings[i])
};


let soma = 0;
let input = 1;

while (input !== 0) {
  input = parseInt(prompt("Insira um número (digite 0 para parar): "));
  soma += input;
}

console.log("A soma dos números inseridos é: " + soma);


let number = parseInt(prompt("Insira um número: "));

for (let i = 0; i <= number; i++) {
  console.log(i);
};



let numeros = [1, 2, 3, 4, 5, 6, 7];

for (let i = 0; i < numeros.length; i++) {
  console.log(numeros[i]);
}
