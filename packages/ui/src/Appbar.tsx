import { Button } from "./button";

interface AppbarProp{
    user?:{
        name?:string | null,

    },
    Onsignin:()=>void
    OnsignOut:()=>void
    onclick:()=>void
    
}
export const Appbar=({user,Onsignin,OnsignOut,onclick}:AppbarProp)=>{
    
    return(
       <div className="border-b border-slate-800">
         <div className=" flex justify-between mx-4 my-2  ">
            <div className="rounded-full bg-transparent text-blue-600 font-extrabold text-lg flex flex-col justify-center cursor-pointer" onClick={()=>onclick()}>
                MoneyBuddy
            </div>
            <div className=" flex flex-col justify-center pt-2 ">
                <Button onClick={user? OnsignOut:Onsignin}>{user?"logout" : "login"}</Button>
            </div>
        </div>
       </div>
    )

}