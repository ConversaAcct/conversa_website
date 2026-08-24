import image1 from "../../assets/call-analytics/secondpage/1 (19).svg";
import image2 from "../../assets/call-analytics/secondpage/2 (16).svg";
import image3 from "../../assets/call-analytics/secondpage/3 (13).svg";
import image4 from "../../assets/call-analytics/secondpage/4 (4).svg";

const SecondPage = () => {
    return (
        <div className="md:grid  hidden md:grid-cols-2 lg:grid-cols-4 gap-6 lg:px-20 px-10 bg-[#FFFEFA]">
            <div>
                <img src={image1}/>
            </div>

            <div>
                <img src={image2}/>
            </div>

            <div>
                <img src={image3}/>
            </div>

            <div>
                <img src={image4}/>
            </div>
        </div>
    )
}

export default SecondPage;