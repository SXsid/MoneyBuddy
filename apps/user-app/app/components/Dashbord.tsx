"use client"
import { Userdetail } from "@repo/ui/userdetail"
import { Search } from "./Search"
import { useState } from "react"
import { useRouter } from "next/navigation"

interface userProp{
    name:string ,
    number:string

}

export  function Dashboard({userData}:{userData:userProp[]}){
    // const userName= await getName()
    const [input,setInput]=useState("")
    const router =useRouter()
    
    return <div className="text-white">
       
       <div className="w-[calc(80vw-64px)] mt-4 mx-8 md:mx-2">
       <Search onchange={(e)=>setInput(e.target.value)}/>
        {userData.map(data=>{
            return(
                <Userdetail name={data.name} number={data.number} onclick={()=>router.push(`/p2p/${data.number}`)}/>
            )
        })}
       </div>
    </div>
}