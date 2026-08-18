import FourthPage from "../component/call-analytics/FourthPage";
import HeroPage from "../component/call-analytics/HeroPage";
import LastSection from "../component/call-analytics/LastSection";
import SecondPage from "../component/call-analytics/SecondPage";
import ThirdPage from "../component/call-analytics/ThirdPage";

const CallAnalytics = () => {
    return(
        <div>
            <HeroPage/>

            <SecondPage/>
            <div className="md:mt-16 mt-10"   data-navbar-theme="white">
             <ThirdPage/>
            </div>
            <FourthPage/>
            <LastSection/>


        </div>
    )
}

export default CallAnalytics;