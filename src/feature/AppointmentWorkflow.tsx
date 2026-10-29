import HeroPage from "../component/appointment-workflow/HeroPage";
import LastSection from "../component/appointment-workflow/LastSection";
import SecondSection from "../component/appointment-workflow/SecondSection";
import ThirdSection from "../component/appointment-workflow/ThirdSection";

const AppointmentWorkflow = () => {
  return (
    <div>
     <HeroPage/>
     <SecondSection/>
      <ThirdSection/>
      <LastSection/>
    </div>
  );
}

export default AppointmentWorkflow;