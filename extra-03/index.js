const carrinho = {
    nomeDoCliente: "Guido Bernal",
    produtos: [
        {
            id: 1,
            nome: "Camisa",
            qtd: 1,
            precoUnit: 10000
        },
        {
            id: 2,
            nome: "Bermuda",
            qtd: 2,
            precoUnit: 5000
        }
    ],
    imprimirResumo: function () {

        let totalDeItens = 0;
        let totalAPagar = 0;

        for (const produto of this.produtos) {
            totalDeItens += produto.qtd;
            totalAPagar += (produto.precoUnit * produto.qtd);
        }
        console.log(`Cliente: ${carrinho.nomeDoCliente} \nTotal de itens: ${totalDeItens} itens\nTotal a pagar: R$${(totalAPagar / 100).toFixed(2)}`);

    },
    addProduto: function (nomeDoProduto) {
        if (this.id === produto.id) {
            this.qtd += produto.qtd;
        } else {
            this.produtos.unshift(produto);
        }

    },
    imprimirDetalhes: function () {
        let totalDeItens = 0;
        let totalAPagar = 0;

        console.log(`Cliente: ${this.nomeDoCliente}\n`)

        for (let i = this.produtos.length, j = 1; i > 0; i--, j++) {


            console.log(`Item ${j} - ${this.produtos[i - 1].nome} - ${this.produtos[i - 1].qtd} uni - R$${((this.produtos[i - 1].qtd * this.produtos[i - 1].precoUnit) / 100).toFixed(2)}`);


        }

        for (const produto of carrinho.produtos) {
            totalDeItens += produto.qtd;
            totalAPagar += (produto.precoUnit * produto.qtd);
        }
        console.log(`\nTotal de itens: ${totalDeItens} itens\nTotal a pagar: R$${(totalAPagar / 100).toFixed(2)}`);


    },
    calcularTotalDeItens: function () {
        let totalDeItens = 0;

        for (const produto of this.produtos) {
            totalDeItens += produto.qtd;
        }

        return totalDeItens;

    },
    calcularTotalAPagar: function () {

        let totalAPagar = 0;

        for (const produto of this.produtos) {
            totalAPagar += (produto.precoUnit * produto.qtd);
        }
        return ((totalAPagar / 100).toFixed(2));

    },
    calcularDesconto: function () {
        let menorPreco = (this.produtos[0].precoUnit * this.produtos[0].qtd);

        for (const produto of this.produtos) {
            if ((produto.qtd * produto.precoUnit) < menorPreco) {
                menorPreco = (produto.qtd * produto.precoUnit);
            }
        }

        if ((this.calcularTotalDeItens() > 4) && (this.calcularTotalAPagar() < 100)) {

            console.log("Ciente comprou mais de 5 itens, o item de menor valor sairá de graça");
            return menorPreco;

        } else if ((this.calcularTotalDeItens() < 5) && (this.calcularTotalAPagar() > 100)) {

            console.log("Desconto de 10%");
            return (this.calcularTotalAPagar() * 0.10);

        } else if ((this.calcularTotalAPagar() > 100) && (this.calcularTotalDeItens() > 4)) {

            console.log("Cliente comprou mais de 5 itens e o valor da compra é acima de R$100,00 reais o sistema irá calcular o melhor desconto para o cliente.");

            if (menorPreco > (this.calcularTotalAPagar() * 0.10)) {

                return menorPreco;

            } else {

                return this.calcularTotalAPagar() * 0.10;
            }

        }

        return 0;

    }

};


