"use server"
import { getServerSession } from "next-auth"
import { userAuth } from "../auth/user/auth"
import { prisma, transStatus } from "@repo/database/client"
import { randomUUID } from "crypto"
export async function transInitHandler(amount:number,provider:string){
    const session = await getServerSession(userAuth)
    await prisma.transection.create({
        data:{
            time:new Date(),
            amount:amount *100,
            provider:provider,
            status:"pending",
            token:randomUUID(),
            userId:session?.user?.id
        }
    })
    
}
