import Layout from "../component/Layout";
import AssistanceSetup from "../feature/AssistanceSetup";
import CallAnalytics from "../feature/CallAnalytics";
import CallHandlingRules from "../feature/CallHandlingRules";
import Homepage from "../feature/Homepage";
import Waitlist from "../feature/Waitlist";

export const Route = [
    {
        element : <Layout/>,
        children : [
            {
                path : "/",
                element : <Homepage/>
            },
            {
                path : "/call-analytics",
                element : <CallAnalytics/>
            },
            {
                path : "/assistance-setup",
                element : <AssistanceSetup/>
            },
            {
                path : "/call-handling-rules",
                element : <CallHandlingRules/>
            }
        ]},

        {
            path : "waitlist",
            element : <Waitlist/>

        }


]