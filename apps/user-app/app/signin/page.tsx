"use client"
import React from "react"
import { useState } from "react"
import {Labelinput } from  "@repo/ui/Labelinput"
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"
import { toast } from "sonner"

export default function signin(){
   const router = useRouter()
    const[phone,setPhone]=useState("")
    const[pass,setPass]=useState("")
    const[name,setName]=useState("")
    
    
    return(
        <div className="grid justify-center items-center bg-slate-950 h-[calc(100vh-74px)]"> 
            <div className="border border-slate-800 w-max-2xl h-auto max-h-sm  w-auto rounded-lg px-12 ">
                <div className="flex flex-col justify-center items-center text-white font-extrabold text-2xl mt-3 px-24">SignIn to your account</div>
                <div className="w-auto">
                    <Labelinput value={name} label="Name" onchange={(e)=>{
                        setName(e.target.value)
                    }} iseye={false} > </Labelinput>
                    <Labelinput value={phone} label="Number" onchange={(e)=>{
                        setPhone(e.target.value)
                    }} iseye={false} > </Labelinput>
                    <Labelinput value={pass} label="password" onchange={(e)=>{
                        setPass(e.target.value)
                    }} iseye={true} > </Labelinput>
                    <button onClick={async()=>{
                        const res = await signIn("credentials",{
                            name:name,
                            phone:phone,
                            password:pass,
                            redirect:false
                        })
                        if(res?.error){
                            setName("")
                            setPass("")
                            setPhone("")
                            toast.error("something went wrong")
                            
                        }else{
                            toast.success("signed in")
                        router.push("/dashbord")
                        }
                        
                        
                    }}className="bg-blue-600 rounded-sm text-white text-xl w-full  my-4 py-2">Login</button>
                </div>

            </div>
        </div>
    )
}