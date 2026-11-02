import FirstSection from "../component/how-it-works/FirstSection";
import HeroPage from "../component/how-it-works/HeroPage";
import LastSection from "../component/how-it-works/LastSection";
import SecondSection from "../component/how-it-works/SecondSection";
import ThirdSection from "../component/how-it-works/ThirdSection";

const HowItWorks = () => {
    return(
        <div>

            <HeroPage/>
            <FirstSection/>
            <ThirdSection/>
            <SecondSection/>
            <LastSection/>

        </div>
    )
}

export default HowItWorks;