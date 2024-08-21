"use client"
import { Button } from "@repo/ui/button";
import { Card } from "@repo/ui/card";
import { usePathname, useRouter } from "next/navigation";
import { toast } from "sonner";
import { p2pTrans } from "../../api/client/transectionHandler";
import { useState } from "react"

export default function(){
    const value= usePathname()
    const data = value.split("/")[2] || ""
    const [amount,setAmount]= useState<number>()
    const router = useRouter()

    return(
        <div className="flex justify-center items-center  h-[calc(80vh-64px)] ">
            <Card title="Send money">
            <div className="w-100 h-120">
                <div className="text-slate-400 border border-blue-600 rounded-sm px-8 py-2 my-4 text-xl mx-8">{data}</div>
                <div className=" px-8"><input value={amount} className=" w-full py-2  justify-center items-center my-2 pl-8 mr-12 hide-arrows outline-none text-white  bg-slate-800" type="number" placeholder="amount" onChange={(e)=>{
                    setAmount(Number(e.target.value))
                }}></input></div>
                <div className="items-center flex justify-center w-auto     mx-4 mt-8 px-4">
                <Button onClick={async()=>{
                    //@ts-ignore
                    toast.promise(p2pTrans(data,amount),{
                        loading:"wait for a min..",
                        success:()=>{
                            return "Transection Complete"
                        },
                        error:"inssuficent amount/internal error"
                    },
                    
                )
                    router.push("/transfer")
                }}>
                    Send
                </Button>
                    </div>
            </div>
        </Card>
        </div>
    )
}