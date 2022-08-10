import { Products } from "../db/db_con.js"


export const resolvers ={
    Query:{
        getAllProducts:(root)=>{
            return new Promise((resolve,reject)=>{
                Products.find((err,products)=>{
                    if(err) reject(err);
                    else resolve(products);
                })
          
          
            })

        } 
        },




Mutation:{

addProduct:(root, {input})=>{

const newProduct = new Products({

product_Name: input.product_Name,
price:input.price,
in_Stock:input.in_Stock,
item_Type:input.item_Type,



});

return new Promise((resolve,reject)=>{
    newProduct.save((err)=>{
        if(err) reject(err);
        else resolve(newProduct);
    })
})


}



},

}