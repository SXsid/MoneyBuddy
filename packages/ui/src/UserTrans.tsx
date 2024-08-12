"use client"

import { Button } from "./button"

interface detailProp{
    name:string,
    number:string,
    onclick:()=>void
}
export function Userdetail({name,number,onclick}:detailProp){
    return(
        <div className="flex justify-between m-8 border-b border-slate-700">
            <div className="text-slate-400 font-bold"> {name}    :  {number}</div>
            <Button onClick={onclick}>Send Money</Button>
        </div>
    )
}