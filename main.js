function Eletronicos(marca, modelo) {
    this.marca = marca;
    this.modelo = modelo;
    this.estaLigado = false;

    this.liga = function() {
        console.log("Ligando aparelho.");
        this.estaLigado = true;
    };
    this.desliga = function() {
        console.log("Desligando aparelho.");
        this.estaLigado = false;
    };
}

function TV(marca, modelo, tamTela, tecnologia) {
    this.tamTela = tamTela;
    this.tecnologia = tecnologia;
    let canalEscolhido;
    
    this.setCanal = function(canal) {
        if(this.estaLigado) {
            if(typeof canal === 'number') {
                canalEscolhido = canal;
            }
            else {
                console.log('Canal inválido');
            }
        }
        else {
            console.log('A Tv está desligada.');
        }
    }

    this.getCanal = function() {
        return canalEscolhido;
    }

    Eletronicos.call(this, marca, modelo);
}

function VideoGame(modelo, marca, memoria) {
    this.memoria = memoria;
    let jogoEscolhido;
    let ultimoJogoComprado;
    
    this.setJogo = function(jogo) {
        if(this.estaLigado) {
            jogoEscolhido = jogo;
        }
        else {
            console.log('O Videogame está desligado.');
        }
    }
    
    this.getJogo = function() {
        return jogoEscolhido;
    }

    this.compraJogo = function(jogo) {
        ultimoJogoComprado = jogo;
        return `Compra do jogo ${ultimoJogoComprado} realizada com sucesso.`
    }

    Eletronicos.call(this, marca, modelo);
}

//Instâncias TV
const tvSala = new TV('LG', 'UHD', '55', '4K');
const tvQuarto = new TV('Samsung', 'Smart', '43', 'LED');

//Instâncias Videogame
const meuVideogame = new VideoGame('Sony', 'PS4-Slim', '1TB');
const videoGame2 = new VideoGame('Microsoft', 'XBOX - Series X', '2TB');

//Testes TV
console.log(Object.values(tvSala));
/*
tvSala.liga();
tvSala.setCanal(39);
console.log(tvSala.getCanal());
console.log(tvSala)
console.log(Object.keys(tvSala));
console.log(Object.values(tvSala));
tvSala.desliga();
console.log(Object.values(tvSala)); 
*/

//Testes Videogame
console.log(Object.values(meuVideogame));
/*
meuVideogame.liga();
meuVideogame.setJogo('Fifa 23');
console.log(meuVideogame.getJogo());
console.log(meuVideogame)
console.log(Object.keys(meuVideogame));
console.log(Object.values(meuVideogame));
console.log(meuVideogame.compraJogo('Call of Duty'));
meuVideogame.desliga();
console.log(Object.values(meuVideogame));
*/




