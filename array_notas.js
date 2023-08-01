const alunos = [{nome: 'Pedro', nota: 10}, {nome: 'Antônio', nota: 5}, {nome: 'Ellem', nota: 10}, 
                {nome: 'Josy', nota: 5.9}, {nome: 'Wilmar', nota: 6.1},{nome: 'Zenilda', nota: 10 }, 
                {nome: 'Luciana', nota: 8}, {nome: 'Carlos', nota: 4.5}, {nome: 'Rosa', nota: 6}, {nome: 'Domingos', nota: 9}];

/*function notasMaioresOuIguaisA6(arrayAlunos) {
    let maioresQue6 = [];
    arrayAlunos.forEach(function(aluno) {
        if(aluno.nota >= 6) {
            maioresQue6.push(aluno);
        }
    });

    return maioresQue6;
}

console.log(notasMaioresOuIguaisA6(alunos)); */

const notasMaioresOuIguaisA6 = (arrayAlunos) => {
    let maioresQue6 = [];
    arrayAlunos.forEach((aluno) => {
        if(aluno.nota >= 6) {
            maioresQue6.push(aluno);
        }
    });

    return maioresQue6;
}

console.log(notasMaioresOuIguaisA6(alunos));