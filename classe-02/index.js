const carro = {
    ligado: false,
    velocidade: 0,
    ligar: function () {
        if (this.ligado === true) {
            console.log("Este carro já está ligado.");
        } else {
            this.ligado = true;
            console.log(`Carro ligado. Velocidade: ${this.velocidade}`);
        }
    },
    desligar: function () {
        if (this.ligado === true) {
            this.ligado = false;
            this.velocidade = 0;
            console.log(`Carro desligado. Velocidade: ${this.velocidade}`);
        } else {
            console.log("Este carro já está desligado.");
        }
    },
    acelerar: function () {
        if (this.ligado === true) {
            this.velocidade += 10;
            console.log(`Carro ligado. Velocidade: ${this.velocidade}`);
        } else {
            console.log("Não é possível acelerar um carro desligado.");
        }
    },
    desacelerar: function () {
        if (this.ligado === true) {
            this.velocidade -= 10;
            console.log(`Carro ligado. Velocidade: ${this.velocidade}`);
        } else {
            console.log("Não é possível desacelerar um carro desligado.");
        }
    },
};

//Array para modificar o status do carro
const statusCarro = [
    "desligar",
    "ligar",
    "ligar",
    "acelerar",
    "acelerar",
    "desacelerar",
    "desligar",
    "acelerar",
    "desacelerar",
];
//Funçao para executar o array e alterar o status do carro

function alteraStatusCarro(statusCarro) {
    for (const status of statusCarro) {
        if (status === "ligar") {
            carro.ligar();
        } else if (status === "desligar") {
            carro.desligar();
        } else if (status === "acelerar") {
            carro.acelerar();
        } else {
            carro.desacelerar();
        }
    }
}

//inicia o programa
alteraStatusCarro(statusCarro);