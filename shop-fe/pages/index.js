
import Link from "next/link"
import { gql} from "@apollo/client"
import client from "../apollo-client"
import { Title } from '../styled_components/styled.title.js'
import styles from '../styles/Home.module.css'
import AdminButton from "../components/admin_Button"
import Login from "../components/login_Button"
import UserInfo from "../components/user_Info"
import { useUser } from "@auth0/nextjs-auth0/dist/frontend/use-user"






export default function Home({products}) {
 


  const {user} =useUser()


  
  return (
    <div className={styles.container}>
    <Login/>
   {user?<AdminButton/>:null}
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
