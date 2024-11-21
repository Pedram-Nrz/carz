import { useEffect, useState } from 'react';
import PriceNavLoopItem from "./PriceNavLoopItems.tsx";
import {usePriceContext} from "../contexts/PriceContext.tsx";
import {Cryptocurrency} from "../datatypes/crypto.ts"; 

const PriceNavLoop = () => { 
  const {state} = usePriceContext();
  const [coins, setCoins] = useState<Cryptocurrency[]>([]);

  useEffect(function(){ 
    setCoins(Object.values(state?.prices || {}).slice(0,20));
  },[state]);

  return (
    <div className="overflow-hidden whitespace-nowrap text-white">
      <div
        className="flex flex-nowrap scrolling gap-4"
      >
        { coins.length ? coins.map((item) => {
          const {name,symbol,base_icon,chart,price} = item;
          return (
            <div
            key={symbol}
            className="px-4 w-fit">
              <PriceNavLoopItem imageUrl={base_icon} price={price.dollar} title={name} stat={{value:`${chart.changes_percentage}`, dir:chart.changes}}/>
            </div>
          );
        })
        : <div className="animate-pulse w-[200px] mx-12 py-4 bg-slate-200 bg-opacity-80 rounded-lg"></div>
      }          
      </div>
    </div>
  );
};

export default PriceNavLoop;
