import FeatureList from "../resuable/FeatureList";
import Tag from "../resuable/Tag";
import chromeImage from "../../assets/security-compliance/Chrome.png";

const auditFeatures = [
    "Every call logged with timestamp, caller ID, and outcome",
    "Rule triggers logged with rule ID, type, and action taken",
    "All configuration changes logged with user identity and time",
    "Logs exportable for compliance documentation and audits",
];



const FourthSection = () => {
    return(
        <div className="mx-auto flex max-w-350 flex-col gap-20 lg:gap-36 py-5 lg:py-10 xl:py-20"    data-navbar-theme="white">
        {/* ===== Booking ===== */}
        <div className="grid items-center gap-10 max-lg:px-5 lg:grid-cols-2 lg:gap-24">
            <div>
                <Tag isDark>Audit logs</Tag>
                <h2 
             className=" font-normal text-[32px] md:text-[50px] max-sm:hidden font-cal-sans text-[#171F2A] leading-tight ">
                 Every action, logged.

                    <br />
                    Every access, timestamped.
                </h2>

                <h2 
                    >
                          Every action, logged.
                          Every access, timestamped.
                </h2>

                <p className="mt-6 max-w-xl text-base leading-relaxed text-[#6B7280] lg:text-lg">
                HIPAA requires that covered entities and their business associates maintain audit trails. Sernio logs every call, every rule trigger, every data access, and every configuration change — reviewable by your compliance team at any time.
                </p>
                {/* Feature list hidden on mobile, as in the mobile design */}
                <div className="hidden lg:block">
                    <FeatureList items={auditFeatures} />
                </div>
            </div>

            <div>
                <img src={chromeImage} alt="chrome image"/>
            </div>
        </div></div>
    )
}

export default FourthSection;