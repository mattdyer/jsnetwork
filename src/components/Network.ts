import { Layer } from "./Layer";

class Network {
    maxValue: number = 1000000;
    layers: Layer[] = [];
    
    constructor(layerSizes:number[], maxValue?: number) {
        console.log('Network initialized');

        this.createLayers(layerSizes, maxValue);

        this.addNodeConnections();


    }


    createLayers(layerSizes:number[], maxValue?: number){
        
        this.layers = [];
        
        if(maxValue) {
            this.maxValue = maxValue;
        }
        
        for(let i = 0; i < layerSizes.length; i++) {
            this.layers.push(new Layer(layerSizes[i], this.maxValue));
        }
    }


    addNodeConnections() {
        for(let i = 1; i < this.layers.length; i++) {
            let currentLayer = this.layers[i];
            let previousLayer = this.layers[i - 1];

            currentLayer.getNodes().forEach(node => {
                previousLayer.getNodes().forEach(prevNode => {
                    node.addInputNode(prevNode);
                });
            });
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

    printNetwork() {
        this.layers.forEach((layer, layerIndex) => {
            console.log(`Layer ${layerIndex}:`);
            layer.getNodes().forEach((node, nodeIndex) => {
                console.log(`  Node ${nodeIndex}: Value = ${node.getValue()}`);
            });
        });
    }


}

export { Network };