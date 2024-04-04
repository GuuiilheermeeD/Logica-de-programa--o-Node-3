const estudante = {
    nome: 'José Silva',
    idade: 32,
    cpf: '12312312312',
    turma: 'JavaScript'
  }
  
  console.log(estudante.nome);
  console.log(`o nome de estudante é ${estudante.nome}`);
  console.log(`os três primeiros números do CPF são ${estudante.cpf.substring(0,3)}`);
  
//   O objeto é sempre composto de conjuntos de chave e valor