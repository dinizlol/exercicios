function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO!] Verifice os dados')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - fano.value
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'mulher'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'bebe.jpg')
            } else if (idade < 18) {
                img.setAttribute('src', 'adolem.jpg')
            } else if (idade < 60) {
                img.setAttribute('src', 'adultom.jpg')
            } else if (idade => 60) {
                img.setAttribute('src', 'idosom.jpg')
            }
        } else if (fsex[1].checked) {
            genero = 'homem'
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'bebe.jpg')
            } else if (idade < 18) {
                img.setAttribute('src', 'adoleh.jpg')
            } else if (idade < 60) {
                img.setAttribute('src', 'adultoh.jpg')
            } else if (idade => 60) {
                img.setAttribute('src', 'idosoh.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Você é ${genero} e tem ${idade} anos`
        res.appendChild(img)
        

    }   

}


