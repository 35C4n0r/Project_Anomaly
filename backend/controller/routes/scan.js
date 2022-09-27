import Express from "express";
import {scanPost} from "../router-logic/scanLogic.js";

const routeScan = Express.Router();

routeScan.get('');
routeScan.post('/predict', scanPost);

export default routeScan;