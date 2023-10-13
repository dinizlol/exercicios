function tabuada() {
    var num = document.getElementById('ntabu')
    var tabu = document.getElementById('tabuada')
    var testando = document.getElementById('teste')
    if (num.value.length == 0) {
        window.alert('Digite um número')
    } else {
        var n = Number(num.value)
        for (var i = 1; i <= 10; i++) {
            var item = document.createElement('option')
            item.text = `${n} x ${i} = ${n*i}`
            item.value = `tab${i}`
            tabu.appendChild(item)
        }   
    }
    
}

