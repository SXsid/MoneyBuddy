import { getServerSession } from "next-auth"
import { userAuth } from "../api/auth/user/auth"
import { getTrans } from "../(dashbord)/transfer/page"

export async function Table(){
    const transections=  await getTrans()

    
    return(
        <div className=" justify-center flex items-center lg:mx-24 mx-8 overflow-x-auto  w-full  shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-slate-900 dark:text-blue-600">
            <tr>
                <th scope="col" className="px-6 py-3">
                    Provider name
                </th>
                <th scope="col" className="px-6 py-3">
                    Amount
                </th>
                <th scope="col" className="px-6 py-3">
                    status
                </th>
                <th scope="col" className="px-6 py-3">
                    date
                </th>
                <th scope="col" className="px-6 py-3">
                    <span className="sr-only">Edit</span>
                </th>
            </tr>
        </thead>
        <tbody>
            {transections.map((trans)=>{
                return(
                    <tr className="bg-white border-b dark:bg-transparent dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-slate-600">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {trans.provider}
                    </th>
                    <td className="px-6 py-4">
                        {(trans.amount)/100}
                    </td>
                    {trans.status=="success"?<td className="px-6 py-4 text-green-500">
                            {trans.status}
                        </td>:trans.status=="failed"?<td className=" px-6 py-4 text-red-600">
                            {trans.status}
                        </td>:<td className="px-6 py-4 text-yellow-300">
                            {trans.status}
                        </td>}
                    <td className="px-6 py-4">
                        {trans.time.toDateString()}
                    </td>
                    <td className="px-6 py-4">
                        {trans.payStatus}
                    </td>
                   
            </tr>
                )
            })}
           
        </tbody>
    </table>
</div>
    )



}