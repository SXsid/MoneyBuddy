"use client"
import { Button } from "@repo/ui/button";
import { Card } from "@repo/ui/card";
import {Input} from "@repo/ui/Input"
import { Option } from "@repo/ui/Option";
import { useState } from "react";
import { toast, Toaster } from "sonner";


const SUPPORTED_BANKS = [{
    name: "IDFC Bank",
    redirectUrl: "https://www.netbanking.idfcbank.com"
}, {
    name: "BOB Bank",
    redirectUrl: "https://www.bankofbaroda.com/"
}];
export function AddMoney(){
    const[url,SetUrl]=useState("")
    const [amount,setAmount]=useState(0)
    return(
       <div className="m-3 max-w-md ">
         <Card title="Add Money ">
          <div className="w-full">
          <div className="" >
           <Input placeholder="00.0" label="Amount" onchange={(e)=>setAmount(parseInt(e.target.value))}></Input>
            <Option onselect={(value)=>{
                SetUrl(SUPPORTED_BANKS.find((bank)=>bank.name===value)?.redirectUrl||"")
                
            }} options={SUPPORTED_BANKS.map((banks)=>{
                return{
                    key:banks.name
                    ,value:banks.name
                }
            })}/>
           </div>
            <div className="flex justify-center">
            <Button onClick={()=>{
                if(!amount){
                    toast.error("add amount")

                }else{
                    window.location.href=url
                }
                
            }}>Add Money</Button>
            </div>
          </div>

        </Card>
       </div>
    )
}