function carregar(){
    var msg = window.document.getElementById('msg')
    var msg2 = window.document.getElementById('msg2')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    
    if(hora >= 0 && hora < 12){
    // bom dia
    img.src = 'manha.png'
    document.body.style.background = '#e2cd9f'
    msg2.innerText='Bom dia'
    }else if(hora >= 12 && hora < 18)
    {
    
    img.src = 'tarde.png'
    document.body.style.background = '#b9846f'
    msg2.innerText = 'Boa Tarde'

    }else{
        //Boa noite
        img.src= 'noite.png'
        document.body.style.background = '#515154'
        msg2.innerText = 'Boa Noite'
    }
}