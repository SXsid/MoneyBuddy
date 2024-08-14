import { getServerSession } from "next-auth";
import { AddMoney } from "../../components/AddMoney";
import { userAuth } from "../../api/auth/user/auth";
import { redirect } from "next/navigation";
import { Balance } from "../../components/Balance";
import { Trans } from "../../components/TransHistory";
import { prisma } from "@repo/database/client";


async function getBalance(){
    const session = await getServerSession(userAuth)
    const balance= await prisma.balance.findFirst({
        where:{
            userId:session?.user.id ||" "
        },
        select:{
            amount:true,
            locked:true
            
        }
    })
    return(
        balance
    )
}
export async function getTrans() {
    const session = await getServerSession(userAuth)
    const transections= await prisma.transection.findMany({
        where:{
            userId:session?.user.id ||""
        },
        select:{
            time:true,
            amount:true,
            status:true,
            provider:true,
            payStatus:true
        }
    })
    return(
        transections
    )
    
}

export default async function() {
    const session = await getServerSession(userAuth)
    const balance= await getBalance()
    const transection = await getTrans()
    const filterTrans= transection.slice(0,4)
    // console.log(filterTrans.length);
    
    if(!session?.user){
        redirect("/signin")
    }


    return <div className="md:w-[calc(80vw-64px)]">
        <div className="text-blue-600 text-3xl top-0 mt-8 font-extrabold">
        Transfer
    </div>
    <div className="grid md:grid-cols-2 grid-cols-1 mt-2 mx-8 lg:mx-0">
        <div>
            <AddMoney/>
        </div>
        <div>
            <Balance amount={balance?.amount|| 0} locked={balance?.locked||0}/>
           <div className="mt-4">
           <Trans transections={filterTrans}/>
           </div>
        </div>

    </div>

    </div>
}