const contaBancaria = {
    nome: "Maria",
    saldo: 0,
    historico: [],
    addHistorico: function (tipoOperacao, valorTipo) { //método para inserir um objeto ao array. O objeto sempre será inserido no inicio do array (seguindo o padrão dde um histórico).
        this.historico.unshift({ tipo: tipoOperacao, valor: (valorTipo / 100) });
    },
    depositar: function (valor) {
        this.saldo = valor;
        this.addHistorico("Deposito", valor);

        return console.log(`Deposito de R$${valor / 100} realizado para o(a) cliente: Maria`);

    },
    sacar: function (valor) {

        if (this.saldo < valor) {
            return console.log(`Saldo insuficiente para essa transação`);
        } else {
            this.saldo = this.saldo - valor;
            this.addHistorico("Saque", valor);
        }
        return console.log(`Saque de R$${valor / 100} realizado para o(a) cliente: Maria`);
    },
    extrato: function () {
        console.log(`Extrato de ${this.nome} - Saldo: R$${this.saldo / 100}\nHistórico:`);
        for (const aux of this.historico) {
            console.log(`${aux.tipo} de R$${(aux.valor).toFixed(2)}`);
        }
    }



};

contaBancaria.depositar(10000);
contaBancaria.sacar(50000);
contaBancaria.sacar(5000);
contaBancaria.extrato();

