
function calcular() {
    var iniph = document.getElementById('inicio')
    var finph = document.getElementById('fim')
    var passph = document.getElementById('passo')
    var res = document.getElementById('res')
    
    if (iniph.value.length == 0 || finph.value.length == 0 || passph.value.length == 0) {
        window.alert('Preencha todos os campos')
    } else {
        res.innerHTML = 'Calculando: <br>'
        var inic = Number(iniph.value)
        var fin = Number(finph.value)
        var pass = Number(passph.value)
        if (pass <= 0) {
            window.alert('Impossível calcular o passo, considerando o passo = 1')
            pass = 1
        }
        if (inic < fin) {
            for (i = inic; i <= fin; i+= pass)
                res.innerText += ` -> ${i} \u{1F4A8} `
        } else {
            for (i = inic; i >= fin; i-= pass)
                res.innerHTML += ` -> ${i} \u{1F4A8} `
        }
        }   
            res.innerText += `\u{1F3C1}`
    }