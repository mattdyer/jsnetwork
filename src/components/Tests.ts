import { Network } from "./Network";

class Tests{

    static testMultiplying(){

        let trainingData = [
            {
            input: [0, 0, 0, 0, 0, 0, 0, 100000],
            output: [0, 0, 0, 0, 0, 0, 0, 200000]
            },
            {
            input: [0, 0, 0, 0, 0, 0, 0, 200000],
            output: [0, 0, 0, 0, 0, 0, 0, 400000]
            },
            {
            input: [0, 0, 0, 0, 0, 0, 0, 400000],
            output: [0, 0, 0, 0, 0, 0, 0, 800000]
            }
        ]

        let network = new Network([8, 16, 8], 1000000);

        //network.processInput([100000, 200000, 300000, 400000, 500000, 600000, 700000, 800000]);

        network.train(trainingData);

        network.processInput([0, 0, 0, 0, 0, 0, 0, 300000]);

        //network.printNetwork();

        console.log('Network output values:', network.getOutputValues());


        network.processInput([0, 0, 0, 0, 0, 0, 0, 50000]);

        console.log('Network output values:', network.getOutputValues());

        network.processInput([0, 0, 0, 0, 0, 0, 0, 10]);

        console.log('Network output values:', network.getOutputValues());

    }

    static testDividing(){

        let trainingData = [
            {
            input: [0, 0, 0, 0, 0, 0, 0, 200000],
            output: [0, 0, 0, 0, 0, 0, 0, 100000]
            },
            {
            input: [0, 0, 0, 0, 0, 0, 0, 400000],
            output: [0, 0, 0, 0, 0, 0, 0, 200000]
            },
            {
            input: [0, 0, 0, 0, 0, 0, 0, 800000],
            output: [0, 0, 0, 0, 0, 0, 0, 400000]
            }
        ]

        let network = new Network([8, 16, 8], 1000000);

        //network.processInput([100000, 200000, 300000, 400000, 500000, 600000, 700000, 800000]);

        network.train(trainingData);

        console.log('expected output: 150000');
        network.processInput([0, 0, 0, 0, 0, 0, 0, 300000]);

        //network.printNetwork();

        console.log('Network output values:', network.getOutputValues());


        console.log('expected output: 25000');
        network.processInput([0, 0, 0, 0, 0, 0, 0, 50000]);

        console.log('Network output values:', network.getOutputValues());

        console.log('expected output: 5');
        network.processInput([0, 0, 0, 0, 0, 0, 0, 10]);

        console.log('Network output values:', network.getOutputValues());

    }

}

export { Tests };