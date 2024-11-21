import { useEffect, useState } from "react";
import {convertToFarsiDigits,formatNumberToFarsi} from "../utils/util.ts";
import {usePriceContext} from "../contexts/PriceContext.tsx";
import {Cryptocurrency} from "../datatypes/crypto.ts"; 



const AdvertisingBannersLayout = () => {
    const {state} = usePriceContext();
    const [coins, setCoins] = useState<Cryptocurrency[]>([]);

    useEffect(function(){
        if(state){
            setCoins(Object.values(state?.prices || {}).slice(0,5));
        }
    },[state]);


    return (
        <div className="hidden lg:block w-full h-full relative">
            <div className="absolute top-0 right-1/2 translate-x-1/2 min-w-fit w-11/12 xl:w-9/12 2xl:w-8/12 h-fit z-10">
                <div className="flex flex-col p-4 rounded-xl bg-white gap-2 shadow-2xl">
                    {
                        coins.length ? coins.map((coin,idx)=>{
                            return (
                                <div key={coin.service_id} className={`flex gap-2 px-4 py-1 hover:cursor-pointer ${idx === 0 ? 'bg-slate-100' : 'bg-transparent'} hover:bg-slate-100 rounded-xl`}>
                                    <div className="flex-1 space-y-2 py-2">
                                        <div className="flex flex-row-reverse justify-between font-bold">
                                            <div>{coin.title}</div>
                                            <div className="text-slate-400">{formatNumberToFarsi(coin.price.dollar)}</div>
                                        </div>   
                                        <div className="flex flex-row-reverse justify-between">
                                            
                                        <div>BTC</div>
                                        <div className={`font-semibold ${coin.chart.changes === "up" ? "text-green-400" : "text-red-400"}`}>
                                            <div>+{convertToFarsiDigits(`${coin.chart.changes_percentage}`)}%</div> 
                                        </div>
                                        </div>   
                                    </div>
                                    <div className="flex-none flex items-center">
                                        <img src={coin.base_icon} className="object-contain w-[54px] aspect-square" />
                                    </div>                                  
                                </div>
                            );
                        }) : [1,2,3,4,5].map((num)=>{
                            return (
                                <div key={num} className="animate-pulse m-1 bg-slate-100 h-[80px] rounded-lg"></div>
                            );
                        })
                    }
                    
                </div>
            </div>
             
            <div className="absolute bottom-0 left-0  min-w-fit w-8/12 h-fit z-20">
                <div className="flex flex-col py-6 rounded-xl bg-white gap-6 shadow-2xl">
                    <div className="flex flex-row items-center pb-4 border-b-4 border-slate-100 px-4">
                        <div className="flex-1">
                            <div className="flex-none flex items-center">
                                <img src="vite.svg" className="object-contain w-[48px]  aspect-square bg-slate-300 rounded-xl p-2" />
                            </div> 
                        </div>
                        <div className="flex-none w-fit">
                                <div  className="flex gap-2 hover:cursor-pointer bg-transparent hover:bg-slate-100 rounded-xl">
                                    <div className="flex-1 space-y-1">
                                        <div className="flex flex-row-reverse justify-between font-bold text-slate-500 text-base">
                                            <div>جدیدترین رمزارز کافه ارز</div> 
                                        </div>   
                                        <div className="flex flex-row-reverse justify-between">
                                            <div className="text-slate-400 text-xs font-bold">کافه ارز ارزان ترین در پرداخت های ارزی شما</div> 
                                        </div>   
                                    </div>
                                    <div className="flex-none flex items-center">
                                        <img src="vite.svg" className="object-contain w-[32px] aspect-square " />
                                    </div>                                  
                                </div>
                        </div>
                    </div>
                    <div className="px-2 ">
                    {
                        coins.length ? coins.slice(0,1).map((coin,idx)=>{
                            return (
                                <div key={coin.service_id} className={`flex gap-2 px-4 py-1 hover:cursor-pointer ${idx === 0 ? 'bg-slate-100' : 'bg-transparent'} hover:bg-slate-100 rounded-xl`}>
                                    <div className="flex-1 space-y-2 py-2">
                                        <div className="flex flex-row-reverse justify-between font-bold">
                                            <div>{coin.title}</div>
                                            <div className="text-slate-400">{formatNumberToFarsi(coin.price.dollar)}</div>
                                        </div>   
                                        <div className="flex flex-row-reverse justify-between">
                                            
                                        <div>BTC</div>
                                        <div className={`font-semibold ${coin.chart.changes === "up" ? "text-green-400" : "text-red-400"}`}>
                                            <div>+{convertToFarsiDigits(`${coin.chart.changes_percentage}`)}%</div> 
                                        </div>
                                        </div>   
                                    </div>
                                    <div className="flex-none flex items-center">
                                        <img src={coin.base_icon} className="object-contain w-[54px] aspect-square" />
                                    </div>                                  
                                </div>
                            );
                        }) : [1].map((num)=>{
                            return (
                                <div key={num} className="animate-pulse m-1 bg-slate-100 h-[80px] rounded-lg"></div>
                            );
                        })
                    }
                        
                    </div> 
                    <div className="px-4 ">
                        <button className="shadow-2xl px-4 py-3 w-full text-white bg-green-500 rounded-lg hover:bg-green-600 transition-colors duration-200">
                           خرید ارز دیجیتال
                        </button>
                    </div> 
                </div>
            </div>        

        </div>
    );
}

export default AdvertisingBannersLayout;