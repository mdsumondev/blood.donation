export const Footer = () => {
    
    return <>
    
        <footer className="bg-[#0a0f1c] pt-12 pb-6">
            <div className="wrapper lg:flex justify-between max-w-[1600px] w-full mx-auto px-10">
               <div className="col-3 w-[25%] mb-4 lg:mb-0">
                 <a href="/"><h1 className="text-3xl text-white mb-5">BloodLink</h1></a>
                 <p className="text-[#ffffff66] text-base mb-2">Connecting blood donors with those in need across Bangladesh since 2020.</p>
                 <div className="social-icons">
                    <ul className="flex gap-4">
                        <li className="bg-white py-1 rounded-sm px-2"><a href="#" className="text-[#0a0f1c]"><i className="fa-brands fa-facebook-f"></i></a></li>
                        <li className="bg-white py-1 rounded-sm px-2"><a href="#" className="text-[#0a0f1c]"><i className="fa-brands fa-x-twitter"></i></a></li>
                        <li className="bg-white py-1 rounded-sm px-2"><a href="#" className="text-[#0a0f1c]"><i className="fa-brands fa-instagram"></i></a></li>
                    </ul>
                 </div>
               </div>
               <div className="col-3 mb-4 lg:mb-0">
                    <ul>
                        <li className="text-lg text-white font-medium mb-3">Platform</li>
                        <li className="mb-2"><a className="text-[#ffffff66] text-base" href="#">Find Donor</a></li>
                        <li className="mb-2"><a className="text-[#ffffff66] text-base" href="#">Request Blood</a></li>
                        <li className="mb-2"><a className="text-[#ffffff66] text-base" href="#">Groups</a></li>
                        <li className="mb-2"><a className="text-[#ffffff66] text-base" href="#">Blog</a></li>
                        <li className="mb-2"><a className="text-[#ffffff66] text-base" href="#">Events</a></li>
                    </ul>
               </div>
               <div className="col-3 mb-4 lg:mb-0">
                    <ul>
                        <li className="text-lg text-white font-medium mb-3">Support</li>
                        <li><a href="#" className="text-[#ffffff66] text-base" href="#" >FAQ</a></li>
                        <li><a href="#" className="text-[#ffffff66] text-base" href="#" >Contact Us</a></li>
                        <li><a href="#" className="text-[#ffffff66] text-base" href="#" >Emergency</a></li>
                        <li><a href="#" className="text-[#ffffff66] text-base" href="#" >Report Issue</a></li>
                    </ul>
               </div>
               <div className="col-3 mb-4 lg:mb-0">
                    <ul>
                        <li className="text-lg text-white font-medium mb-3">Support</li>
                        <li><a href="#" className="text-[#ffffff66] text-base" href="#">FAQ</a></li>
                        <li><a href="#" className="text-[#ffffff66] text-base" href="#">Contact Us</a></li>
                        <li><a href="#" className="text-[#ffffff66] text-base" href="#">Emergency</a></li>
                        <li><a href="#" className="text-[#ffffff66] text-base" href="#">Report Issue</a></li>
                    </ul>
               </div>
               
               
            </div>
        </footer>
    
    </>
}