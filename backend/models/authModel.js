import mongoose from "mongoose";
const {Schema, model} = mongoose;

const authSchema = new Schema({
    time: Date,
    image: String,
    value: String,
});

export const authModel = model('auth', authSchema);