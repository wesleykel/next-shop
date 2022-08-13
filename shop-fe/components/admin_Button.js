import React from 'react'
import { Button } from '../styled_components/styled.adminButton'
import { useUser } from '@auth0/nextjs-auth0/dist/frontend/use-user'
import { useRouter } from 'next/router'



const AdminButton = () => {
    const  {user, error, isLoading} =useUser()
    const router = useRouter()
    const checkUser = ()=>{

console.log(user)
console.log(process.env.NEXT_PUBLIC_ADMIN_USER)


if(!user){

    return
}
if(user){




    router.push("admin")
   
}

    }
    
    return (
        <div>
        <Button onClick={checkUser}>Admin</Button>
        </div>
    )
}

export default AdminButton