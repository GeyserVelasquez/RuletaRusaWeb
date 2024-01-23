import { CircleList } from "../List/CircleList.js";
import { Bullet } from "./Bullet.js";

export class Charger extends CircleList {
    
    constructor(){
        super()
    }

    Charge(){
        if( this.length == 5){
            console.log("Gun Alredy Charged");
        }else{
            let j = Math.floor( Math.random() * (5 + 1) );
            for( let i=0; i < 6; i++ ){
                if( j == i ){
                    this.insertEnd( new Bullet(true) );
                } else {
                    this.insertEnd( new Bullet(false) );
                }
            }
            console.log("Gun Charged");
        }
    }
}