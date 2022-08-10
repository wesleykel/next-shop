import { gql } from 'apollo-server-express';


export const typeDefs = gql`


type Query {
    getAllProducts:[Products]
    
}
type Products{

product_Name: String
price:Int
in_Stock:Boolean
item_Type:String
image:String



}

input ProductInput{

    product_Name: String
    price:Int
    in_Stock:Boolean
    item_Type:String
    image:String
    
}

type Mutation{
addProduct(input:ProductInput):Products

}


`