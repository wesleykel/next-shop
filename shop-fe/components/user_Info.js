import React from 'react'
import { useUser } from '@auth0/nextjs-auth0/dist/frontend/use-user'
import { UserInfo } from '../styled_components/styled.userInfo'

const UserInformation = () => {
 const  {user}= useUser()
   
   if(!user){return}
 
 return (
     
      <UserInfo>{user.name}</UserInfo>
    )
}

export default UserInformation