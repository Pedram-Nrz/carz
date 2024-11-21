import {formatNumberToFarsi, convertToFarsiDigits} from "../utils/util.ts";
const PriceNavLoopItem = ({imageUrl, title, price, stat}:{imageUrl:string, title:string, price:number,stat:{value:string, dir:'up'|'down'}}) => {
    return (
        <div className="flex flex-row place-items-center gap-2  antialiased">
            <div className="p-1">
                <img src={imageUrl} className="object-contain h-6 w-6 aspect-square" />
            </div>
            <div className="">{title}</div>
            <div className="mx-2  font-bold">{formatNumberToFarsi(price)}</div>
            <div className={`flex flex-row gap-2 place-items-center px-4 py-1 font-semibold ${stat.dir === "up" ? 'text-green-400 bg-green-600 bg-opacity-35' : 'text-red-600 bg-red-200 bg-opacity-80'}  rounded-lg`}>
                <div>{convertToFarsiDigits(stat.value)}%</div>
                <div>!</div>
            </div>
        </div>
    );
}

export default PriceNavLoopItem;