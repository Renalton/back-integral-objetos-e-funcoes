const prova = {
  aluno: "João",
  materia: "Português",
  valor: 10,
  questoes: [
    {
      resposta: "a",
      correta: "b",
    },
    {
      resposta: "c",
      correta: "c",
    },
    {
      resposta: "e",
      correta: "b",
    },
    {
      resposta: "b",
      correta: "b",
    },
    {
      resposta: "c",
      correta: "c",
    },
  ],
};
function corrigirProva(prova) {
  let nota = 0;
  for (const resultado of prova.questoes) {
    if (resultado.resposta === resultado.correta) {
      nota += (prova.valor / prova.questoes.length); //A cada acerto do aluno a variavel nota soma +2 que é o valor para cada questão certa
    }
  }
  console.log(`O aluno(a) ${prova.aluno} acertou ${nota / 2} questões e obteve nota ${nota} `); //para saber quantas questões o aluno acertou é só dividir a nota pelo valor de cada questão 
}


