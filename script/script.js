let nomePratoPrincipal;
let nomeBebida;
let nomeSobremesa;

let valorPratoPrincipal;
let valorBebida;
let valorSobremesa;
let total;

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

    nomePratoPrincipal = (document.querySelector(".prato-selecionado .nome-prato")).innerHTML;
    nomeBebida = (document.querySelector(".bebida-selecionada .nome-bebida")).innerHTML;
    nomeSobremesa = (document.querySelector(".sobremesa-selecionada .nome-sobremesa")).innerHTML;

    valorPratoPrincipal = parseFloat((document.querySelector(".prato-selecionado .preco-prato").innerHTML).replace(',', '.'));
    valorBebida = parseFloat((document.querySelector(".bebida-selecionada .preco-bebida").innerHTML).replace(',', '.'));
    valorSobremesa = parseFloat((document.querySelector(".sobremesa-selecionada .preco-sobremesa").innerHTML).replace(',', '.'));
    total = valorPratoPrincipal + valorBebida + valorSobremesa;
    
    if ((pratoPrincipal != null)&&(bebida != null)&&(sobremesa != null)){
        habilitaBotao();
    }
}

function habilitaBotao(){
    let botao = document.querySelector(".botao-pedir");
    botao.classList.add("botao-habilitado");
    botao.innerHTML = "Fechar pedido";
    botao.disabled = false;
    botao.setAttribute("onclick", "fechaPedido();");
}

function fechaPedido(){
    var valorTotal = total.toFixed(2);
    window.open('https://wa.me/5548991712977?text=Olá,%20gostaria%20de%20fazer%20o%20pedido:%0a-%20Prato:%20' + nomePratoPrincipal + '%0a-%20Bebida:%20' + nomeBebida + '%0a-%20Sobremesa:%20' + nomeSobremesa + '%0a%20Total:%20R$%20' + valorTotal);
}
