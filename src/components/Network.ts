import { Layer } from "./Layer";

class Network {
    maxValue: number = 1000000;
    layers: Layer[] = [];
    
    constructor(layerSizes:number[], maxValue?: number) {
        console.log('Network initialized');

        if(maxValue) {
            this.maxValue = maxValue;
        }

        for(let i = 0; i < layerSizes.length; i++) {
            this.layers.push(new Layer(layerSizes[i], this.maxValue));
        }


    }

    processInput(inputValues: number[]) {
        // Assign input values to the first layer's nodes
        let inputLayer = this.layers[0];
        for(let i = 0; i < inputLayer.nodes.length; i++) {
            if(i < inputValues.length) {
                inputLayer.nodes[i].setValue(inputValues[i]);
            }
        }
    }

    getOutputValues(): number[] {
        let outputLayer = this.layers[this.layers.length - 1];
        return outputLayer.nodes.map(node => node.getValue());
    }


}

export { Network };