import { useRoutes } from "react-router-dom";
import { Route } from "./route/Route";
import ScrollToTop from "./component/resuable/ScrollToTop";


function App() {
  const routing = useRoutes(Route);

  return (
  
   <>
    <ScrollToTop />

   {routing}
   </>
  )
}

export default App
