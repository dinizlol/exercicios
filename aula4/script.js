
function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var oi = window.document.getElementById('horadodia')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        oi.innerHTML = '<h1>Bom dia!</h1>'
        img.src = 'manha.jpg'
        document.body.style.background = '#e2dc87'
    } else if (hora > 12 && hora < 18) {
        oi.innerHTML = '<h1> Boa tarde!</h1>'
        img.src = 'tarde.jpg'
        document.body.style.background = '#011b6e'
    } else {
        oi.innerHTML = '<h1>Boa noite!</h1>'
        img.src = 'noite.jpg'
        document.body.style.background = '#0f111a'
    }
}   