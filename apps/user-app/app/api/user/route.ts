import { prisma } from "@repo/database/client"
import { NextResponse } from "next/server"


export const GET=async ()=>{
    const res = await prisma.user.create({
        data:{
            email:"aamnewrwd",
            password:"fsdkjkfds"
        }
    })
    console.log(res);
    
    return NextResponse.json({
        msg:"hi theredsfasdfds!!"
    })
}