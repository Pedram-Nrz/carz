import PriceNavLoop from "./PriceNavLoop.tsx";
const  PriceHorizontalBoard = () => {
    return (
        <div className="flex bg-blue-950">
            <div className="flex-none my-4 mr-4 w-fit text-white font-bold">
                <div className="flex flex-row gap-2 p-4 bg-blue-600 bg-opacity-25 rounded-lg overflow-hidden">
                    <div className="w-fit h-fit my-auto">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                    </div>
                    <div>{new Intl.DateTimeFormat('fa-IR',{dateStyle: 'long'}).format(Date.now())}</div>
                </div>
            </div>
            <div className="flex-1 flex">
                <div className=" my-auto h-fit flex-none">
                    <div className="h-full my-auto ">
                        <PriceNavLoop/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PriceHorizontalBoard;