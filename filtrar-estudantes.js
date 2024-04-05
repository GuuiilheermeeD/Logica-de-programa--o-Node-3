const estudantes = require('./estudantes.json');

function filtraPorPropriedades(lista, propriedade) {
    return lista.filter((estudante) =>{
        return !estudante.endereco.hasOwnProperty(propriedade)
    })
}

const listaEnderecosImcomplemento = filtraPorPropriedades(estudantes, 'cep');
console.log(listaEnderecosImcomplemento);