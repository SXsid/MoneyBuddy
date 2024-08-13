"use client"
import { Userdetail } from "@repo/ui/userdetail"
import { Search } from "./Search"
import { useMemo, useState } from "react"
import { useRouter } from "next/navigation"

interface userProp{
    name:string ,
    number:string

}

export  function Dashboard({userData,userName}:{userData:userProp[],userName?:string}){
    // const userName= await getName()
    const [input,setInput]=useState("")
    const router =useRouter()
    const newAraay= useMemo(()=>{
        const value= userData.filter(value=>(value.name===input || value.number===input)||value.name!==userName)
        return value
    },[input])
    
    return <div className="text-white">
       
       <div className="w-[calc(80vw-64px)] mt-4 mx-8 md:mx-2">
       <Search onchange={(e)=>setInput(e.target.value)}/>
        {newAraay.map(data=>{
            return(
                <Userdetail name={data.name} number={data.number} onclick={()=>router.push(`/p2p/${data.number}`)}/>
            )
        })}
       </div>
    </div>
}