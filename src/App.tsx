import {useEffect, lazy, Suspense} from "react";
import './App.css';

import {usePriceContext} from "./contexts/PriceContext.tsx";
import useFetchData from "./hooks/customhook.ts";
import { PricesObject } from './datatypes/crypto.ts';

const PriceHorizontalBoard = lazy(()=>import("./components/PriceHorizontalBoard.tsx"));
const TopNavBar = lazy(()=>import("./components/TopNavBar.tsx"));  
const BannerLayout = lazy(()=>import("./components/BannerLayout.tsx"));
const IntroductionLayout = lazy(()=>import("./components/IntroductionLayout.tsx"));
const PriceConverterTabs = lazy(()=>import("./components/PriceConverterTabs.tsx"));
const MostProfitablesLayout = lazy(()=>import("./components/MostProfitablesLayout.tsx"));
const BannerButtomsLayout = lazy(()=>import("./components/BannerButtomsLayout.tsx"));
const WhyWeLayout = lazy(()=>import("./components/WhyWeLayout.tsx"));
const InfoStatsLayout = lazy(()=>import("./components/InfoStatsLayout.tsx"));
const AdvertisingBannersLayout = lazy(()=>import("./components/AdvertisingBannersLayout.tsx"));
const PriceTable = lazy(()=>import("./components/PriceTable.tsx"));

function App() { 
  const {dispatch} = usePriceContext();
  const { data } = useFetchData('https://api2.cafearz.com/api/client/v1/currencies/prices/digital');

  useEffect(function(){
    if(data){
      dispatch({type:"update", payload:data as PricesObject});
    }
  },[data,dispatch]);
 
  return (
    <Suspense fallback={<div className="text-5xl font-slate-700 text-center py-24 font-bold">CafeArz SPA Prototype</div>}>
      <div className='rtl min-h-screen bg-slate-100 relative'>
          
          <PriceHorizontalBoard/>
          <TopNavBar/>
          
          <div className="max-w-screen-2xl mx-auto">
            <BannerLayout CompR={IntroductionLayout} CompL={PriceConverterTabs}/>
            <MostProfitablesLayout/>  
            <BannerButtomsLayout/>
            <WhyWeLayout/>
            <div className="ltr">
              <BannerLayout CompR={InfoStatsLayout} CompL={AdvertisingBannersLayout}/>
            </div>
          </div>

          <div className="bg-white py-16">
            <div className="max-w-screen-2xl mx-auto">
              <div>
                <PriceTable/>
              </div>
            </div>
          </div>
          
      </div>
    </Suspense>
     
  )
}

export default App
