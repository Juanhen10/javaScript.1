//Factory Function(função de Fabrica)
const celular = {
    marcaCelular: 'ASUS',
    tamanhoTela : {
        vertical: 155,
        horizontal: 75
    },
    capacidadeBateria: 5000,
    ligar: function(){
        console.log("fazendo ligação...")
    }
}
function criarCelular(marcaCelular, tamanhoTela, capacidadeBateria){
    return {
        marcaCelular,
        tamanhoTela,
        capacidadeBateria,
        ligar(){
            console.log("fazendo ligação...")
        }
    }    
}

function carros(marca, modelo, velocidade){
    return {
        marca,
        modelo,
        velocidade,
        criado(){
            console.log('carro criado')
        }
    }
}

const carro1 = carros('Civic', 'honda',1200)
const celular1 = criarCelular('Zenfone', 5.5, 5000);
console.log(celular1)
console.log(carro1)