import mongoose, { Schema, models, model } from "mongoose";

const categorySchema = new mongoose.Schema({
    name: { type:String,required:true },
    parent: { type: mongoose.Schema.Types.ObjectId, ref:'category' },
    properties: [{type:Object,}],
});

export const category = models?.category || model('category',categorySchema);