import {convertToFarsiDigits} from "../utils/util.ts";
const InfoStatsLayout = () => {
    return (
        <div className="space-y-12 lg:space-y-24 p-8 my-auto ">
                <div className="space-y-6 lg:space-y-20 text-right">
                    <div className="font-bold text-4xl lg:text-5xl text-blue-950">با <span className="text-blue-500">بهترین قیمت</span> معامله رو شروع کنید</div>
                     
                    <div className="text-slate-500 font-semibold text-sm lg:text-base">بیت کوین را میتوان قدیمی ترین ارز دیجیتال جهان دانست که قدمت آن به بیش از یک دهه میرسد</div>
                </div>

                <div>
                    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 lg:divide-x  divide-slate-400 lg:-mr-10">

                         {
                            [
                                {top:"+700",bottom:"تعداد کوین ها"},
                                {top:"1680 نفر",bottom:"احراز هویت شده"},
                                {top:"2 هزار",bottom:"سفارش موفق"},
                                {top:"5 سال",bottom:"فعالیت ها"},
                            ].reverse().map((val,idx)=>{
                                return (
                                    <div key={idx} className="flex  py-4 ">
                                        <div className="flex-1 space-y-4 justify-end items-end">
                                            <div className=" py-1 font-semibold text-xl text-center">
                                                <div>{convertToFarsiDigits(val.top)}</div> 
                                            </div>   
                                            <div className="">
                                                <div className=" py-1 text-lg text-slate-500 font-semibold text-center">
                                                    <div>{val.bottom}</div> 
                                                </div> 
                                            </div>   
                                        </div> 
                                    </div>
                                );
                            })
                         }

                    </div>
                </div>

                <div className="flex flex-row justify-end gap-4 text-xs lg:text-base lg:gap-8  ">
                    <div>
                        <button className="bg-white text-slate-800 rounded-xl font-semibold py-3 px-8 shadow-xl">ارتباط با ما</button>
                    </div>
                    <div>
                        <button className="bg-blue-600 text-white rounded-xl font-semibold py-3 px-8 shadow-xl">سوالات متداول</button>
                    </div>
          
                </div>

        </div> 
    );
}

export default InfoStatsLayout;