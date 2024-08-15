"use server"

import { prisma, transStatus } from "@repo/database/client"




export default async function BankConfirm(token:string,amount:number,status:string){
    console.log(token,amount)
    const userId =  await prisma.transection.findUnique({
        where:{
            token: token
        },
        select:{
            userId:true
        }
    })
    console.log(userId.userId);
    
   try{
    if(!userId?.userId){
        throw new Error
    }
    if(status==="reject"){
        throw new Error
    }
    await prisma.$transaction([
         
        
        prisma.balance.update({
           where:{
               userId:userId.userId
           },
           data:{
               amount:{
                
                   increment:amount *100
               }
           }
       }),
   
         prisma.transection.update( {
           where:{
                   token:token
               },
           data:{
               status: "success"
               
   
           }
       }),
      ])

      return("sucess")
      
  }catch(e){
    console.log(e)
    await prisma.transection.update({
        where:{
            token:token
        },
        data:{
            status:"failed"
        }
    })
    return("failed")
  }

    
    

   }

   
    //update the existing balnce after reciving confermation from bank
//   try{
//     const body:bodySchema= {
//         token,status,amount
//     }

//     const { success }=  bodySchema.safeParse(body)
//     if(!success){
//         throw new Error
//     }
//     const paymentData= {
//         token:body.token,
//         amount:body.amount,
    
//     }

//     const userId =  await prisma.transection.findUnique({
//         where:{
//             token:paymentData.token
//         },
//         select:{
//             userId:true
//         }
//     })
//     if(!userId?.userId){
//         throw new Error
//     }
//     if(body.status=="reject"){
//         throw new Error
//     }
//     await prisma.$transaction([
         
        
//         prisma.balance.update({
//            where:{
//                userId:userId.userId
//            },
//            data:{
//                amount:{
                
//                    increment:paymentData.amount *100
//                }
//            }
//        }),
   
//          prisma.transection.update( {
//            where:{
//                    token:paymentData.token
//                },
//            data:{
//                status: transStatus.success
               
   
//            }
//        }),
//       ])
      
//   }catch(e){
//     console.log(e)
//     await prisma.transection.update({
//         where:{
//             token:token
//         },
//         data:{
//             status:transStatus.failed
//         }
//     })
   
//   }

    

