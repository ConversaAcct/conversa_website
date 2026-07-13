import Icons from "../assets/Icons";
import FifthSection from "../component/FifthSection";
import FourthSection from "../component/FourthSection";
import Heropage from "../component/Heropage";
import LastSection from "../component/LastSection";
import SecondSection from "../component/SecondSection";
import SixthSection from "../component/SixthSection";
import ThirdSection from "../component/ThirdSection";

const Homepage = () => {
    return (
        <div>

            <Heropage/>
            <div className="items-center lg:flex flex-col hidden">
                <div>
                    <p className="text-center font-manrope text-[16px] font-medium text-[#6B7280]">Benefits of using Sernio</p>
                </div>

              <div className="mt-8">  {Icons.belowIcon}</div>
            </div>
            <SecondSection/>
            <ThirdSection/>
            <FourthSection/>
            <FifthSection/>
            <SixthSection/>
            <LastSection/>

            

        </div>
    )
}

export default Homepage;