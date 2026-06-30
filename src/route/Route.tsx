import Layout from "../component/Layout";
import Homepage from "../feature/Homepage";

export const Route = [
    {
        element : <Layout/>,
        children : [
            {
                path : "/",
                element : <Homepage/>
            }
        ]}
]