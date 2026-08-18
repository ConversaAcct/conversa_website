import Layout from "../component/Layout";
import AssistanceSetup from "../feature/AssistanceSetup";
import CallAnalytics from "../feature/CallAnalytics";
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
            }
        ]},

        {
            path : "waitlist",
            element : <Waitlist/>

        }


]