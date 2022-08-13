import { Button } from "../styled_components/styled.adminButton";
import React from 'react'
import { useUser } from "@auth0/nextjs-auth0/dist/frontend/use-user";
import { useRouter } from "next/router";
import Cookies from "js-cookie"

const Login = () => {
  
    const  {user, error, isLoading} =useUser()
    const router = useRouter()
  
    return (
        <div>
         {!user?<Button onClick={()=>{router.push("/api/auth/login"); Cookies.set("user", "logged-in")}}>Login</Button> :<Button onClick={()=>{router.push("/api/auth/logout"); Cookies.remove("user")}}>Logout</Button>  }
        </div>
    )
}

export default Login