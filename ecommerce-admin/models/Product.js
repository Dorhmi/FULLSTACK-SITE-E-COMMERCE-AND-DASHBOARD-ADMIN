import mongoose, { Schema, model, models } from "mongoose";

const ProductSchema = new mongoose.Schema({
 title: {type: String, required: true},
 description: String,
 price: {type: Number, required: true},
 images:[{type:String}],
 category:{type:mongoose.Schema.Types.ObjectId,  ref:'category'},
 properties: {type:Object},
}, {
  timestamps: true,  
});

export const Product = models?.Product || model('Product' , ProductSchema);