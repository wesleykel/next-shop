import mongoose from "mongoose";

import { productSchema } from "../mongo_schema/productSchema.js";


const MONGO_DB_URI = process.env.MONGO_DB_URI


mongoose.connect(MONGO_DB_URI,{

    useNewUrlParser: true,
    useUnifiedTopology: true


})

let db = mongoose.connection;
db.on("error", ()=>{

    console.error("Error while connecting to DB")

})

const Products = mongoose.model("Products", productSchema)


export {Products}