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
        return outputLayer.nodes.map(node => node.getValue() * this.maxValue);
    }

    printNetwork() {
        this.layers.forEach((layer, layerIndex) => {
            console.log(`Layer ${layerIndex}:`);
            layer.getNodes().forEach((node, nodeIndex) => {
                console.log(`  Node ${nodeIndex}: Value = ${node.getValue()}`);
            });
        });
    }


    train(trainingData: {input: number[], output: number[]}[]) {
        console.log('Training started with data:', trainingData);
        

        for(let epoch = 0; epoch < 1000; epoch++) {
            trainingData.forEach(data => {
                this.processInput(data.input);
                //let outputValues = this.getOutputValues();

                // Simple weight adjustment based on error
                let outputLayer = this.layers[this.layers.length - 1];
                outputLayer.getNodes().forEach((node, nodeIndex) => {
                    let expectedValue = data.output[nodeIndex] / this.maxValue;
                    let actualValue = node.getValue();
                    let error = expectedValue - actualValue;
                    node.inputs.forEach(connection => {
                        let adjustment = error * 0.1;
                        connection.setStrength(connection.strength + adjustment);
                        connection.node.adjustOperatorValue(adjustment);
                    });
                });

            });
        }
        
        console.log('Training completed.');
    }


}

export { Network };