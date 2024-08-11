import { getServerSession } from "next-auth";
import { AddMoney } from "../../components/AddMoney";
import { userAuth } from "../../api/auth/user/auth";
import { redirect } from "next/navigation";

export default async function() {
    const session = await getServerSession(userAuth)
    if(!session?.user){
        redirect("/signin")
    }
    return <div className="w-[calc(80vw-64px)]">
        <div className="text-blue-600 text-3xl top-0 mt-8 font-extrabold">
        TRANSFER
    </div>
    <div className="grid md:grid-cols-2 grid-cols-1 ">
        <div>
            <AddMoney/>
        </div>

    </div>

    </div>
}