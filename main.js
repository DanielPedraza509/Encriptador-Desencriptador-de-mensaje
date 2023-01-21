var mensaje = document.getElementById("entrada").value;

function encriptar(mensaje){

    let mensaje1 = document.getElementById("entrada").value.toLowerCase();   //toLowerCase cambia las letras a minusculas
    let mensajeEncriptado ; 
    let nuevoMensaje ; 
 
    if(mensaje1 == ""){
        document.getElementById("mensajeH2").style.visibility = "visible";
        document.getElementById("mensajeH3").style.visibility = "visible";
        document.getElementById("Persona").style.visibility = "visible";
        document.getElementById("mensajeResultado").style.visibility = "hidden" ;
        document.getElementById("mensajeH2").style.visibility = "visible";
       // alert("Campo de texto vacío") ;
       }
       else{
            
           for(var i = 0 ; i < mensaje1.length ; i++){
               if(mensaje1[i] == "a"){
                    mensajeEncriptado = mensaje1.replace("a","ai") ; 
               }
               else if(mensaje1[i] == "o"){
                    mensajeEncriptado = mensaje1.replace("o","enter") ; 
               }
             mensajeEncriptado ; 
           }
           document.getElementById("mensajeResultado").innerHTML = mensajeEncriptado;
           document.getElementById("mensajeResultado").style.visibility = "visible" ;
           document.getElementById("botonCopiar").style.visibility = "visible";
           document.getElementById("mensajeH2").style.visibility = "hidden";
           document.getElementById("mensajeH3").style.visibility = "hidden";
           document.getElementById("Persona").style.visibility = "hidden";
       }

    return  ; 
}

function desencriptar(mensaje){
    return alert("Mensaje desencriptado")
}

    


 
var buttonEncriptar = document.getElementById("boton1") ; 
buttonEncriptar.onclick = encriptar ; 

var buttonDesencriptar = document.getElementById("boton2") ; 
buttonDesencriptar.onclick = desencriptar ; 


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

