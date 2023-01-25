const entrada = document.querySelector(".texto-Entrada");
const mensaje = document.querySelector(".mensajeResultado"); 



function btnEncriptar(){
    const textoEncriptado = encriptar(entrada.value) ; 
    mensaje.value = textoEncriptado ;
    entrada.value = "" ; 
  }

function btnDesencriptar(){
    const textoEncriptado = desencriptar(entrada.value) ; 
    mensaje.value = textoEncriptado ;
    entrada.value = "" ; 
    
}
  

function encriptar(stringEncriptada){ 
    let matrizCodigo = [["e","enter"], ["i","imes"], ["a","ai"], ["o","ober"], ["u","ufat"]] ; 
    stringEncriptada = stringEncriptada.toLowerCase(); 
    if(stringEncriptada == ""){
       aparecer(); 
       alert("Campo de texto vacío") ;
       }
    else{
        for(let i = 0 ; i < matrizCodigo.length ; i++){
            if(stringEncriptada.includes(matrizCodigo[i][0])){
                stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]);
            }
          }
          desaparecer();
    }
    return stringEncriptada; 
}

function desencriptar(stringDesencriptada){
    let matrizCodigo = [["e","enter"], ["i","imes"], ["a","ai"], ["o","ober"], ["u","ufat"]] ; 
    stringDesencriptada = stringDesencriptada.toLowerCase(); 

    for(let i = 0 ; i < stringDesencriptada.length ; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]) ; 
        }
    }
    return stringDesencriptada ; 
}


let copyButton = document.getElementById("botonCopiar");
let textToCopy = document.getElementById("mensajeResultado");

    if (navigator.clipboard) {
      copyButton.addEventListener("click", function() {
        navigator.clipboard.writeText(textToCopy.value).then(
          function() {
            alert("Texto copiado en portapapeles.");
            mensaje.value = "" ;
          },
          function() {
            console.log("Error copying text to clipboard.");
          }
        );
      });
    } else {
      console.log("Clipboard API not supported in this browser.");
    }  


    function aparecer(){
        document.getElementById("mensajeH2").style.visibility = "visible";
        document.getElementById("mensajeH3").style.visibility = "visible";
        document.getElementById("Persona").style.visibility = "visible";
        document.getElementById("mensajeResultado").style.visibility = "hidden" ;
        document.getElementById("mensajeH2").style.visibility = "visible";
        document.getElementById("botonCopiar").style.visibility = "hidden";
    }

    function desaparecer(){
        document.getElementById("mensajeResultado").style.visibility = "visible" ;
        document.getElementById("botonCopiar").style.visibility = "visible";
        document.getElementById("mensajeH2").style.visibility = "hidden";
        document.getElementById("mensajeH3").style.visibility = "hidden";
        document.getElementById("Persona").style.visibility = "hidden";
    }
