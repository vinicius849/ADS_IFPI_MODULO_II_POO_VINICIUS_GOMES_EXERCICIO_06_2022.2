/* 3. Altere as implementações da classe Banco das aulas anteriores para que:
a. O array de contas seja privado;
b. O método consulta por índice seja privado;
c. Os demais métodos sejam públicos. */

class Banco {
    agencia : number;
    saldo : number;
    transferir : number;
    constructor(agencia : number, saldo : number, transferir : number) {
        this.agencia = agencia;
        this.saldo = saldo;
        this.transferir = transferir;
    }
}
    let banco1 : Banco = new Banco(640111, 2000, 85);
    let banco2 : Banco = new Banco(640552, 6000, 45);

    banco1 !== banco2;

function InserirConta() {
    this.agencia = banco2;
}

class Sacar {
    numero : string;
    valor : number;
    constructor(numero : string, valor : number) {
        this.numero = numero;
        this.valor = valor;
    }
}
    let banco3 : Sacar = new Sacar("640123", 3000);

function CreditarDinheiro() {
    this.numero = (this.valor / 3); // Valor do meu crédito parcelado em 3 vezes.
}

class Transferir {
    numeroCredito : string;
    numeroDebito : string;
    valor : number;
    constructor(numeroCredito : string, numeroDebito : string, valor : number) {
        this.numeroCredito = numeroCredito;
        this.numeroDebito = numeroDebito;
        this.valor = valor;
    }
}

    let banco4 : Transferir = new Transferir("37168", "651241", 1750);

function TransacaoBancaria() {
    (this.numeroDebito / this.numeroDebito === 0);
}

class CustoTotal {
    quantContas : number;
    quantDinheiro : number;
    mediaSaldo : number;
    constructor(quantContas : number, quantDinheiro : number, mediaSaldo : number) {
        this.quantContas = quantContas;
        this.quantDinheiro = quantDinheiro;
        this.mediaSaldo = mediaSaldo;
    }
}
function CasaDePapel() {
    return (this.quantContas = this.agencia + banco1 + banco2 + banco3 + banco4);
}
    console.log(CasaDePapel);

function DinheiroCalculado() {
    return (this.quantDinheiro = 2000 + 6000 + 1000 + 1750);
}
    console.log(DinheiroCalculado);

function Media() {
    return (this.mediaSaldo = 2000 + 6000 + 1000 + 1750 / 4);
}
    console.log(Media);

    let custototal : CustoTotal = new CustoTotal(5, 10750, 2687.5);

// ALTERAÇÃO
