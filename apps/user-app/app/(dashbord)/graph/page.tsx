// import { Example } from "./components/Chart"
import { prisma } from '@repo/database/client';
import { getServerSession } from 'next-auth';
import { userAuth } from '../../api/auth/user/auth';
import { Example } from '../../components/Chart';
// import { userAuth } from "./api/auth/user/auth";

async function getData(){
    const session = await getServerSession(userAuth)
    // console.log(session?.user?.id);
    
    const data = await prisma.transection.findMany({
        where:{
            userId:session?.user?.id
        },
        select:{
            amount:true,
            payStatus:true,
            time:true,
            status:true
        }
    })
    // console.log(data);
    
    data.sort((a, b) => (a.time as Date).getTime() - (b.time as Date).getTime());
    let balance=0
    const resultTable = data.map(transaction => {
      if(transaction.status==="success"){
        if (transaction.payStatus === 'credit') {
          balance += (transaction.amount)/100;
        } else if (transaction.payStatus === 'debit') {
          balance -= (transaction.amount)/100;
        }
      }
      
      return(balance)
    });

    return resultTable
  }
export default async function Graph(){
  //  const session= await getServerSession(userAuth)
  //   if(session?.user){
  //     redirect("/dashbord")
  //   }else{
  //     redirect("signin")
  //   }
  const data = await getData()
  // console.log(data)
  return(
    <Example data={data}/>
  )
}