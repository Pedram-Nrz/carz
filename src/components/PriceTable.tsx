import { useState, ChangeEvent} from 'react';
import {convertToFarsiDigits,formatNumberToFarsi} from "../utils/util.ts";
import Pagination from '../components/PaginationLayout.tsx';  
import SplineAreaChart from "../components/CustomChart.tsx";
import {usePriceContext} from "../contexts/PriceContext.tsx";
import {Cryptocurrency} from "../datatypes/crypto.ts"; 

 
 
const Table = () => {
  const {state} = usePriceContext();
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 9;

 

  const filteredData = state ? Object.values(state?.prices || {}).filter((item: Cryptocurrency) =>{
    return item?.name && item.name.toLowerCase().includes(searchTerm.toLowerCase()); 
  }) : [];
 

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const currentData = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1);  
  };

  return (
    <div className="space-y-6 px-8 2xl:px-0">
      <div className="flex flex-col items-start gap-6 lg:gap-0 lg:flex-row lg:items-center">
        <div className="flex-1 space-y-3">
            <div className="flex flex-row gap-4">
                <div className="text-2xl lg:text-3xl font-bold text-slate-600">ارزهای دیجیتال</div>
                <div className="rounded-lg bg-green-300 bg-opacity-35  text-green-500 text-xs lg:text-sm font-bold px-4 py-2">قیمت لحظه ایی</div>
            </div>
            <div>
                <div className="text-slate-500 font-semibold text-xs lg:text-sm">خرید و سادگی، امنیت و سرعت بالای خرید و <span className="text-slate-900">فروش بیش از 600 ارز دیجیتال</span></div>
            </div>
        </div>
        <div className="relative flex-none flex items-center w-fit">
            <div className="absolute right-3 h-5 w-5 bg-slate-100 rounded-sm text-black flex items-center justify-center">
                 
                <span>!</span>
            </div>
            <input
                type="text"
                value={searchTerm}
                onChange={handleSearch}
                placeholder="جستجوی ارز..."
                className="pl-4 pr-12 py-4 placeholder:text-slate-500 appearance-none outline-none focus:border-gray-300 border border-gray-300 rounded-lg focus:outline-none "
            />
        </div> 
      </div>
      <div className="overflow-x-auto overflow-y-hidden rounded-2xl">
        <table className="min-w-full bg-white border border-white table-auto overflow-hidden">
          <thead className="bg-slate-100 text-slate-800">
            <tr className="">
              <th className="py-6 px-6 text-right">ارز</th>
              <th className="py-6 px-4  hidden lg:table-cell">قیمت به دلار</th>
              <th className="py-6 px-4  hidden lg:table-cell">قیمت خرید</th>
              <th className="py-6 px-4  hidden lg:table-cell">قیمت فروش</th>
              <th className="py-6 px-4  hidden lg:table-cell">تغییرات</th>
              <th className="py-6 px-4  hidden md:table-cell">نمودار</th>
              <th className="py-6 px-4  hidden md:table-cell">معامله</th>
            </tr>
          </thead>
          <tbody>
            {currentData.map((item: Cryptocurrency, index: number) => (
              <tr key={item.symbol} className={`${index % 2 !== 0 ? 'bg-slate-100' : 'bg-[#fafafa30]'}`}>


                <td className="py-2 px-4 text-right  ">
                    <div className="ltr flex flex-col items-end gap-2 lg:gap-0  border-slate-100 md:py-0 py-4">
                        <div className="flex-1 w-fit">
                                <div  className="flex gap-2   bg-transparent   rounded-xl">
                                    <div className="flex-1 space-y-1">
                                        <div className="flex flex-row-reverse justify-start gap-2 font-bold text-slate-700 text-sm md:text-base">
                                            <div>{item.title}</div> 
                                            <div className="text-slate-300">{item.symbol}</div> 
                                        </div>   
                                        <div className="flex flex-row-reverse justify-between">
                                            <div className="text-slate-300 text-sm font-bold">{item.name}</div> 
                                        </div>   
                                    </div>
                                    <div className="flex-none flex items-center">
                                        <img src={item.base_icon} className="object-contain w-[32px] aspect-square " />
                                    </div>                                  
                                </div>
                        </div>
                        <div className="lg:hidden space-y-2">

                            <div className=" flex flex-row text-sm gap-4 justify-between">
                                
                                    <div className="text-slate-700 ">${formatNumberToFarsi(item.price.dollar)}</div>
                                    <div className="font-bold before:content-[':']">قیمت به دلار</div>
                            </div>
                            <div className=" flex flex-row text-sm gap-4 justify-between">
                                
                                <div className="text-slate-700 ">${formatNumberToFarsi(item.price.buy)}</div>
                                <div className="font-bold before:content-[':']">قیمت خرید</div>
                            </div>

                            <div className=" flex flex-row text-sm gap-4 justify-between">
                                
                                <div className="text-slate-700 ">${formatNumberToFarsi(item.price.sell)}</div>
                                <div className="font-bold before:content-[':']">قیمت فروش</div>
                            </div>

                            <div className=" flex flex-row text-sm gap-4 justify-between">
                                
                                <div className={`${item.chart.changes === "up" ? "text-green-700" : "text-red-700"}`}>{convertToFarsiDigits(`${item.chart.changes_percentage}`)}%</div>
                                <div className="font-bold before:content-[':']">تغییرات</div>
                            </div>
                            
 
                       </div>

                       <div className="md:hidden">
  
                            <div className=" flex flex-col text-sm gap-4 justify-between">
                                
                            <div className="flex flex-row gap-4 text-xs lg:text-base my-4">

                                <div>
                                    <button className="relative border hover:border-red-400 hover:bg-red-400  hover:text-white hover:shadow-xl text-slate-800 rounded-md font-semibold py-2 px-8  text-sm">
                                        <div className="absolute top-0 bottom-0 right-3 flex items-center justify-center"><span>!</span></div>
                                        فروش
                                    </button>
                                </div>
                                <div>
                                    <button className="relative border hover:border-green-400 hover:bg-green-400  hover:text-white hover:shadow-xl text-slate-800 rounded-md font-semibold py-2 px-8  text-sm">
                                        <div className="absolute top-0 bottom-0 right-3 flex items-center justify-center"><span>!</span></div>
                                        خرید
                                    </button>
                                </div>
                            </div> 
                            </div>
                       </div>

                    </div>
                </td>



                <td className="py-2 px-4 text-center hidden lg:table-cell">
                    <div className="text-slate-700 font-bold">${formatNumberToFarsi(item.price.dollar)}</div>
                </td>
                <td className="py-2 px-4 text-center hidden lg:table-cell">{formatNumberToFarsi(item.price.buy)}</td>
                <td className="py-2 px-4 text-center hidden lg:table-cell">{formatNumberToFarsi(item.price.sell)}</td>
                <td className="py-2 px-4 text-center hidden lg:table-cell"> <div className={`${item.chart.changes === "up" ? "text-green-700" : "text-red-700"}`}>{convertToFarsiDigits(`${item.chart.changes_percentage}`)}%</div></td>
                <td className="py-2 px-4 text-center hidden md:table-cell">
                    <div className="   flex  justify-center">
                        <SplineAreaChart id={item.service_id} colors={item.chart.changes === "up" ? {stroke:"#16a34a",top:"#16a34a",bottom:"#86efac"} : {stroke:"#dc2626",top:"#dc2626",bottom:"#fca5a5"}} data={
                          Object.entries(item.chart.data).map((data)=>{
                            const [name,value] = data;
                            return {name,value:parseFloat(value)}
                          })
                        }/>
                    </div>
                </td>
                <td className="py-2 text-center hidden md:table-cell ">
                    <div className="flex flex-row gap-4 text-xs lg:text-base justify-center items-center  ">
                        <div>
                        <button className="relative border hover:border-green-400 hover:bg-green-400  hover:text-white hover:shadow-xl text-slate-800 rounded-xl font-semibold py-2 px-8  text-sm">
                                <div className="absolute top-0 bottom-0 right-3 flex items-center justify-center"><span>!</span></div>
                                خرید
                            </button>
                        </div>
                        <div>
                            <button className="relative border hover:border-red-400 hover:bg-red-400  hover:text-white hover:shadow-xl text-slate-800 rounded-xl font-semibold py-2 px-8  text-sm">
                                <div className="absolute top-0 bottom-0 right-3 flex items-center justify-center"><span>!</span></div>
                                فروش
                            </button>
                        </div>
                    </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-center items-center mt-4 w-fit mx-auto bg-slate-100 rounded-lg px-4">
        <Pagination currentPage={currentPage} onPageChange={setCurrentPage} totalPages={totalPages}/>
      </div>
 
    </div>
  );
};

export default Table;
 


 