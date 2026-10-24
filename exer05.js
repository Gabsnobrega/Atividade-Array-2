const aluno ={
    nome: "João",
    idade: 20,
    
};

let notas = [8, 7, 9, 6];

function calcularMedia(notas) {
    let soma = 0;
    for (let i = 0; i < notas.length; i++) {
        soma += notas[i];
    }
    return soma / notas.length;
}
console.log("Média do aluno " + aluno.nome + " é: " + calcularMedia(notas));    