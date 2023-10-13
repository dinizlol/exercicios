var lista_numeros = []

function adicionar() {
    var numero = document.getElementById('numero_usuario')
    var lista = document.getElementById('lista')
    var n = Number(numero.value)
    var item = document.createElement('option')
    item.text = `valor ${n} adicionado.`
    lista.appendChild(item)
    return lista_numeros.push(n)
}



function executar() {
    var res = document.getElementById('resultado')
    lista_numeros.sort
    var ultimo = lista_numeros.length - 1
    let soma = 0
    for (let i = 0; i < lista_numeros.length; i++) {
        soma += lista_numeros[i]
    }
    res.innerText = `Ao todos, temos ${lista_numeros.length} cadastrados.`
    res.innerText += `O maior valor informado foi ${lista_numeros[ultimo]}`
    res.innerText += `O menor valor informado foi ${lista_numeros[0]}`
    res.innerText += `A soma de todos os números foi de ${soma}`
    res.innerText += `A média dos números é de ${soma / lista_numeros.length}.`
    
}   
