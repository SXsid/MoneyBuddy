import { getServerSession } from "next-auth"
import { userAuth } from "./api/auth/user/auth"
import { redirect } from "next/navigation"

export default async function(){
   const session= await getServerSession(userAuth)
    if(session?.user){
      redirect("/dashbord")
    }else{
      redirect("signin")
    }
}