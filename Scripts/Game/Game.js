import { Party } from "./Party.js";
import { write } from "../Logical/main.js";
import { terminar } from "../Logical/main.js";

export class Game {
    party;
    actual;
    lastPlayer;
    playerCount;

    constructor(){
        this.party = new Party();
        console.log("THis.party: ");
        console.log(this.party);
        this.lastPlayer = false;
    }

    start(collection) {
        console.log(collection);
        this.playerCount = collection.length;
        this.party.Create(collection); //Creacion de los jugadores
        this.actual = this.party.first;
        console.log(this.actual);
        write();
    }

    verify(){
        
        if ( this.playerCount > 1 ){
            if ( this.lastPlayer || this.actual.Gun.oneBullet ){
                this.Finish();
            } else {
                write();
            }
        } else {
            if ( this.actual.Gun.oneBullet || this.party.isEmpty() ){
                this.Finish();
            } else {
                write();
            }
        }
    }

    play(num){
        let aux = this.actual.next;
        let text = document.getElementById("text");
        switch (num) {
            case 1:
                if( this.actual.Gun.Shoot() ) {
                    console.log("BANG!");
                    console.log(this.actual.name + " ha muerto...");
                    text.innerHTML = this.actual.name + " ha muerto...";
                    this.party.delete(this.actual);
                } else {
                    console.log(this.actual.name + ", no has muerto...todavia");
                    text.innerHTML = this.actual.name + ", no has muerto...todavia";
                }   
                break;
            case 0:
                console.log("El lloron de: "+this.actual.name+" decidio retirarse.");
                text.innerHTML = "El lloron de: "+this.actual.name+" decidio retirarse.";
                this.party.delete(this.actual);
                break;
            default:
                console.log("Wtff pibe. escoge bien");
                break;
        }
        this.actual = aux;
        if ( this.actual == this.actual.next && this.actual.next == this.actual.back && this.actual == this.actual.back ) 
        {
            this.lastPlayer = true;
            console.log(this.lastPlayer);
        }
        setTimeout(() => {
            this.verify();
        }, 3000);   
    }

    Finish() {
        console.log("Juego Terminado. "+this.actual.name+" es el ganador.");
        terminar();
    }

    
}
