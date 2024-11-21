import { useState } from 'react'; 
import {convertToFarsiDigits} from "../utils/util.ts";
 
const TopNavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);

  const handleDropdownToggle = (index: number) => {
    setActiveDropdown(activeDropdown === index ? null : index);
  };

  return (
    <nav className="bg-white shadow-md xl:px-12 px-4 rtl py-8 md:py-0 sticky top-0 z-50"> 
 
      <div className="flex flex-row items-center justify-stretch md:gap-12">
        {/* Cafearz logo */}
        <div className="flex-1 md:flex-none flex items-center gap-2 z-30">
          <img src="vite.svg" alt="Logo" className="h-10" />
          <div className="flex flex-col">
            <span className="text-lg font-bold">کافه ارز</span>
            <span className="md:hidden lg:block text-xs font-normal">پرداخت در دنیای بدون مرز</span>
          </div>
        </div>

        {/* Cafearz services */}
        <div className="hidden md:flex-1 md:flex md:flex-row md:items-start  gap-4 text-blue-950 text-sm">
          <div className="relative group py-8 ">
            <div className="absolute bottom-0 left-1/3 w-1/3 h-[4px] bg-blue-600 rounded-t-md mx-auto"></div>
            <button className="nav-item flex flex-row gap-4 font-bold">
              <span>خدمات ارزی</span>
              <span className="text-slate-400">!</span>
            </button>
            <div className="dropdown-content hidden group-hover:block absolute bg-white shadow-md mt-8 rounded-lg overflow-hidden">
              <a href="#" className="block px-4 py-2 hover:bg-slate-100">خدمت ارزی یک</a>
              <a href="#" className="block px-4 py-2 hover:bg-slate-100">خدمت ارزی دو</a>
              <a href="#" className="block px-4 py-2 hover:bg-slate-100">خدمت ارزی سه</a>
            </div>
          </div>
          <div className="relative group  py-8">
            <button className="nav-item flex flex-row gap-4 font-bold">
              <span>ارزهای دیجیتال</span>
              <span className="text-slate-400">!</span>
            </button> 
            <div className="dropdown-content hidden group-hover:block absolute bg-white shadow-md mt-8  rounded-lg overflow-hidden">
              <a href="#" className="block px-4 py-2 hover:bg-slate-100">ارز دیجیتال یک</a>
              <a href="#" className="block px-4 py-2 hover:bg-slate-100">ارز دیجیتال دو</a>
              <a href="#" className="block px-4 py-2 hover:bg-slate-100">ارز دیجیتال سه</a>
            </div>
          </div>
          <div className="relative group py-8">
            <button className="nav-item flex flex-row gap-4 font-bold">
              <span>بیشتر</span>
              <span className="text-slate-400">!</span>
            </button> 
            <div className="dropdown-content hidden group-hover:block absolute bg-white shadow-md  mt-8  rounded-lg overflow-hidden">
              <a href="#" className="block px-4 py-2 hover:bg-slate-100">بیشتر یک</a>
              <a href="#" className="block px-4 py-2 hover:bg-slate-100">بیشتر دو</a>
              <a href="#" className="block px-4 py-2 hover:bg-slate-100">بیشتر سه</a>
            </div>
          </div>
        </div>

        {/* Cafearz contacts */}
        <div className="hidden md:flex-none  md:flex justify-end  items-center  z-10">



          <div className="hidden xl:flex flex-row-reverse divide-x divide-slate-300">
            <div className=' px-4 flex flex-col justify-between text-center'>
              <span className="text-lg flex flex-row-reverse gap-1 justify-center">
                <span className="text-blue-400">{convertToFarsiDigits('021')}</span>
                <span>{convertToFarsiDigits('910149120')}</span>
              </span>
              <span className="text-[0.55rem]">منتظر صدای گرم شما هستیم</span>
            </div>
            <div className="flex flex-row gap-2 px-4">
              <button className="btn-small bg-slate-100 rounded-lg w-[48px] h-[48px] text-slate-600 border-none">!</button>
              <button className="btn-small bg-slate-100 rounded-lg w-[48px] h-[48px] text-slate-600 border-none">!</button>
            </div>

          </div>
          <button className="bg-blue-200 text-blue-600 font-semibold text-sm px-8 py-4 rounded-lg">پنل کاربری</button>
        </div>

        {/* Hamburger menu */}
        <button
          className="md:hidden col-span-11 relative justify-self-end"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className={`hamburger-line ${isMenuOpen ? 'transform rotate-45 ' : ''}`}></div>
          <div className={`${isMenuOpen ? 'hidden' : 'hamburger-line'}`}></div>
          <div className={`hamburger-line ${isMenuOpen ? 'transform -rotate-45 ' : ''}`}></div>
        </button>
      </div>

      {/* Cafearz menu - mobile version */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="flex flex-col  mt-8  space-y-12 ">
            <div className='flex flex-col space-y-2 '>
              <div className="bg-blue-50 rounded-lg">
                <button onClick={() => handleDropdownToggle(0)}  className="w-full nav-item flex flex-row justify-between gap-4 font-bold">
                  <span>خدمات ارزی</span>
                  <span className="text-slate-400">!</span>
                </button>
                {activeDropdown === 0 && (
                <div className=" flex flex-col my-4 mx-2 space-y-2">
                    <a href="#" className="block px-4 py-2 bg-blue-100  rounded-lg hover:bg-blue-200">خدمات ارزی یک</a>
                    <a href="#" className="block px-4 py-2 bg-blue-100  rounded-lg hover:bg-blue-200">خدمات ارزی دو</a>
                    <a href="#" className="block px-4 py-2 bg-blue-100  rounded-lg hover:bg-blue-200">خدمات ارزی سه</a>
                  </div>
                )}
              </div>
              <div className=" bg-blue-50 rounded-lg">
                <button onClick={() => handleDropdownToggle(1)}  className="w-full nav-item flex flex-row justify-between gap-4 font-bold">
                  <span>ارزهای دیجیتال</span>
                  <span className="text-slate-400">!</span>
                </button>
                {activeDropdown === 1 && (
                  <div className="flex flex-col my-4 mx-2 space-y-2">
                    <a href="#" className="block px-4 py-2 bg-blue-100  rounded-lg hover:bg-blue-200">ارزهای دیجیتال یک</a>
                    <a href="#" className="block px-4 py-2 bg-blue-100  rounded-lg hover:bg-blue-200">ارزهای دیجیتال دو</a>
                    <a href="#" className="block px-4 py-2 bg-blue-100  rounded-lg hover:bg-blue-200">ارزهای دیجیتال سه</a>
                  </div>
                )}
              </div>
              <div className=" bg-blue-50 rounded-lg">
                <button onClick={() => handleDropdownToggle(2)}  className="w-full nav-item flex flex-row justify-between gap-4 font-bold">
                  <span>بیشتر</span>
                  <span className="text-slate-400">!</span>
                </button>
                {activeDropdown === 2 && (
                  <div className="flex flex-col my-4 mx-2 space-y-2">
                    <a href="#" className="block px-4 py-2 bg-blue-100  rounded-lg hover:bg-blue-200">بیشتر یک</a>
                    <a href="#" className="block px-4 py-2 bg-blue-100  rounded-lg hover:bg-blue-200">بیشتر دو</a>
                    <a href="#" className="block px-4 py-2 bg-blue-100  rounded-lg hover:bg-blue-200">بیشتر سه</a>
                  </div>
                )}
              </div>
            </div>
            <div className="flex flex-row-reverse justify-end divide-x divide-slate-300">
            <div className=' px-4 flex flex-col justify-between text-center'>
              <span className="text-lg flex flex-row-reverse gap-1 justify-center">
                <span className="text-blue-400">{convertToFarsiDigits('021')}</span>
                <span>{convertToFarsiDigits('910149120')}</span>
              </span>
              <span className="text-[0.55rem]">منتظر صدای گرم شما هستیم</span>
            </div>
            <div className="flex flex-row gap-4 px-4">
              <button className="btn-small bg-slate-100 rounded-lg w-[48px] h-[48px] text-slate-600 border-none">!</button>
              <button className="btn-small bg-slate-100 rounded-lg w-[48px] h-[48px] text-slate-600 border-none">!</button>
            </div>

          </div>
            <button className="bg-blue-200 text-blue-600 font-semibold text-sm px-8 py-4 rounded-lg">پنل کاربری</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default TopNavBar;

 


 