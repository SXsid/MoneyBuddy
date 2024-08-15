"use client"
import { prisma, transStatus } from "@repo/database/client";
import { Button } from "@repo/ui/button";
import { Card } from "@repo/ui/card";
import {Input} from "@repo/ui/Input"
import { Option } from "@repo/ui/Option";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { toast, Toaster } from "sonner";
import { transInitHandler } from "../api/client/route";


const SUPPORTED_BANKS = [{
    name: "IDFC Bank",
    redirectUrl: "https://www.netbanking.idfcbank.com"
}, {
    name: "BOB Bank",
    redirectUrl: "https://www.bankofbaroda.com/"
}];


export function AddMoney(){
    
    const[url,SetUrl]=useState(SUPPORTED_BANKS[0]?.redirectUrl)
    const [amount,setAmount]=useState(0)
    const [provider,setProvider]=useState(SUPPORTED_BANKS[0]?.name)
    return(
       <div className="m-3 max-w-md ">
         <Card title="Add Money ">
          <div className="w-full">
          <div className="" >
           <Input placeholder="00.0" label="Amount"value={amount} onchange={(e)=>setAmount(parseInt(e.target.value))}></Input>
            <Option onselect={(e)=>{
                SetUrl(SUPPORTED_BANKS.find((bank)=>bank.name===e.target.value)?.redirectUrl)
                setProvider(SUPPORTED_BANKS.find((bank)=>bank.name===e.target.value)?.name)
                
            }} options={SUPPORTED_BANKS.map((banks)=>{
                return{
                    key:banks.name
                    ,value:banks.name
                }
            })}/>
           </div>
            <div className="flex justify-center">
            <Button onClick={async ()=>{
                if(!amount ||!url){
                    toast.error("add amount /slect the bank")
                    

                }else{
                   try{
                    toast.promise(transInitHandler(amount,provider||""),
                {loading:"initiating transfer...",
                    success: (res)=>{
                        const url=`https://money-buddy-user-app.vercel.app/netbanking/${res.token}/${res.amount}`
                        const newwindow=window.open(url,"netbanking",'width=560,height=340,toolbar=0,menubar=0');  
                        //@ts-ignore
                        if (window.focus) {newwindow?.focus()}
                        return "waitng for bank confimation!!"
                    }
                })

                   }catch(e){
                    console.log(e);
                    
                   }
                    
                }
                
            }}>Add Money</Button>
            </div>
          </div>

        </Card>
       </div>
    )
}