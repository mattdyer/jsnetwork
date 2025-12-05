import { Node } from "./Node";

class Layer {
    maxValue: number = 1000000;
    nodes: Node[] = [];
    
    constructor(nodeCount:number, maxValue?: number) {
        console.log('Layer initialized');

        if(maxValue) {
            this.maxValue = maxValue;
        }

        for(let i = 0; i < nodeCount; i++) {
            this.nodes.push(new Node(0, this.maxValue));
        }
    }
}

export { Layer };