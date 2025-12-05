import { Operator } from "./Operator";

class Node {
    value: number
    maxValue: number = 1000000;
    operation:Function = Operator.add;// Change this to call a function based on the input nodes values
    inputs: Node[] = [];

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
        return this.value;
    }

}

export { 
    Node
};