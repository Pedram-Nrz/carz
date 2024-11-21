const BannerLayout = ({CompR, CompL}:{CompR:React.LazyExoticComponent<() => JSX.Element>, CompL: React.LazyExoticComponent<() => JSX.Element>}) => {
    return (
        <div className="grid grid-rows-1 lg:grid-cols-12 py-4 md:py-8 lg:py-32 gap-8 lg:gap-0">
            <div className="row-span-1 lg:col-span-7 flex items-center justify-center 2xl:justify-normal ">
                <CompR/>
            </div>
            <div className="row-span-1 lg:col-span-5  ">
            <div className="lg:bg-blue-100  lg:rounded-full lg:aspect-square">
                <CompL/>
            </div> 
                
            </div>
            
        </div>

    );
}

export default BannerLayout;