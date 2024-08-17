

import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"
import { userAuth } from "./api/auth/user/auth"
export default async function(){
  const session = await getServerSession(userAuth)
  if(!session?.user?.id){
    redirect("/dashbord")
  }else{
    redirect("/graph")
  }
}