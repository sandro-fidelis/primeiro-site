var intervalo = 3000;

function slide1(){
    document.getElementById("banner").src = "imagens/bandeiraoficial.png";
    setTimeout("slide2()",intervalo);
}

function slide2(){
    document.getElementById("banner").src = "imagens/sfc.jpg";
    setTimeout("slide3()",intervalo);
}

function slide3(){
    document.getElementById("banner").src = "imagens/simbolos2.png";
    setTimeout("slide1()",intervalo);
}
