import { Card } from "@repo/ui/card";

export function Balance({amount,locked}:{amount:number,locked:number}){
    return(
        <Card title="Balance">
            <div className="p-4">
                <div className="flex justify-between border-b border-slate-700 mt-4">
                    <div className="text-blue-600">
                        Locked balance
                    </div>
                    <div className="text-white">$ {locked/100}</div>


                </div>
                <div className="flex justify-between border-b border-slate-700 mt-4">
                    <div className="text-blue-600">
                        Unocked balance
                    </div>
                    <div className="text-white">$ {amount/100}</div>


                </div>
                <div className="flex justify-between border-b border-slate-700 mt-4">
                    <div className="text-blue-600">
                        Total balance
                    </div>
                    <div className="text-white">$ {(amount+locked)/100}</div>


                </div>

            </div>

        </Card>
    )
}