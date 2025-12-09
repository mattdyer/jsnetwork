import { Node } from "./Node";

class Connection{
    node: Node;
    strength: number;

    constructor(node: Node, strength: number = 1){
        this.node = node;
        this.strength = strength;
    }

    getValue(): number {
        return this.node.getValue() * this.strength;
    }

    setStrength(strength: number){
        this.strength = Math.max(0, strength);
    }

}

export { Connection };