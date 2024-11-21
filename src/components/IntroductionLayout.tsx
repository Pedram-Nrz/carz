import {convertToFarsiDigits} from "../utils/util.ts";
const IntroductionLayout = () => {
    return (
        <div className="space-y-12 lg:space-y-24 p-8 my-auto ">
                <div className="space-y-6 lg:space-y-8">
                    <div className="font-bold text-4xl lg:text-5xl text-blue-950">معاملات آنلاین</div>
                    <div className="font-bold text-5xl lg:text-6xl text-blue-400">بیش از {convertToFarsiDigits('700')} ارز</div>
                    <div><span className="font-semibold text-sm lg:text-base">خرید ارز دیجیتال</span> را در صرافی ارز دیجیتال <span className="font-semibold">کافه ارز</span>، پیشگام در خرید و تبادل ارزهای دیجیتال</div>
                </div>

                <div className="flex flex-row gap-4 text-xs lg:text-base lg:gap-8">
                    <div>
                        <button className="bg-blue-600 text-white rounded-xl font-semibold py-3 px-8 shadow-xl">همین حالا ثبت نام کن</button>
                    </div>
                    <div>
                        <button className="bg-white text-slate-800 rounded-xl font-semibold py-3 px-8 shadow-xl">لیست قیمت ارزها</button>
                    </div>
                </div>

        </div> 
    );
};

export default IntroductionLayout;