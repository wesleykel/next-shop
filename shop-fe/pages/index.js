
import Link from "next/link"
import { gql} from "@apollo/client"
import client from "../apollo-client"
import { Title } from '../styled_components/styled.title.js'
import styles from '../styles/Home.module.css'
import AdminButton from "../components/admin_Button"
import Login from "../components/login_Button"
import UserInfo from "../components/user_Info"







export default function Home({products}) {
  //console.log(products)
  return (
    <div className={styles.container}>
    <Login/>
    <AdminButton/>
    <UserInfo/>
<Title>Shop</Title>


{products.map((item ,index)=>
<h1 key={index}>{item.product_Name}</h1>
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
