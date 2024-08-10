import { getServerSession } from "next-auth"
import { userAuth } from "../auth/user/auth"
import { NextResponse } from "next/server"
export const GET=async()=>{
    const session= await getServerSession(userAuth)
    if(session.user){
        return NextResponse.json({
            user:session.user
        })
    }
    return NextResponse.json({
        msg:"you are not logged in"
    })
}