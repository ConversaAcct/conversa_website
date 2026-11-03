import { useRoutes } from "react-router-dom";
import { Route } from "./route/Route";
import ScrollToHash from "./component/resuable/ScrollToHash";


function App() {
  const routing = useRoutes(Route);

  return (
  
   <>
   <ScrollToHash/>

   {routing}
   </>
  )
}

export default App
