import { Button } from "./button";

interface AppbarProp{
    user?:{
        name?:string | null,

    },
    Onsignin:()=>void
    OnsignOut:()=>void
}

export const Appbar=({user,Onsignin,OnsignOut}:AppbarProp)=>{
    return(
        <div className=" flex justify-between mx-4 my-2 border-b">
            <div className="rounded-full bg-transparent text-blue-900 text-lg flex flex-col justify-center">
                MoneyBuddy
            </div>
            <div className=" flex flex-col justify-center pt-2">
                <Button onClick={user? OnsignOut:Onsignin}>{user?"logout" : "login"}</Button>
            </div>
        </div>
    )

}