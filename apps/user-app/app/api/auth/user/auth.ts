import CredentialsProvider from "next-auth/providers/credentials"
import { prisma } from "@repo/database/client"
import bcrypt from "bcrypt"
import zod  from "zod"
const userCred= zod.object({
    phone:zod.string().min(10),
    password:zod.string().min(8)
})
// type  useType=  zod.infer<typeof userCred>
export const userAuth={
   providers:[
    CredentialsProvider({
        name:"credentials",
        credentials:{
            name:{label:"Name",type:"text"},
            phone:{label:"Mob numb",type:"text" ,placeholder:""},
            password:{label:"Password",type:"text" ,placeholder:""}
        },
        
        async authorize(credentials:any){
            const body = {
                phone:credentials.phone,
                password:credentials.password
            }
            console.log(body)
            
            
            const { success }=  userCred.safeParse(body)
            
            if(!success){
                return null
            }
            const hashPass = await bcrypt.hash(credentials.password,10)
            const existingUser = await prisma.user.findFirst({
                where:{
                    number:credentials.phone
                }
            })
            if(existingUser){
                const passValid= await bcrypt.compare(credentials.password,existingUser.password)
                if(passValid){
                    return{
                        id:existingUser.id,
                        number:existingUser.number

                    }
                }
                return null
            }
            try {
                const user = await prisma.user.create({
                    data: {
                        number: credentials.phone,
                        password: hashPass,
                        name:credentials.name
                    }
                });
            
                return {
                    id: user.id,
                    number:user.number
                }
                
            } catch(e) {
                console.error(e);
            }
            return null


        },
    })
   ],
   secret:process.env.NEXTAUTH_SECRET ||"secret",
   callbacks:{
    async session({session,token}:any){
        session.user.id=token.sub
        return session

    }
   },
   pages:{
    signIn:"/signin"
   }
}