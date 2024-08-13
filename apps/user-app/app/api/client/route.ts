"use server"
import { getServerSession } from "next-auth"
import { userAuth } from "../auth/user/auth"
import { prisma, transStatus } from "@repo/database/client"
import { randomUUID } from "crypto"
import { getName } from "../../(dashbord)/dashbord/page"
export async function transInitHandler(amount:number,provider:string){
    const session = await getServerSession(userAuth)
    const data= await prisma.transection.create({
        data:{
            time:new Date(),
            amount:amount *100,
            provider:provider,
            status:"pending",
            token:randomUUID(),
            userId:session?.user?.id
        }
    })
    
    return(
        {
            token:data.token,
            amount:data.amount
        }
    )
}

export async function p2pTrans(number:string,amount:number) {
    const session = await getServerSession(userAuth)
    const senderName= await getName()
    const receiverId= await prisma.user.findUnique({
        where:{
            number:number
        },
        select:{
            id:true
        }
    })
    try{

        const senderAmount=await prisma.balance.findFirst({
            where:{
                userId:session?.user?.id
            },
           select:{
            amount:true
            
           }
        })
        if(!senderAmount?.amount
        ){
            throw new Error
        }
        if(senderAmount.amount<amount){
            throw new Error
        }
        await prisma.$transaction([
            //lock the sender row 
            // await prisma.balance.findUnique({ where: { userId: session.?user.id }, lock: FOR_UPDATE });
            prisma.balance.update({
                where:{
                    userId:session?.user?.id
                },
                data:{
                    amount:{
                        decrement:amount*100
                    }
                }
            }),

            prisma.balance.update({
                where:{
                    userId:receiverId?.id
                },
                data:{
                    amount:{
                        increment:amount*100
                    }
                }
            }),
            prisma.transection.create({
                data:{
                    provider:number,
                    amount:amount*100,
                    status:"success",
                    time:new Date(),
                    token:randomUUID(),
                    userId:session?.user?.id,
                    payStatus:"debit"
                    

                }
            }),
            prisma.transection.create({
                data:{
                    provider:senderName ||"",
                    amount:amount*100,
                    status:"success",
                    time:new Date(),
                    token:randomUUID(),
                    userId:receiverId?.id ||"",
                    payStatus:"credit"
                    

                }
            })
        ])
    }catch(e){
        console.log(e)
        await  prisma.transection.create({
            data:{
                provider:number,
                amount:amount*100,
                status:"failed",
                time:new Date(),
                token:randomUUID(),
                userId:session?.user?.id,
                payStatus:"debit"
                

            }
        })

    }
    
}