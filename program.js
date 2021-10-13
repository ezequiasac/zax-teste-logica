"use strict";
// Implementando a interface ILoja
class Loja {
    constructor(pedidos, taxa) {
        this.pedidos = pedidos;
        this.taxa = taxa;
    }
    // Calculando o valor da comissão de acordo com o número de pedidos e a taxa da loja
    calcComissao() {
        return this.pedidos.reduce((a, b) => a + b, 0) * (this.taxa / 100);
    }
}
// Implementando a inteface IMoto
class Moto {
    constructor(entrega, lojas) {
        (this.entrega = entrega), (this.lojas = lojas);
    }
}
// Criando as lojas
const loja1 = new Loja([50, 50, 50], 5);
const loja2 = new Loja([50, 50, 50, 50], 5);
const loja3 = new Loja([50, 50, 100], 15);
// Criando os motoboys
const moto1 = new Moto(2, [loja1, loja2, loja3]);
const moto2 = new Moto(2, [loja1, loja2, loja3]);
const moto3 = new Moto(2, [loja1, loja2, loja3]);
const moto4 = new Moto(2, [loja1]);
const moto5 = new Moto(3, [loja1, loja2, loja3]);
// Criando a função realizarPedido, que recebe um parâmetro do tipo Loja e outro do tipo Moto
function realizarPedido(loja, motoboy) {
    // Caso tente executar o script  passando apenas o motoboy ou não passando nenhum motoboy
    if (loja == undefined || motoboy == undefined) {
        console.log('Quem é o motoboy e quantos pedidos terá?');
        console.log('De qual loja é?');
        console.log('Quanto vai ganhar?');
    }
    // Caso tente passar o motoboy 4 em alguma outra laja senão a loja 1
    else if (!motoboy.lojas.includes(loja)) {
        console.log('O motoboy não atende essa loja');
    }
    else {
        return motoboy.entrega * loja.pedidos.length + loja.calcComissao();
    }
}
// Testando a função realizarPedidos
console.log(realizarPedido(loja1, moto1));
console.log(realizarPedido(loja2, moto3));
console.log(realizarPedido(loja3, moto5));
