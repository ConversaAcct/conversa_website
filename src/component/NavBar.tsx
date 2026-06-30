import Icons from "../assets/Icons";
import FilledButton from "./FilledButton";

const NavBar = () => {
    return(
<div className="flex flex-row justify-between items-center py-2 px-3 text-[15px] bg-[#E8E8E833] border border-[#E5E7F7] w-full max-w-250  rounded-lg my-10 mx-auto">
            <div>
                {Icons.logo}
            </div>


            <div className="gap-10 flex flex-row ">
                <span className="cursor-pointer">Product</span>
                <span className="cursor-pointer">Specialties</span>
                <span className="cursor-pointer">Integrations</span>
                <span className="cursor-pointer">FAQs</span>
            </div>


            <div className="flex flex-row items-center gap-5">

               <div> 
                <span className="cursor-pointer">Sign Up</span>
                
                </div>
                <FilledButton textColor={"#F5F3FF"} text={"Book a Demo"} bgColor={"#5B0AFF"}/>

            </div>

        </div>
    )
}

export default NavBar;