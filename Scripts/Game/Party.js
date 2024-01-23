import { CircleList } from "../List/CircleList.js";
import { Player } from "../Player/Player.js";

export class Party extends CircleList{

    constructor(){
        super();
    }

    Create(collection){ // Metodo para rellenar la lista circular de jugadores, de manera que, se llenen todos los jugadores de una sola vez
        
        if ( this.first != null ) {
            console.log("List filled");
        } else {
            let name;
            for( let i=0; i < collection.length ; i++ ) {
                name = collection[i].value;
                this.insertEnd( new Player( name ) );
            }
            
            //this.shuffle(); // Y posteriormente se ordenan aleatoriamente sus turnos
            
            console.log("List filled sucessfully");
        }
    }

    
}