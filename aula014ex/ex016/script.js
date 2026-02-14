function contar() {
    // 1. Pegamos os elementos
    var resInicio = document.getElementById('txtn')
    var resFim = document.getElementById('txtfim')
    var resPasso = document.getElementById('txtp')
    var contdor = document.getElementById('cont')

    // 2. Convertemos os VALORES para números de verdade
    var i = Number(resInicio.value)
    var f = Number(resFim.value)
    var p = Number(resPasso.value)

    // Limpa o que estava escrito antes
    contdor.innerText = ''

    // 3. O loop agora usa as variáveis numéricas
    for (var c = i; c <= f; c += p) {
        contdor.innerText += ` ${c} \u{1F449}` // Acumula o valor e põe um emoji
    }
    contdor.innerText += ` \u{1F3C1}` // Bandeirinha no final
}