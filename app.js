
let numeroSecreto=0;
let contador=0;
let listaNumeros=[];
let numeroMaximo=10;

function asignarTextoElemento(elemento, texto){
    let elementoHtml=document.querySelector(elemento);
    elementoHtml.innerHTML=texto;
    return;
}

function verificarIntento(){
    
    let numeroUsuario=parseInt(document.getElementById("numeroUsuario").value);
    
    if (numeroUsuario===numeroSecreto) {
            asignarTextoElemento("p", `Acertaste el numero en ${contador} ${(contador ===1) ? "vez" : "veces"} `);
            document.getElementById("reiniciar").removeAttribute("disabled");
    }else{
    
        if(numeroUsuario>numeroSecreto){
            asignarTextoElemento("p", "El numero secreto es menor");
            
        }else{
            asignarTextoElemento("p", "El numero secreto es mayor");          
        }
        limpiarCaja();
        contador++;
    }
    return;
}

function limpiarCaja() {
    document.querySelector("#numeroUsuario").value="";
    
}

function generarNumeroSecreto() {
    let numGenerado= Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numGenerado);
    console.log(listaNumeros);

    if (listaNumeros.length==numeroMaximo) {
        asignarTextoElemento("p", "ya se sortearon todos los numeros posibles");
    }else{

        if (listaNumeros.includes(numGenerado)) {
            return generarNumeroSecreto();
        }else {
            listaNumeros.push(numGenerado);
            return numGenerado;
        }
    }

    
}

function condicionesIniciales() {
    asignarTextoElemento("h1", "Juego del número secreto funcion");
    asignarTextoElemento("p", `Escoje un número entre 1 y ${numeroMaximo}`);
    numeroSecreto=generarNumeroSecreto();
    contador=1;
}

function reiniciarJuego() {
    limpiarCaja();

    condicionesIniciales();

    document.getElementById("reiniciar").setAttribute("disabled", true);

    
}

condicionesIniciales();

