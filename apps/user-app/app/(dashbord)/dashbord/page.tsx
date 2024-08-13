

import { getServerSession } from "next-auth"
import { Dashboard } from "../../components/Dashbord"
import { userAuth } from "../../api/auth/user/auth"
import { prisma } from "@repo/database/client"


export async function getName(){
    const session= await getServerSession(userAuth)
    const name = await prisma.user.findFirst({
        where:{
            id:session?.user?.id
        },
        select:{
            name:true
        }
    })
    return(name?.name)
}

async function geteuserDATA() {
    const data =await prisma.user.findMany()
    return(data.map((value)=>{
        return(
            {
                name:value.name ||"",
                number:value.number
            }
        )
    }))
}

export default async  function(){
    const userName= await getName()
    const Data= await geteuserDATA()
    
    // const [input,setInput]=useState("")
    
    return <div className="text-white">
            {userName?<div className="text-3xl text-semiblod underline mt-3 text-gray-500">Hello,{userName}..</div>:<div className="text-xl text-red-800">Login before You procede</div>}
            <Dashboard  userData={Data} userName={userName || ""}/>
      </div>
}