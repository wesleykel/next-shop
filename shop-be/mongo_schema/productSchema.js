
import mongoose from "mongoose"
const  {Schema} = mongoose


export const  productSchema = new Schema({

product_Name:String,
price: Number,
in_Stock:Boolean,
product_Type:String,
item_Type:String,







})