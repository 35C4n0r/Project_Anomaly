import TrueAnomaly from "../../modelImporter.js";

export let scanPost = (req, res) => {
    console.log(req.body);
    try{
        let value = TrueAnomaly(req.body.tensor)
        res.json(value);
    }
    catch (e) {
        console.log(e);
    }
}