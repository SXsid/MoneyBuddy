import express from "express"
import z, { number, string } from "zod"
import { prisma, transStatus } from "@repo/database/client"
const app = express()
app.use(express.json())
const bodySchema= z.object({
    token:string(),
    amount:number(),
    
})
type bodySchema= z.infer<typeof bodySchema>


app.get("/",(req,res)=>{
    res.send("hi form web hook ")
})

app.post("/idfcbank",async(req,res)=>{
    const body:bodySchema= await req.body

    const { success }=  bodySchema.safeParse(body)
    if(!success){
        res.send("wrong cred")
        return
    }
    const paymentData= {
        token:body.token,
        amount:body.amount,
    
    }

    const userId =  await prisma.transection.findUnique({
        where:{
            token:paymentData.token
        },
        select:{
            userId:true
        }
    })
    console.log(userId);
    
    //update the existing balnce after reciving confermation from bank
  try{

    if(!userId?.userId){
        throw new Error
    }
    await prisma.$transaction([
         
        
        prisma.balance.update({
           where:{
               userId:userId.userId
           },
           data:{
               amount:{
                
                   increment:paymentData.amount *100
               }
           }
       }),
   
         prisma.transection.update( {
           where:{
                   token:paymentData.token
               },
           data:{
               status: transStatus.success
               
   
           }
       }),
      ])
      res.json({
        msg:"done!!"
    })
  }catch(e){
    console.log(e)
    await prisma.transection.update({
        where:{
            token:paymentData.token
        },
        data:{
            status:transStatus.failed
        }
    })
    res.status(500).json({
        msg:"error ocurrerd!!"
    })
  }

    
})
app.listen(8080)