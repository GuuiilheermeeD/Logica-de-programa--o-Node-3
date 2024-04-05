const produto = {
    id: 1,
    nome: "Camiseta",
    preco: 25.99
};


const stringJsonProduto = JSON.stringify(produto);
console.log(`String do Produto: ${stringJsonProduto}`);

console.log(typeof stringJsonProduto);