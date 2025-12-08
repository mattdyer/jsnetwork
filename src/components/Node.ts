import { Operator } from "./Operator";
import { Connection } from "./Connection";

class Node {
    value: number
    maxValue: number = 1000000;
    operation:Function = Operator.average;// Change this to call a function based on the input nodes values
    inputs: Connection[] = [];

    constructor(value: number, maxValue?: number) {
        
        value = this.normalizeValue(value);

        if(maxValue) {
            this.maxValue = maxValue;
        }

        console.log('Node created with value:', value);
        
        this.value = value;
    }

    setValue(value: number) {
        this.value = this.normalizeValue(value);
    }

    normalizeValue(value: number): number {
        
        value = Math.min(this.maxValue, value);

        value = value / this.maxValue;
        return value;
    }

    calculateValue(){
        let inputValues = this.inputs.map(input => input.getValue());
        let summedValue = this.operation(...inputValues);
        this.value = summedValue;
        
    }

    getValue(): number {
        
        if(this.inputs.length > 0){
            this.calculateValue();
        }
        
        return this.value;
    }

    addInputNode(node: Node, strength?: number){

        if(strength === undefined){
            strength = Math.random();
        }

        this.inputs.push(new Connection(node, strength));
    }

}

export { 
    Node
};