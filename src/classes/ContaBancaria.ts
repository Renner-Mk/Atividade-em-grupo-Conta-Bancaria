// ### Passos:

// 1. **Criar Classe Base:**
//     - Criar a classe **`ContaBancaria`** com os seguintes atributos:
//         - **`numeroConta: string`**
//         - **`saldo: number`**
//     - Implementar um construtor para inicializar **`numeroConta`** e **`saldo`**.

// 2. **Implementar Getters e Setters:**
//     - Criar getters para **`numeroConta`** e **`saldo`** para permitir acesso externo a esses atributos.
//     - Criar um setter para **`saldo`** que valida se o novo saldo não é negativo.

export abstract class ContaBancaria {
    
    constructor(protected numeroConta: string, protected saldo: number){
        
    }
    
    getNumeroConta():string{
        return this.numeroConta
    }

    getSaldo():number {
        return this.saldo
    }
    
    setNumeroConta(numeroConta: string): void{
        this.numeroConta = numeroConta
    }

    setSaldo(saldo: number): void{
        this.saldo = saldo
    }

    saque (valor: number): void {
       if(this.saldo >= valor ){
        this.saldo = this.saldo - valor
        console.log("Valor retirado com sucesso!.")
       } else {
        console.log("Valor de saque superior ao saldo.")
       }
    }

    deposito (valor: number): void{
        this.saldo+= valor
    }

    extrato(): void{
        console.log(`Valor de saldo atual: R$ ${this.saldo}`)
    }
}
// 3. **Criar Subclasses:**
//     - Implementar a classe **`ContaCorrente`** que estende **`ContaBancaria`**.
//         - Adicionar o atributo **`chequeEspecial: number`**.
//         - Implementar getters e setters para **`chequeEspecial`**, validando que não seja negativo.
//         - Implementar o método **`usarChequeEspecial(valor: number)`** que permite o uso do cheque especial, se disponível.
//         - Implementar a classe **`ContaPoupanca`** que estende **`ContaBancaria`**.
//         - Não possui atributos adicionais, apenas herda **`ContaBancaria`**.
//         - **`ContaPoupanca`** terá um método **`calcularJuros(taxa: number)`** para calcular juros sobre o saldo.


export class ContaCorrente extends ContaBancaria {
    constructor (
        numeroConta: string, 
        saldo: number, 
        private chequeEspecial: number
    ){
        super(numeroConta, saldo)
    }

    getChequeEspecial(): number {
        return this.chequeEspecial
    }

    setChequeEspecial(chequeEspecial: number): void{
       if (chequeEspecial >= 1) {
        this.chequeEspecial= chequeEspecial
        } else {
            console.log("Inserir valor positivo.")
        }
    }

    usarChequeEspecial(valor: number){
        if (this.chequeEspecial >= valor){
            this.chequeEspecial= this.chequeEspecial-valor
            console.log(`Limite de cheque especial utilizado. Valor atual= ${this.chequeEspecial}`)
        } else {
            console.log("Valor maior que o limite de cheque especial.")
        }
    }

}

export class ContaPoupanca extends ContaBancaria{
    calcularJuros(taxa:number): void{
        let newSaldo = (this.getSaldo()) + ((this.getSaldo()) * (taxa / 100))
        this.setSaldo(newSaldo) 

        console.log(`Valor atualizado com juros a conta poupança: ${this.saldo}`)
    }
}


