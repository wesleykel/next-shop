import { Button } from "../styled_components/styled.adminButton";
import React from 'react'
import { useUser } from "@auth0/nextjs-auth0/dist/frontend/use-user";
import { useRouter } from "next/router";


const Login = () => {
  
    const  {user, error, isLoading} =useUser()
    const router = useRouter()
  
    return (
        <div>
         {!user?<Button onClick={()=>{router.push("/api/auth/login")}}>Login</Button> :<Button onClick={()=>{router.push("/api/auth/logout")}}>Logout</Button>  }
        </div>
    )
}

export default Login