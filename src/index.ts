import { ContaCorrente, ContaPoupanca} from "./classes/ContaBancaria"

const contaCorrente = new ContaCorrente('01', 1000, 200)
const contaPoupanca = new ContaPoupanca('02', 500)

// 4. **Testar o Sistema:**
//     - Criar instâncias das classes **`ContaCorrente`** e **`ContaPoupanca`**.
//     - Realizar operações como depósitos, saques, uso do cheque especial e cálculo de juros (caso da **`ContaPoupanca`**).
//     - Verificar se as validações nos getters e setters estão funcionando corretamente.

contaCorrente.usarChequeEspecial(100)
contaPoupanca.calcularJuros(10)

contaCorrente.saque(5)
contaPoupanca.saque(5)

contaCorrente.extrato()
contaPoupanca.extrato()

contaCorrente.deposito(5)
contaPoupanca.deposito(5)

contaCorrente.extrato()
contaPoupanca.extrato()

contaCorrente.saque(1100)