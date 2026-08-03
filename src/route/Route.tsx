import Layout from "../component/Layout";
import Homepage from "../feature/Homepage";
import Waitlist from "../feature/Waitlist";

export const Route = [
    {
        element : <Layout/>,
        children : [
            {
                path : "/",
                element : <Homepage/>
            }
        ]},

        {
            path : "waitlist",
            element : <Waitlist/>

        }


]