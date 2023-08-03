const alunos = [{nome: 'Pedro', nota: 10}, {nome: 'Antônio', nota: 5}, {nome: 'Ellem', nota: 10}, 
                {nome: 'Josy', nota: 5.9}, {nome: 'Wilmar', nota: 6.1},{nome: 'Zenilda', nota: 10 }, 
                {nome: 'Luciana', nota: 8}, {nome: 'Carlos', nota: 4.5}, {nome: 'Rosa', nota: 6}, {nome: 'Domingos', nota: 9}];

filtraAprovados = aluno => aluno.nota >= 6;

const aprovados = alunos.filter(filtraAprovados);

console.log(aprovados);