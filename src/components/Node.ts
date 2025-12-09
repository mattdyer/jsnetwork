import { Operator } from "./Operator";
import { Connection } from "./Connection";

class Node {
    value: number
    maxValue: number = 1000000;
    operatorValue: number = Math.random();
    operation:Function = Operator.getOperationFromRange(this.operatorValue);
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

    setOperatorValue(value: number) {
        this.operatorValue = value;
        this.operation = Operator.getOperationFromRange(this.operatorValue);
    }

    adjustInputs(error: number){
        this.inputs.forEach(connection => {
            let adjustment = error * 0.1;
            connection.setStrength(connection.strength + adjustment);
            connection.node.adjustOperatorValue(adjustment);
            connection.node.adjustInputs(adjustment * 0.1);
        });
    }    

    adjustOperatorValue(amount: number) {
        this.operatorValue += amount;
        this.operatorValue = Math.min(1, Math.max(0, this.operatorValue));
        this.operation = Operator.getOperationFromRange(this.operatorValue);
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

    getOperatorValue(): number {
        return this.operatorValue;
    }

    addInputNode(node: Node, strength?: number){

        if(strength === undefined){
            strength = Math.random();
        }

        this.inputs.push(new Connection(node, strength));
    }

    printNode(){
        console.log(`       Value: ${this.getValue()} OperatorValue: ${this.operatorValue}`);
        this.inputs.forEach((input, index) => {
            console.log(`           Input ${index}: Node Value: ${input.node.getValue()} Strength: ${input.strength}`);
        });
    }

}

export { 
    Node
};