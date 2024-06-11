
Window.onload = limpiar;
function limpiar(){
    document.getElementById("text").value = "";
  }

Window.onload = agrandarLetra;  
function agrandarLetra(){
    document.getElementById("text").style.fontSize = "17px";
}

Window.onload = cambiarFondo;  
function cambiarFondo(){
      document.getElementById('text').style.background="pink";
}

Window.onload = tamañoImg;  
function tamañoImg(){
    document.getElementById('MyImg').style='width:550px; height:520px';
}
