import { gql} from "@apollo/client"
import client from "../apollo-client"

export async function getStaticProps(){



   /* const { data } = await client.query({
  
      
  query: gql`
  
  query GetAllProducts {
    getAllProducts {
      price
      product_Name
      in_Stock
      item_Type
      image
    }
  }
  
  
  `,
  });
  
  return {
  
    props:{
  
      products:data.getAllProducts,
    },
  };*/
  }
