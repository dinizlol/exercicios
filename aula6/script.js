var numero = document.getElementById('numero_usuario')
var lista = document.getElementById('lista')
var res = document.getElementById('resultado')

var lista_numeros = []


function isNumber(n) {
    if (Number(n) == 0 || Number(n) > 100) {
        return false 
    } else {
        return true
    }
}   

function inLista(n, list) {
    if (list.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (!isNumber(numero.value) || inLista(numero.value, lista_numeros)) {
        window.alert('Valor inválido ou já encontrado na lista')
    } else {
        lista_numeros.push(Number(numero.value))
        var item = document.createElement('option')
        item.text = `valor ${numero.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML = ''
    } 
    numero.value = ''    
    numero.focus()
}


function finalizar() {
    if (lista_numeros.length == 0) {
        window.alert('Lista vazia')
    } else {
    var maior = lista_numeros[0]
    var menor = lista_numeros[0]
    var soma = 0
    for (let pos in lista_numeros) {
        soma += lista_numeros[pos]
        if (lista_numeros[pos] > maior) 
            maior = lista_numeros[pos]
        if (lista_numeros[pos] < menor)
            menor = lista_numeros[pos]
    }

    res.innerHTML = `<p>Ao todos, temos ${lista_numeros.length} cadastrados.</p>`
    res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
    res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
    res.innerHTML += `<p>A soma de todos os números foi de ${soma}.</p>`
    res.innerHTML += `<p>A média dos números é de ${soma / lista_numeros.length}.</p>`
    }
}   
