import { Game } from "../Game/Game.js";

const JUEGO = new Game();

let guardar = document.getElementById("guardar");

guardar.onclick = () => {
    leer();
}


export function leer(){

    console.log("sisa");
    let num = document.getElementsByName("number")[0].value; //Se obtiene la entrada del usuario
    
    let form = document.getElementById("formulario");
    let player;
    form.innerHTML = "";

    for (let i = 0; i < num; i++) {
        player = document.createElement("input");
        player.className = "player";
        player.id = i;
        player.setAttribute("type", "text");
        player.required = true;
        player.setAttribute("placeholder", "Nombre");
        form.appendChild(player);
    }

    let send = document.createElement("input");
    send.setAttribute("type", "submit");
    send.setAttribute("value", "Enviar");
    send.onclick = () => {
        form.style.gridTemplateColumns = "repeat(1, 1fr)";

        let playerCollection = document.getElementsByClassName("player");
        let playerArray = Array.from(playerCollection);
        form.innerHTML = "";
        JUEGO.start(playerArray);
    }
    form.appendChild(send);
    console.log("nolsas");
}

export function write(){
    let form = document.getElementById("formulario");
    form.innerHTML = "";

    let text = document.createElement("p");
    text.id = "text";
    text.innerHTML = "Tu turno: " + JUEGO.actual.name;
    text.appendChild = "Deseas disparar?";
    

    let disparar = document.createElement("input");
    disparar.id = "disparar";
    disparar.setAttribute("type", "submit");
    disparar.setAttribute("value", "Disparar");
    disparar.onclick = () => {
        JUEGO.play(1);
    }

    let retirarse = document.createElement("input");
    retirarse.id = "retirarse";
    retirarse.setAttribute("type", "submit");
    retirarse.setAttribute("value", "Retirarse");
    retirarse.onclick = () => {
        JUEGO.play(0);
    }

    form.appendChild(text);
    form.appendChild(disparar);
    form.appendChild(retirarse);
}

export function terminar() {

    let form = document.getElementById("formulario");
    form.innerHTML = "";

    let text = document.createElement("p");
    
    if (JUEGO.party.isEmpty()) {
        text.innerHTML = JUEGO.actual.name + ", mala suerte, te volates la perola";
    } else {
        text.innerHTML = "Felicidades " + JUEGO.actual.name + ", sobreviviste.";
    }

    form.appendChild(text);
}


