"use client"
import { Button } from "@repo/ui/button";
import { Card } from "@repo/ui/card";
import { usePathname } from "next/navigation";

export default function(){
    const value= usePathname()
    const data = value.split("/")[2]

    return(
        <div className="flex justify-center items-center  h-[calc(80vh-64px)] ">
            <Card title="Send money">
            <div className="w-100 h-120">
                <div className="text-slate-400 border border-blue-600 rounded-sm px-8 py-2 my-4 text-xl mx-8">{data}</div>
                <div className=" px-8"><input className=" w-full py-2  justify-center items-center my-2 pl-8 mr-12 hide-arrows outline-none text-white  bg-slate-800" type="number" placeholder="amount"></input></div>
                <div className="items-center flex justify-center w-auto     mx-4 mt-8 px-4">
                <Button >
                    Send
                </Button>
                    </div>
            </div>
        </Card>
        </div>
    )
}