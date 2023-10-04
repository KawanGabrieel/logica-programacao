console.log("Olá,console!");

document.write("Olá, documento!");

window.alert("Olá,janela");

//Lógica de Programação
//Problema: obter 3 notas de um aluno, calcular a média,
//Exibir a média e a situação do aluno: aprovado,
//em exame o0u reprovado

console.log('Inicio do programa');

//declaração das variáveis

const nota1 = parseInt(prompt('Digite a primeira nota'));
const nota2 = parseInt(prompt('Digite a segunda nota'));
const nota3 = parseInt(prompt('Digite a terceira nota'));

//calculo da média
const media = (nota1 + nota2 +nota3) / 3;

console.log('A nota 1 é:', nota1);
console.log('A nota 2 é:', nota2);
console.log('A nota 3 é:', nota3);

console.log('A média do aluno é:', media);

