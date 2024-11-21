import { useState, Suspense, useEffect,useRef } from 'react';
import {formatNumberToFarsi} from "../utils/util.ts";
const TabView = () => {
  const [activeTab, setActiveTab] = useState<number>(1);
  const indicatorRef = useRef<HTMLDivElement>(null);

  const handleTabClick = (tab: number) => {
    setActiveTab(tab);
  };

 
  useEffect(() => {
    if (indicatorRef.current) {
      indicatorRef.current.style.transform = `translateX(${activeTab === 1 ? '100%' : '0%'})`;
    }
  }, [activeTab]);

  return (
    <div className="bg-white w-11/12 md:w-8/12 lg:w-10/12 xl:w-8/12 lg:shadow-2xl mx-auto rounded-xl overflow-hidden ">
      <div className="relative flex py-4">
        <button
          onClick={() => handleTabClick(1)}
          className={`flex-1 font-bold px-4 py-2 text-center transition-colors duration-200 ${activeTab === 1 ? 'text-gray-900' : 'text-gray-400'}`}
        >
          خرید سریع
        </button>
        <button
          onClick={() => handleTabClick(2)}
          className={`flex-1 font-bold px-4 py-2 text-center transition-colors duration-200 ${activeTab === 2 ? 'text-gray-900' : 'text-gray-400'}`}
        >
          فروش سریع
        </button>
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-slate-100 z-10"></div>
        <div
          ref={indicatorRef}
          className="absolute bottom-0 left-0 h-1 w-1/2 bg-green-500 transition-transform duration-300 z-20" 
        />
 
      </div>
      <div className="px-4 py-8">
        <Suspense fallback={<div>در حال بارگذاری...</div>}>
          {activeTab === 1 ? <FormLayout /> : <FormLayout />}
        </Suspense>
        
      </div>
    </div>
  );
};



const FormLayout = () => {
  const [isReversed, setIsReversed] = useState<boolean>(false); 
  const toggleOrder = () => {
    setIsReversed(prevState => !prevState);
  };
 

  return (
     
     <form className="relative p-4   rounded-lg" onSubmit={(e)=>{e.preventDefault()}}>
      <div className='flex flex-col gap-6 relative'>
          <div className={`relative transition-transform duration-300 bg-slate-200 rounded-lg pr-20 py-2 ${isReversed ? 'order-last' : ''}`}>
            <input type="number" defaultValue={123} className="text-left font-bold w-full px-3 py-2 border-0 outline-none appearance-none bg-transparent rounded-md pr-8" />
            <select defaultValue={"option1"} className="absolute right-2 top-1/2 -translate-y-1/2 h-fit my-auto px-3 py-2 border-0 outline-none appearance-none bg-white m-1 rounded-lg">
                <option value="option1">ارز یک</option>
                <option value="option2">ارز دو</option>
                <option value="option3">ارز سه</option>
            </select>
          </div>
          <div className={`relative transition-transform duration-300 bg-slate-200 rounded-lg pr-20 py-2 ${isReversed ? 'order-first' : ''}`}>
            <input type="number" defaultValue={456} className="text-left font-bold w-full px-3 py-2 border-0 outline-none appearance-none bg-transparent rounded-md pr-8" />
            <select defaultValue={"option2"} className="absolute right-2 top-1/2 -translate-y-1/2 h-fit my-auto px-3 py-2 border-0 outline-none appearance-none bg-white m-1 rounded-lg">
                <option value="option1">ارز یک</option>
                <option value="option2">ارز دو</option>
                <option value="option3">ارز سه</option>
            </select>
          </div>
 
          <button
            onClick={toggleOrder}
            className="absolute top-1/2 left-1/2  text-white bg-blue-500 transform -translate-x-1/2 -translate-y-1/2 rounded-full aspect-square w-[48px] z-30">
            !
          </button>
      </div>
      <div className="mb-4 flex flex-col lg:flex-row justify-between px-4 mt-20 font-bold">
          
          <div>قیمت پرداخت نهایی</div>
          <div className="flex flex-row gap-4">
            <span>{formatNumberToFarsi(1080529)}</span>
            <span>ریال</span>
          </div>
      </div>
      <div className="px-4">
        <button className="shadow-2xl mt-6  px-4 py-3 w-full text-white bg-green-500 rounded-lg hover:bg-green-600 transition-colors duration-200">
          ثبت سفارش
        </button>
      </div>
     </form>
     
  );
};

export default TabView;

