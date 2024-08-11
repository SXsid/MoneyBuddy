"use client"


import { Appbar } from "@repo/ui/Appbar";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";



export default  function() {
  const session =  useSession()
  const router=useRouter()
  

  return <div className="">
    <Appbar  user={session.data?.user} onclick={()=>router.push("/")} Onsignin={()=>signIn()} OnsignOut={async()=> await signOut() }/>
  </div>
}