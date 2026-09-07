import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid"
import { useState } from "react"

export const Navbar = () => {

    const [open , setOpen] = useState(false);

    const handleHamburger = ()=>{
        setOpen(!open);
    }
    
    return  <>
    
      <div className="navbar bg-[#ffffffeb] py-4 px-10">
        <div className="flex max-w-[1600px] w-full mx-auto justify-between items-start lg:items-center relative">
            <a href="/"><h1 className="text-3xl">BloodLink</h1></a>
            <ul className="lg:flex hidden items-center gap-[32px]">
                <li><a className="text-[#475569] font-medium text-base hover:text-[#d90429]" href="#">Home</a></li>
                <li><a className="text-[#475569] font-medium text-base hover:text-[#d90429]" href="#">Find Donor</a></li>
                <li><a className="text-[#475569] font-medium text-base hover:text-[#d90429]" href="#">Groups</a></li>
                <li><a className="text-[#475569] font-medium text-base hover:text-[#d90429]" href="#">Blog</a></li>
                <li><a className="text-[#475569] font-medium text-base hover:text-[#d90429]" href="#">About</a></li>
            </ul>
            <div className="lg:flex hidden gap-2 justify-between items-center">
                <select name="lan" id="languageSelector" className="bg-[#f1f5f9] rounded-lg px-3 py-[6px]">
                    <option className="text-xs" value="en">EN</option>
                    <option className="text-xs" value="en">BN</option>
                </select>
                <a href="#" className="border border-[#e2e8f0] px-5 py-2 text-base text-[#334155] font-medium rounded-lg">Login</a>
             <a
             href="#"
             className=" text-white px-5 py-2 bg-[linear-gradient(135deg,rgb(217,4,41),rgb(239,35,60))] shadow-[rgba(217,4,41,0.35)_0px_4px_12px] text-base font-medium rounded-lg">
             Get Started
             </a>
            </div>

             <div onClick={handleHamburger}  className="block lg:hidden">

                {open ? <XMarkIcon className="h-7 w-7 text-[#344257] cursor-pointer"/> : <Bars3Icon className="h-7 w-7 text-[#344257] cursor-pointer" /> }
               
             </div>
             {/* --------------------- mobile menu ----------------------- */}

             <div className={`mobile-menu absolute top-[calc(100%+20px)] ${open? "left-0": "-left-full"} transition-all duration-500 ease-out`}>
                  <li className="list-none mb-1"><a className="text-[#475569] font-medium text-base hover:text-[#d90429]" href="#">Home</a></li>
                  <li className="list-none mb-1"><a className="text-[#475569] font-medium text-base hover:text-[#d90429]" href="#">Find Donor</a></li>
                  <li className="list-none mb-1"><a className="text-[#475569] font-medium text-base hover:text-[#d90429]" href="#">Groups</a></li>
                  <li className="list-none mb-1"><a className="text-[#475569] font-medium text-base hover:text-[#d90429]" href="#">Blog</a></li>
                  <li className="list-none mb-1"><a className="text-[#475569] font-medium text-base hover:text-[#d90429]" href="#">About</a></li>

                   <select name="lan" id="languageSelector" className="bg-[#f1f5f9] mb-5 mt-5 block rounded-lg px-3 py-[6px]">
                    <option className="text-xs" value="en">EN</option>
                    <option className="text-xs" value="en">BN</option>
                </select>
                
                <a href="#" className="border border-[#e2e8f0] mb-5 block px-5 py-2 text-base text-[#334155] font-medium rounded-lg">Login</a>
             <a href="#" className=" text-white px-5 py-2 bg-[linear-gradient(135deg,rgb(217,4,41),rgb(239,35,60))] shadow-[rgba(217,4,41,0.35)_0px_4px_12px] text-base font-medium rounded-lg">
             Get Started </a>

             </div>
                 
        </div>
      </div>

    </>
}