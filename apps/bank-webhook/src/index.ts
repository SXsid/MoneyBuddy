import express from "express"
import z, { number, string } from "zod"
import { prisma, transStatus } from "@repo/database/client"
const app = express()
app.use(express.json())
const bodySchema= z.object({
    token:string(),
    amount:number(),
    userId:string()
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
        userId:body.userId
    }

    //update the existing balnce after reciving confermation from bank
  try{
    await prisma.$transaction([
        prisma.balance.update({
           where:{
               userId:paymentData.userId
           },
           data:{
               amount:{
                
                   increment:paymentData.amount
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