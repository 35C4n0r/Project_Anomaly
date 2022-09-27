import mongoose from "mongoose";
const {Schema, model} = mongoose;

const historySchema = new Schema({
    time: Date,
    image: String,
    value: String,
});

export const historyModel = model('history', historySchema);