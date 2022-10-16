/* 1. Crie uma classe Calculadora que tenha:
a. Dois atributos privados (operando1 e 2) do tipo number;
b. Dois métodos públicos, cada um representando uma operação básica;
c. Um construtor onde são passados os operandos e que esses inicializam os
atributos;
Teste a classe calculadora e seus métodos. Tente acessar os atributos
diretamente e verifique o que acontece. */

class Calculadora {
    private operando1 : number;
    private operando2 : number;
    constructor(operando1 : number, operando2 : number) {
        this.operando1 = operando1;
        this.operando2 = operando2;
    }
}

    let calculadora : Calculadora[] = new Calculadora[0];

function TesteDeFuncao() {
    if (this.operando1 + this.operando2 % 2 === 0) {
        return true;
    }else{
        return false;
    }
}
    console.log(TesteDeFuncao);

class Operacao {
    public somar : number;
    public subtrair : number;
    constructor(somar : number, subtrair : number) {
        this.somar = somar;
        this.subtrair = subtrair;
    }
}

    let operacao : Operacao[] = new Operacao[0];

function TesteDeFuncao2() {

function arrayToString3(numeros: number[]): string {
        let resultado: string = '';
        numeros.forEach( numero => resultado +=  numero + '-');
        
        return resultado.slice(0, resultado.length-1);
    }

    console.log(TesteDeFuncao2);
    console.log(arrayToString3);
    
function Exibir(...parametros: string[]): void {
        for (let i = 0; i < parametros.length; i++) {
            console.log(parametros[i]);
        }
    }

    console.log(Exibir);
    
function Exibir2(...parametros: string[]): void {
        parametros.forEach( p => console.log(p));
    }

    console.log(Exibir2);
}