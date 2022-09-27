import * as tf from '@tensorflow/tfjs';

let mapping = {'10': 0, '100': 1, '20': 2, '200': 3, '2000': 4, '50': 5, '500': 6}


export default async function TrueAnomaly(tensor) {

    const model = await tf.loadLayersModel('http://172.21.64.1:8080/model.json')
        .then(r => {
            console.log("Done")
        })
    // tensor.print()
    // let t = tf.browser.fromPixels(tensor, 3);
    let value = model.predict(tensor);
    console.log(value)
    return value;
}
