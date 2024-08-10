var setaDireita = window.document.getElementById("setadireita")
var Leonardo = window.document.getElementById("leonardo")
var samantha = window.document.getElementById("samantha")
var Bruna = window.document.getElementById("Bruna")
var setaEsquerda = window.document.getElementById("setaesquerda")

function RolarParaDireita() {
    Leonardo.style ="display:none"
    Bruna.style ="display:flex"
    setaDireita.style ="display:none"
    setaEsquerda.style ="display:flex; margin-top:110px"
}

function RolarParaEsquerda(){
    Leonardo.style ="display:flex"
    Bruna.style ="display:none"
    setaDireita.style ="display:flex"
    setaEsquerda.style ="display:none"
}