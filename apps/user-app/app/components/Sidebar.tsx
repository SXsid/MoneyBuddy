"use client"
import { usePathname, useRouter } from "next/navigation"

interface sidprop{
    href:string
    title:string
    icon:React.ReactNode
}
export const Sidebar=({href,title,icon}:sidprop)=>{
    const router= useRouter()
    const path= usePathname()
    console.log(path)
    const choose = (path===href)
    return(
        <div className={`flex ${choose? "font-extrabold ":"font-medium"} cursor-pointer pl-4 pr-20 p-2 text-lg`} onClick={()=>router.push(href)}>
            <div className="text-blue-600 mt-1 pr-2">
                {icon}
            </div>
            <div className={`text-blue-600 ${choose?"underline":""}`}>{title}</div>
        </div>
    )

}