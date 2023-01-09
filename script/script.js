
function selecionarOpcao (elemento, tipo){
    let selecionado_anteriormente = document.querySelector("." + tipo);
    if (selecionado_anteriormente != null) {
        selecionado_anteriormente.classList.remove(tipo);        
    }   
    elemento.classList.add(tipo);     

    verificaPedidoCompleto ();
}

function  verificaPedidoCompleto (){
    let pratoPrincipal = document.querySelector(".prato-selecionado");
    let bebida = document.querySelector(".bebida-selecionada");
    let sobremesa = document.querySelector(".sobremesa-selecionada");

    if ((pratoPrincipal != null)&&(bebida != null)&&(sobremesa != null)){
        habilitaBotao();
    }
}

function habilitaBotao(){
    let botao = document.querySelector(".botao-pedir");
    botao.classList.add("botao-habilitado");
    botao.innerHTML = "Fechar pedido";
    botao.setAttribute("onclick", "fechaPedido();");
}

