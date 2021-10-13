// Criando a interface ILoja
interface ILoja {
  pedidos: number[];
  taxa: number;

  calcComissao(): number;
}

// Implementando a interface ILoja
class Loja implements ILoja {
  pedidos: number[];
  taxa: number;

  constructor(pedidos: number[], taxa: number) {
    this.pedidos = pedidos;
    this.taxa = taxa;
  }

  // Calculando o valor da comissão de acordo com o número de pedidos e a taxa da loja
  calcComissao(): number {
    return this.pedidos.reduce((a, b) => a + b, 0) * (this.taxa / 100);
  }
}

// Criando a inteface IMoto
interface IMoto {
  entrega: number;
  lojas: Loja[];
}

// Implementando a inteface IMoto
class Moto implements IMoto {
  entrega: number;
  lojas: Loja[];
  constructor(entrega: number, lojas: Loja[]) {
    (this.entrega = entrega), (this.lojas = lojas);
  }
}

// Criando as lojas
const loja1: Loja = new Loja([50, 50, 50], 5);
const loja2: Loja = new Loja([50, 50, 50, 50], 5);
const loja3: Loja = new Loja([50, 50, 100], 15);

// Criando os motoboys
const moto1: Moto = new Moto(2, [loja1, loja2, loja3]);
const moto2: Moto = new Moto(2, [loja1, loja2, loja3]);
const moto3: Moto = new Moto(2, [loja1, loja2, loja3]);
const moto4: Moto = new Moto(2, [loja1]);
const moto5: Moto = new Moto(3, [loja1, loja2, loja3]);

// Criando a função realizarPedido, que recebe um parâmetro do tipo Loja e outro do tipo Moto
function realizarPedido(loja: Loja, motoboy: Moto) {
  // Caso tente executar o script  passando apenas o motoboy ou não passando nenhum motoboy
  if (loja == undefined || motoboy == undefined) {
    console.log('Quem é o motoboy e quantos pedidos terá?');
    console.log('De qual loja é?');
    console.log('Quanto vai ganhar?');
  }
  // Caso tente passar o motoboy 4 em alguma outra laja senão a loja 1
  else if (motoboy === moto4 && loja !== loja1) {
    console.log('Motoboy 4 só atende a loja 1');
  } else {
    return motoboy.entrega * loja.pedidos.length + loja.calcComissao();
  }
}

console.log(realizarPedido(loja1, moto1));
console.log(realizarPedido(loja2, moto2));
console.log(realizarPedido(loja3, moto5));
