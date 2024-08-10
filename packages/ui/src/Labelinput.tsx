import { useState } from "react";
import { IoIosEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";

interface labelProp {
    iseye: boolean,
    label: string,
    onchange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    
    children?: React.ReactNode
}

export const Labelinput=({label,onchange,iseye}:labelProp)=>{
    const [toogle,setoogle]=useState(false)
    function togelehandler(){
        setoogle(!toogle)
    }
    return(
        <div className="mt-4 mx-3 w-auto max-w-xl">
            <div className="text-blue-600">{label}</div>
            {iseye?
            <div className="relative border w-full rounded-lg "><input onChange={onchange}  className=" outline-none font-semibold bg-transparent text-white py-2 pr-22 pl-3" type={toogle?"text":"password"}>
            
            </input> <button  className="absolute top-0 right-0 flex justify-center pt-2 pr-2 items-center text-2xl text-blue-600 " onClick={()=>togelehandler()}>{toogle? <IoIosEyeOff/> : <IoIosEye/>}</button> </div>:
           <input className=" outline-none bg-transparent border rounded-lg  text-white py-2 w-full pl-3"onChange={onchange} type="text" >
            
            </input> 
            }
            
        </div>
    )
}