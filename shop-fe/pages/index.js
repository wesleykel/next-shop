
import Link from "next/link"
import { gql} from "@apollo/client"
import client from "../apollo-client"
import { Title } from '../components/styled.title'
import styles from '../styles/Home.module.css'







export default function Home({products}) {
  //console.log(products)
  return (
    <div className={styles.container}>
    
<Title>Shop</Title>
<Link href="admin"><a>Admin</a></Link>
{products.map((item)=>
<h1>{item.product_Name}</h1>
)}

    </div>
  )
}

export async function getStaticProps(){



  const { data } = await client.query({

    
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
};
}
