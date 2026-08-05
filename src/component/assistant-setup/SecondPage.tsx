import tag from "../../assets/assistant-setup/secondpage/Group (4).svg"
import card from "../../assets/assistant-setup/secondpage/img (1).svg"

const SecondPage = () => {
    return (
        <div className="flex lg:flex-row flex-col lg:justify-between lg:px-30 md:px-20 py-10 border-t border-[#F7F5F1] ">

            <div className="lg:mt-16 max-sm:px-5">
                 <div><img src={tag}/></div>
                 <h1 className="font-normal text-[32px] lg:text-[40px] lg:w-120 mt-3 font-cal-sans text-[#171F2A] leading-tight  ">Pick your specialty. Sernio speaks your language from day one.</h1>
                 <p className="text-[#6B7280] text-[14px]  font-manrope font-medium mt-5 lg:w-110">Nine pre-built templates tuned to your specialty's vocabulary — the intake questions, escalation rules, and call logic are already configured. Dental patients ask different questions than OB/GYN patients. Sernio knows this.</p>
            </div>
            <div className="max-lg:mt-5 ">
                  <img src={card}/>
            </div>

        </div>
    )
}

export default SecondPage;