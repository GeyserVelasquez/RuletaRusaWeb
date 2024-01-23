import { Charger } from "./Charger.js";

export class Gun {
    
    constructor() {
        this.charger = new Charger();
        this.charger.Charge(); //Aqui se cargan las balas del revolver
        this.pivot = this.charger.first;
        this.oneBullet = false;
    }

    Shoot() {
        if (this.pivot.value) {
            return true;
        } else {
            this.pivot = this.pivot.next;
            if ( this.pivot == this.charger.last) {
                this.oneBullet = true;
                console.log("One Bullet");
                alert("One Bullet");
            }
            return false;
        }
    }
}