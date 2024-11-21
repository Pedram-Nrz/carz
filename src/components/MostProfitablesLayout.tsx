import { useEffect, useState } from "react";
import {convertToFarsiDigits,formatNumberToFarsi} from "../utils/util.ts";
import {usePriceContext} from "../contexts/PriceContext.tsx";
import {Cryptocurrency} from "../datatypes/crypto.ts";  

const MostProfitablesLayout = ()=>{
    const {state} = usePriceContext();
    const [coins, setCoins] = useState<Cryptocurrency[]>([]);

    useEffect(function(){
        if(state){
            setCoins(Object.values(state?.prices || {}).slice(0,4));
        }
    },[state]);


    return (
        <div className="pt-12  pb-20 space-y-6 px-6 2xl:px-0 lg:pt-0">
            <div className="text-2xl lg:text-3xl font-bold text-slate-600">پرسودترین ارزها</div>
            <div className="flex flex-row justify-between items-center">

                <div className="rounded-lg bg-green-300 bg-opacity-35  text-green-500 text-sm lg:text-base font-bold px-4 py-2">پرسودترین ها در 24 ساعت اخیر</div>

                <div className="flex flex-row gap-2 ">
                    <button className="btn-small bg-white rounded-lg w-[48px] h-[48px] text-slate-600 border-none">!</button>
                    <button className="btn-small bg-white rounded-lg w-[48px] h-[48px] text-slate-600 border-none">!</button>
                </div>
            </div>
            <div className="ltr grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 bg-white shadow-xl overflow-hidden rounded-xl px-6 py-4 lg:divide-x  divide-slate-200">

                {
                    coins.length ? coins.map((coin)=>{
                        return (
                            <div key={coin.service_id} className="flex gap-2 px-4 py-4">
                                <div className="flex-1 space-y-4">
                                    <div className="flex flex-row-reverse justify-between font-bold">
                                        <div>{coin.title}</div>
                                        <div>{formatNumberToFarsi(coin.price.sell)}</div>
                                    </div>   
                                    <div className="flex flex-row-reverse justify-between">
                                    <div className={`flex flex-row place-items-center px-4 py-1 font-semibold ${coin.chart.changes === "up" ? "text-green-400" : "text-red-400"}  bg-slate-300 bg-opacity-35 rounded-lg`}>
                                        <div>{convertToFarsiDigits(`${coin.chart.changes_percentage}`)}%</div>
                                        <div>!</div>
                                    </div>
                                        <div>${formatNumberToFarsi(coin.price.dollar)}</div>
                                    </div>   
                                </div>
                                <div className="flex-none">
                                    <img src={coin.base_icon} className="object-contain w-[64px] aspect-square m-auto" />
                                </div>
                            </div>
                        );
                    }) : 
                    [1,2,3,4].map((num)=>{
                        return (
                            <div key={num} className="animate-pulse m-1 bg-slate-100 h-[104px] rounded-lg"></div>
                        );
                    })
                }
 
 
            </div>
        </div>
    );

}

export default MostProfitablesLayout;