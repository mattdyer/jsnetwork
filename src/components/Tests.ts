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

    static testAdding(){

        let trainingData = [
            {
            input: [0, 0, 0, 0, 0, 0, 100000, 100000],
            output: [0, 0, 0, 0, 0, 0, 0, 200000]
            },
            {
            input: [0, 0, 0, 0, 0, 0, 200000, 200000],
            output: [0, 0, 0, 0, 0, 0, 0, 400000]
            },
            {
            input: [0, 0, 0, 0, 0, 0, 400000, 400000],
            output: [0, 0, 0, 0, 0, 0, 0, 800000]
            }
        ]

        let network = new Network([8, 16, 8], 1000000);

        //network.processInput([100000, 200000, 300000, 400000, 500000, 600000, 700000, 800000]);

        network.train(trainingData);

        console.log('expected output: 600000');
        network.processInput([0, 0, 0, 0, 0, 0, 300000, 300000]);

        //network.printNetwork();

        console.log('Network output values:', network.getOutputValues());


        console.log('expected output: 100000');
        network.processInput([0, 0, 0, 0, 0, 0, 50000, 50000]);

        console.log('Network output values:', network.getOutputValues());

        console.log('expected output: 20');
        network.processInput([0, 0, 0, 0, 0, 0, 10, 10]);

        console.log('Network output values:', network.getOutputValues());

    }


    static testAdding2(){

        let trainingData = [
            {
            input: [100000, 100000],
            output: [0, 200000]
            },
            {
            input: [200000, 200000],
            output: [0, 400000]
            },
            {
            input: [400000, 400000],
            output: [0, 800000]
            },
            {
            input: [452123, 342678],
            output: [0, 794801]
            }
        ]

        let network = new Network([2, 16, 2], 1000000);

        network.train(trainingData);

        network.printNetwork();

        console.log('expected output: 600000');
        network.processInput([300000, 300000]);

        //network.printNetwork();

        console.log('Network output values:', network.getOutputValues());

        var expected = 43765 + 22546
        console.log('expected output: ' + expected);
        network.processInput([43765, 22546]);

        console.log('Network output values:', network.getOutputValues());

        console.log('expected output: 20');
        network.processInput([10, 10]);

        console.log('Network output values:', network.getOutputValues());

    }


}

export { Tests };