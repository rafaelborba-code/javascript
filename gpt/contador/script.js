function diminuir(quantidade) {
    let numeroElemento = document.getElementById('numero')
    let numero = Number(numeroElemento.textContent)
    let novoNumero = numero-quantidade
    numeroElemento.textContent = novoNumero
}

function aumentar(quantidade){
    let numeroElemento = document.getElementById('numero')
    let numero = Number(numeroElemento.textContent)
    let novoNumero = numero + quantidade
    numeroElemento.textContent = novoNumero
}