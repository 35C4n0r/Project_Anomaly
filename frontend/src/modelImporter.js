import * as tf from '@tensorflow/tfjs';
// import {argMax} from "@tensorflow/tfjs-node";
// import * as tfn from '@tensorflow/tfjs-node'
let mapping = {'10': 0, '100': 1, '20': 2, '200': 3, '2000': 4, '50': 5, '500': 6}
let mapping2 = {0: 10, 1: 100, 2: 20, 3:200, 4: 2000, 5: 50, 6: 500, 7: 'Undetected'};


export default async function TrueAnomaly(tensor) {
    // console.log(tensor)
    // tensor.print()
    // const model = tf
    // const model = tfn.node.loadSavedModel('D:\\Jay\\Models\\TF.js');
    // console.log((await model).predict(tensor));

    const model = await tf.loadLayersModel('https://raw.githubusercontent.com/35C4n0r/converted_tfjs_model/main/model.json');
    console.log(model);
    const output = model.predict(tensor.cast('float32').expandDims());
    // const v = output.argMax().dataSync().print()
    // console.log(v, "good");
    let z = [...await output.data()]
    // console.log(tf.argMax(z), z);
    let finalOutput = mapping2[z.indexOf(Math.max(...z))];
    console.log(finalOutput);
    // output.print();
    // output.print(verbose);
    return finalOutput;
}
