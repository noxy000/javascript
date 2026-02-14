function contar() {
    var inicio = document.getElementById('txtn')
    var fim = document.getElementById('txtfim')
    var passo = document.getElementById('txtp')
    var contdor = document.getElementById('cont')
    let i = Number(inicio.value)
    
    for (i; inicio.value < fim.value; i += passo.value) {
        contdor.innerText = (inicio.value)
    }
}

//aula 14 ex1 5m