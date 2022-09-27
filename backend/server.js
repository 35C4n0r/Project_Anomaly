import Express from 'express';
import mongoose from "mongoose";
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import routeScan from "./controller/routes/scan.js";

const app = Express();
app.use(cors());

app.use(bodyParser.json({extended: true}))
app.use(bodyParser.urlencoded({extended: true}))

app.use('', routeScan);

mongoose.connect('mongodb+srv://MERN:MERN@cluster0.9xphova.mongodb.net/project-anomaly?retryWrites=true&w=majority')
    .then(r => {
        console.log("Connected to Database");
        app.listen(5000, function (err) {
            if (err) alert(err)
            console.log(`Successfully connected on port 5000`)
        })
    })
    .catch(err => {
        console.log(err);
    })
