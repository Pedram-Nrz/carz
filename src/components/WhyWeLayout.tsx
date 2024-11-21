const WhyWeLayout = () => {

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pb-28 px-6 2xl:px-0">
            {
                [
                    {top:"خرید و فروش بدون کارمزد"},
                    {top:"احراز هویت سریع"},
                    {top:"بیش از یک دهه اعتبار"},
                    {top:"امنیت کامل و پایدار"},
                ].map((val,idx)=>{
                    return (
                        <div key={idx} className={`flex flex-col justify-end md:justify-center items-start md:items-center shadow-xl gap-4 py-8 px-8 md:px-0 md:gap-12 md:py-20 rounded-xl bg-transparent ${idx===1 ? 'bg-white' : 'bg-transparent'} hover:bg-white hover:cursor-pointer`}>
                            <div className="flex items-center justify-center aspect-square w-20 rounded-3xl bg-slate-200">
                                <span className="text-blue-500 text-3xl">!</span>
                            </div>
                            <div className="font-bold text-lg">
                                {val.top}
                            </div>
                            <div className="font-bold text-base text-balance text-right md:text-center text-slate-500">
                                بیت کوین را میتوان قدیمی ترین ارز دیجیتال جهان دانست که قدمت آن به بیش از یک دهه میرسد
                            </div>
                        </div>
                    );
                })
            }
        </div>
    );

}

export default WhyWeLayout;