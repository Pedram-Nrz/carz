const BannerButtomsLayout = () => {
    return (
        <div className="grid  grid-cols-2 lg:grid-cols-4 gap-4 pb-28 px-6 2xl:px-0">

            {
                [1,2,3,4].map((val)=>{
                    return (
                        <div key={val} className="rounded-xl overflow-hidden shadow-xl cursor-pointer">
                            <img src="banner.jpeg" className="w-full object-cover aspect-[4/2] bg-slate-100"/>
                        </div>
                    );
                })
            }

 
        </div>
    );
}

export default BannerButtomsLayout;