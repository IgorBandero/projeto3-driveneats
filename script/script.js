
function selecionarOpcao (elemento, tipo){
    let selecionado_anteriormente = document.querySelector("." + tipo);
    if (selecionado_anteriormente != null) {
        selecionado_anteriormente.classList.remove(tipo);        
    }   
    elemento.classList.add(tipo);     
}
    