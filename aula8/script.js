function executar() {
var res = document.getElementById('testando')
var num = document.getElementById('numero')
var n = Number(num.value)
var lista = []
lista.push(n)
res.innerText = lista.join(', ')

}
