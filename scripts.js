let numero= 0
function iniciar(){
    numero= numero + 1
    mostrarNaTela()
}

function zerar(){
    numero= numero- 1
    mostrarNaTela()
}

function mostrarNaTela(){
    const p = document.querySelector('p')
    p.innerText= numero
}

mostrarNaTela()