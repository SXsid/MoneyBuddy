import { transStatus } from "@repo/database/client";
import { Card } from "@repo/ui/card";


interface transectionProp{
    time:Date,
    amount:number,
    status:transStatus,
    provider:string

}
export function Trans({transections}:{transections:transectionProp[]}){
    if(!transections.length){
        return(
            <Card title="Recent Transections">
                <div className="flex items-center text-white justify-center max-h-xl">
                        No Recent Transection
                </div>

            </Card>
        )
    }
    return(
        <Card title="Recent Transections">
            <div className="p-4 ">
                {transections.map(trans=>{
                    return(
                        <div className="mt-2"> 
                        <div className="flex justify-between">
                            {trans.status=="pending"?<div className="text-yellow-300 ext-sm">
                                + amount  {(trans.amount)/100}

                            </div>: trans.status=="success"?<div className="text-green-600 ext-sm">
                                + amount  {(trans.amount)/100}

                            </div>: <div className="text-red-600 ext-sm">
                                + amount  {(trans.amount)/100}

                            </div>
                            }
                        
                            <div className="text-white text-sm">
                                <div>{trans.provider}</div>
                                <div>{trans.time.toDateString()}</div>
                            </div>
                        </div>



                            
                            
                            
                            
                            
                            
                            </div>

                    )})}
                

            </div>

        </Card>
    )

}