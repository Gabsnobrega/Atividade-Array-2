const turma = [
    { nome: "João", notas: [8, 7, 9] },
    { nome: "Maria", notas: [6, 4, 7] },
    { nome: "Pedro", notas: [9, 8, 10] }
];

function calcularMedia(notas) {
    let soma = 0;
    for (let i = 0; i < notas.length; i++) {
        soma += notas[i];
    }
    return soma / notas.length;
}


for (let i = 0; i < turma.length; i++) {
    const aluno = turma[i];
    const media = calcularMedia(aluno.notas);
    
    let status = "Reprovado";
    if (media >= 7) {
        status = "Aprovado";
    }

    console.log(`Aluno: ${aluno.nome} | Média: ${media.toFixed(1)} | Estado: ${status}`);
}