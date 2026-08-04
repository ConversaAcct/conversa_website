import Layout from "../component/Layout";
import AssistanceSetup from "../feature/AssistanceSetup";
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
                path : "/assistance-setup",
                element : <AssistanceSetup/>
            }
        ]},

        {
            path : "waitlist",
            element : <Waitlist/>

        }


]