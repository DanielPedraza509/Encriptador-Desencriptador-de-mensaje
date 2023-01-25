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
       alert("Campo de texto vacío") ;
       }
    else{
        for(let i = 0 ; i < matrizCodigo.length ; i++){
            if(stringEncriptada.includes(matrizCodigo[i][0])){
                stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1]);
            }
          }
        }
    return stringEncriptada; 
}

function desencriptar(stringDesencriptada){
    
    let matrizCodigo = [["enter","e"], ["imes","i"], ["ai","a"], ["ober","o"], ["ufat","u"]] ; 
    stringDesencriptada = stringDesencriptada.toLowerCase(); 

    for(let i = 0 ; i < stringDesencriptada.length ; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][0])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]) ; 
        }
    }
    return stringDesencriptada ; 
}


let copyButton = document.getElementById("botonCopiar");
let textToCopy = document.getElementById("mensajeResultado");

    if (navigator.clipboard) {
      copyButton.addEventListener("click", function() {
        navigator.clipboard.writeText(textToCopy.innerText).then(
          function() {
            alert("Texto copiado en portapapeles.");
          },
          function() {
            console.log("Error copying text to clipboard.");
          }
        );
      });
    } else {
      console.log("Clipboard API not supported in this browser.");
    }  

