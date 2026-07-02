import callIcon from "../assets/ThirdSection/Group (2).svg"

const ThirdSection = () => {

    return(
        <div
        data-navbar-theme="dark"
         className="w-full bg-[#0E0D18]  mb-20 flex flex-col justify-center">

            <div className="flex flex-col items-center mt-20">
                <div className="bg-[#0E0D18] border font-medium border-[#5B0AFF] text-[#FFFFFF] py-1  flex justify-center items-center w-30 rounded-full text-[13px] ">
                    <p>The problem</p>
                </div>

                <h1 className="text-center font-normal text-white text-[45px] font-cal-sans">
                    A ringing phone is <span className="text-[#D3C1F9]">a patient you haven't lost yet;</span>
                    <br />
                    for about thirty more seconds.
                </h1>

                <p className="text-[#F3EDFF] text-[14px] text-center max-w-190 leading-7 mt-5">Most practices don't lose patients to bad care. They lose them to a phone line that rings out during lunch, a hold queue at 8:05am, or a voicemail nobody returns until Thursday. Every one of those calls was a booking, a refill, or a question someone else answered first.</p>
            </div>

            <div className="flex justify-center items-center mt-15">

                <img src={callIcon}/>
            </div>

        </div>
    )
}

export default ThirdSection;