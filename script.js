var auxiliar = [];
var copid = "";

const inputTexto = document.querySelector(".input-texto");   //entrada de datos
const mensaje = document.querySelector(".mensaje");          //salida de datos

function btnEncriptar(){
    mensaje.value = "";
    const textoEncriptado = encripta();
    mensaje.value = textoEncriptado;
    mensaje.style.backgroundImage = "none";
    inputTexto.value = ""; 
}

function btnDesencriptar(){
    mensaje.value = "";
    const textoDesencriptado = desencriptador();
    mensaje.value = textoDesencriptado;
    mensaje.style.backgroundImage = "none";
    inputTexto.value = "";
}

function btnCopiar(){
    var copid = mensaje.value;
    inputTexto.value = "";
    inputTexto.value = copid;
    mensaje.value = "";
}

function tilde(event) {
    var dato = event.which; //esto convierte a unicode
    console.log(dato);     
    if( dato >= 97 && dato <= 122 || dato == 32) {        
        console.log("usable");        		
    }
    else {        
        console.log("no usable");
        alert("*** No use mayúsculas, acentos ni simbolos. Bórrelo y continue ***");         
        inputTexto.value = "";
        console.log(dato);
        location.reload(); //recarga pagina
        document.getElementById("input-tex").autofocus();
    }
}

function encripta(){
    auxiliar = [];    // muy importante
    var expresion = inputTexto.value;
    for(i=0; i<expresion.length; i++){    		
        console.log(expresion[i]);
        if(expresion[i] == "a"){
            auxiliar.push("ai");
        }
        if(expresion[i] == "e"){
            auxiliar.push("enter");
        }
        if(expresion[i] == "i"){
            auxiliar.push("imes");
        }
        if(expresion[i] == "o"){
            auxiliar.push("ober");
        }
        if(expresion[i] == "u"){
            auxiliar.push("ufat");
        }
        if(expresion[i] != "a" && expresion[i] != "e" && expresion[i] != "i" && expresion[i] != "o" && expresion[i] != "u"){
            auxiliar.push(expresion[i]);
        }                   
    }
    var union = auxiliar.join("");
    return union;
}	

function desencriptador(){
    auxiliar = []; // muy importante
    var expresion = inputTexto.value;    
    for(i=0 ; i<expresion.length ; i++){
        if(expresion[i] != "a" && expresion[i] != "e" && expresion[i] != "i" && expresion[i] != "o" && expresion[i] != "u"){		
            auxiliar.push(expresion[i]);
            console.log(i +auxiliar);
        }
        if(expresion[i] == "a"){
            if(expresion[i+1] == "i"){
                auxiliar.push("a");
                console.log( i + auxiliar);
                i=i+1;
            }
        }
        if(expresion[i] == "e"){
            if(expresion[i+1] == "n" && expresion[i+2] == "t" && expresion[i+3] == "e" && expresion[i+4] == "r"){
                auxiliar.push("e");
                console.log( i+auxiliar);
                i=i+4;
            }
        }
        if(expresion[i] == "i"){
            if(expresion[i+1] == "m" && expresion[i+2] == "e" && expresion[i+3] == "s"){
                auxiliar.push("i");
                console.log( i+auxiliar);
                i=i+3;
            }
        }
        if(expresion[i] == "o"){
            if(expresion[i+1] == "b" && expresion[i+2] == "e" && expresion[i+3] == "r"){
                auxiliar.push("o");
                console.log( i+auxiliar);
                i=i+3;
            }
        }
        if(expresion[i] == "u"){
            if(expresion[i+1] == "f" && expresion[i+2] == "a" && expresion[i+3] == "t"){
                auxiliar.push("u");
                console.log( i+auxiliar);
                i=i+3;
            }
        }
        console.log(i);
    
        if(expresion[i] == " "){
            console.log(i+ "fin");            
        }
    }
    var union = auxiliar.join("");
    return union;
}