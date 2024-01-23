import { Node } from "../List/Node.js";
import { Gun } from "./Gun.js";

export class Player extends Node {

    constructor( name ) {
        super();
        this.name = name;
        this.Gun = new Gun();
    }

}
